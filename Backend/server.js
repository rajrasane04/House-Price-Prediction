const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');  

const app = express();

F_URL = 'https://housepricer-frontend.onrender.com';

// Enables .env file data access
dotenv.config();

// Middleware to parse JSON data
app.use(express.json());


// Connecting MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      autoIndex:true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};
connectDB();


// Enabling CORS for all or specific origins 
app.use(cors({
  origin: (origin, callback) => {
      const allowedOrigins = [process.env.F_URL, 'http://localhost:5173'];
      if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));


// @access Public
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create new user
      const newUser = new User({ email, password });
  
      // Hash password before saving
      const salt = await bcrypt.genSalt(10); // Generate salt
      const hashedPassword = await bcrypt.hash(password, salt); // Hash the password
      console.log(`Hashed password for ${email}: ${hashedPassword}`);  // Debugging log
  
      newUser.password = hashedPassword;
  
      await newUser.save();
  
      // Return the user data
      res.status(201).json({
        message: 'User registered successfully',
        user: {
          email: newUser.email,
          profile_img: newUser.profile_img, 
        }
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });


// @access Public
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    // Ensuring both email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide both email and password' });
    }

    try {
        // Checking if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


// @desc Get user profile (with image)
// @access Private (Requires JWT)
app.get('/api/user/profile', async (req, res) => {
    try {
      const token = req.headers['authorization']?.split(' ')[1]; // Extract JWT token
      if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
      const user = await User.findById(decoded.userId); // Fetch user data by ID

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Return user data with profile image
      res.json({
        email: user.email,
        profile_img: user.profile_img, // Send profile image URL
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
});
  

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port --> ${PORT}`);
});
