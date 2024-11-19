import mongoose from 'mongoose';

let profile_imgs_name_list = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];
let profile_imgs_collections_list = ["notionists-neutral", "adventurer","lorelei","lorelei-neutral","notionists",];

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, 'Email must be at least 3 characters long'],
  },
  password: {
    type: String,
    required: true,
  },
  profile_img: {
    type: String,
    default: () => {
      return `https://api.dicebear.com/6.x/${
        profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]
      }/svg?seed=${
        profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]
      }`;
    },
  },
  google_auth: {
    type: Boolean,
    default: false,
  }
});

const User = mongoose.model('User', userSchema);

export default User;
