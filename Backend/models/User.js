const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');  // Remove bcrypt import temporarily

// Profile image lists
let profile_imgs_name_list = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];
let profile_imgs_collections_list = ["notionists-neutral", "adventurer-neutral", "fun-emoji"];

// User schema definition
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, 'email must be at least 3 characters long'],
  },
  password: {
    type: String,
    required: true,
  },
  profile_img: {
    type: String,
    default: () => {
        // Generates a random profile image URL from Dicebear API
        return `https://api.dicebear.com/6.x/${profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]}/svg?seed=${profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]}`;
    },
  },
});

// Disable bcrypt hashing temporarily by commenting out or removing the pre-save hook
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next(); // Skip if password isn't modified
//   const salt = await bcrypt.genSalt(10); // Generate salt
//   this.password = await bcrypt.hash(this.password, salt); // Hash the password
//   next();
// });

const User = mongoose.model('User', userSchema);
module.exports = User;
