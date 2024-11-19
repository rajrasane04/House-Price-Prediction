import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import User from './models/User.js'; 
import admin from 'firebase-admin';
import { getAuth } from 'firebase-admin/auth';

const serviceAccountKey = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS);

let profile_imgs_name_list = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];
let profile_imgs_collections_list = ["notionists-neutral", "adventurer","lorelei","lorelei-neutral","notionists",];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey)
});

const app = express();

dotenv.config();

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { autoIndex: true });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};
connectDB();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.options('*', cors());

app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, password });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    newUser.password = hashedPassword;

    await newUser.save();

    res.status(201).json({
      message: 'User registered successfully',
      user: { email: newUser.email, profile_img: newUser.profile_img },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide both email and password' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/user/profile', async (req, res) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ email: user.email, profile_img: user.profile_img });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post("/google-auth", async (req, res) => {
  const { access_token } = req.body;

  let picture = `https://api.dicebear.com/6.x/${
        profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]
      }/svg?seed=${
        profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]
      }`;

  if (!access_token) {
    return res.status(400).json({ error: "Access token is required" });
  }

  try {
    const decodedUser = await getAuth().verifyIdToken(access_token);
    const { email } = decodedUser;

    let user = await User.findOne({ email });

    if (user) {
      if (!user.google_auth) {
        return res.status(403).json({ error: "This email was signed up without Google. Please log in with a password." });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).json({ message: "Login successful", token, user: { email: user.email, profile_img: user.profile_img } });
    } else {
      user = new User({
        email,
        password: bcrypt.hashSync(access_token, 10),
        profile_img: picture || 'default-profile-image-url',
        google_auth: true,
      });

      await user.save();

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(201).json({ message: "Account created and login successful", token, user: { email: user.email, profile_img: user.profile_img } });
    }
  } catch (err) {
    console.error("Error during Google authentication:", err.message);
    return res.status(500).json({ error: "Failed to authenticate with Google. Please try again." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port --> ${PORT}`);
});
