const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('../config/db'); 
const MenuItem = require('../models/MenuItem');

dotenv.config();

const menuData = [
  { name: 'Cheese Burger', price: 120, category: 'Burger', image: 'burger.png' },
  { name: 'Veg Burger', price: 100, category: 'Burger', image: 'burger.png' },
  { name: 'Chicken Burger', price: 150, category: 'Burger', image: 'burger.png' },
  { name: 'Double Patty', price: 180, category: 'Burger', image: 'burger.png' },
  { name: 'Tandoori Burger', price: 140, category: 'Burger', image: 'burger.png' },
  { name: 'Grilled Burger', price: 160, category: 'Burger', image: 'burger.png' },

  { name: 'Marinara', price: 200, category: 'Pizza', image: 'marinara.png' },
  { name: 'Veggie Delight', price: 220, category: 'Pizza', image: 'marinara.png' },
  { name: 'Farmhouse', price: 240, category: 'Pizza', image: 'marinara.png' },
  { name: 'Paneer Tikka', price: 250, category: 'Pizza', image: 'marinara.png' },
  { name: 'Tandoori Paneer', price: 260, category: 'Pizza', image: 'marinara.png' },
  { name: 'Cheese Burst', price: 230, category: 'Pizza', image: 'marinara.png' },

  { name: 'Cola', price: 50, category: 'Drink', image: 'drink.png' },
  { name: 'Lemonade', price: 45, category: 'Drink', image: 'drink.png' },
  { name: 'Orange Juice', price: 55, category: 'Drink', image: 'drink.png' },
  { name: 'Mojito', price: 60, category: 'Drink', image: 'drink.png' },
  { name: 'Soda', price: 40, category: 'Drink', image: 'drink.png' },
  { name: 'Peach IcedTea', price: 50, category: 'Drink', image: 'drink.png' },

  { name: 'Classic Fries', price: 70, category: 'French fries', image: 'fries.png' },
  { name: 'Cheesy Fries', price: 80, category: 'French fries', image: 'fries.png' },
  { name: 'PeriPeri Fries', price: 85, category: 'French fries', image: 'fries.png' },
  { name: 'Masala Fries', price: 75, category: 'French fries', image: 'fries.png' },
  { name: 'Tandoori Fries', price: 90, category: 'French fries', image: 'fries.png' },
  { name: 'Spicy Fries', price: 80, category: 'French fries', image: 'fries.png' },

  { name: 'Broccoli', price: 60, category: 'Veggies', image: 'veggies.png' },
  { name: 'Zucchini', price: 65, category: 'Veggies', image: 'veggies.png' },
  { name: 'Mushroom', price: 55, category: 'Veggies', image: 'veggies.png' },
  { name: 'Spinach', price: 50, category: 'Veggies', image: 'veggies.png' },
  { name: 'Corn', price: 60, category: 'Veggies', image: 'veggies.png' },
  { name: 'Bell Pepper', price: 55, category: 'Veggies', image: 'veggies.png' },
];

const seedMenu = async () => {
  try {
    await connectDB(); 
    await MenuItem.deleteMany();
    await MenuItem.insertMany(menuData);
    console.log('Menu seeded successfully!');
  } catch (err) {
    console.error('Seeding failed:', err.message);
  } finally {
    mongoose.disconnect();
  }
};

seedMenu();
