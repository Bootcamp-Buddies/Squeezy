const mongoose = require('mongoose');
const db = require('./connection');
const { User, Product, Category } = require('../models');
require('dotenv').config();

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
        // Add catergories ex:
        //{ name: 'Food' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    // add products ex:
    {
    //   name: 'Tin of Cookies',
    //   description:
    //     'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    //   image: 'cookie-tin.jpg',
    //   category: categories[0]._id,
    //   price: 2.99,
    //   quantity: 500
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Test',
    lastName: 'User',
    email: 'test@test.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'User',
    lastName: 'Two',
    email: 'two@test.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
