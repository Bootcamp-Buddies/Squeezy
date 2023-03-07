const mongoose = require('mongoose');
const db = require('./connection');
const { User, Product, Category } = require('../models');
require('dotenv').config();

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    // Add catergories ex:
    //{ name: 'Food' },
    {name: 'Sweet Oranges'}, //0
    {name: 'Mandarins'}, //1
    {name: 'Limes'}, //2
    {name: 'Grapefruits'}, //3
    {name: 'Lemons'}, //4
    {name: 'Other'} //5
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    // add products ex:
    {
      name: 'Pomelo',
      description:
        'Pomelo (or pummelo/pamplemousse/jabong/shaddock this fruit has way too many names!) is one of the three original citrus species from which the rest of the citrus fruits hybridized. The white-fleshed pomelo is sweet while the pink-fleshed one is sour. Pomelos are eaten in Asia during the Mooncake festival.',
      image: 'pomelo.png',
      category: categories[5]._id,
      price: 9.99,
      quantity: 200
    },
    {
      name: 'Meyer Lemon',
      description:
        'The Meyer lemon is named after the American agricultural explorer Frank Nicholas Meyer, who first sampled and brought this citrus fruit to the US from China. It is a cross between a lemon and a mandarin orange. Though first used as an ornamental tree in China, this fruit found its way into cooking, thanks to popular chefs like Alice Waters and Martha Stewart.',
      image: 'meyer-lemon.png',
      category: categories[4]._id,
      price: 4.99,
      quantity: 800
    },
    {
      name: 'Kaffir Lime',
      description:
        'Kaffir lime (also known as makrut lime) is a citrus fruit that features quite prominently in Southeast Asian cuisine. In fact, its leaves are used way more than the fruit in preparing Thai, Cambodian, Vietnamese, and Indonesian dishes. Kaffir lime juice is also used as a shampoo in this region and is believed to kill head lice.',
      image: 'kaffir-lime.png',
      category: categories[2]._id,
      price: 3.99,
      quantity: 1000
    },
    {
      name: 'Blood Orange',
      description:
        'Blood orange has quite the fitting moniker considering its flesh is a very distinctive dark red. This is because it contains unique antioxidants called anthocyanins that are not found in any other citrus fruits. Another feature that sets it apart from its other citrus counterparts is that it has a distinct raspberry flavor to it in combination with the usual citric flavor.',
      image: 'blood-orange.png',
      category: categories[5]._id,
      price: 3.99,
      quantity: 1200
    },
    {
      name: 'Finger Lime',
      description:
        'The finger lime, as the name suggests, looks like an elongated lime. Its juicy vesicles are used as garnish in various dishes and are referred to as lime caviar. Finger lime has a tangy flavor that makes it perfect for making pickles and marmalade. But that is not all! Its peel is also dried and used as a spice.',
      image: 'finger-lime.png',
      category: categories[2]._id,
      price: 12.99,
      quantity: 250
    },
    {
      name: 'Yuzu',
      description:
        'Yuzu is a highly aromatic citrus fruit that looks a lot like a small grapefruit. The interesting thing about yuzu is that it is rarely consumed as a fruit. Yuzu juice is used in the preparation of ponzu sauce, yuzu vinegar, yuzu tea, and some alcoholic drinks.',
      image: 'yuzu.png',
      category: categories[5]._id,
      price: 4.99,
      quantity: 350
    },
    {
      name: 'Persian Lime',
      description:
        'Persian lime is the most widely cultivated lime species and is a hybrid between a key lime and a lemon. The unique features that make it great for commercial cultivation are that it is seedless, has a longer shelf life, is bigger than the key lime, and its bushes have no thorns. However, it is less acidic and has a less bitter taste than key lime.',
      image: 'persian-lime.png',
      category: categories[2]._id,
      price: 2.99,
      quantity: 1500
    },
    {
      name: 'Kumquat',
      description:
        'Kumquat (the name just rolls off your tongue, does not it?) is very similar to a sweet orange but is much smaller in size and more resistant to cold weather. This juicy citrus has many more variants like the Morgani (round) kumquat, Nagami (oval) kumquat, Jiangsu kumquat, and the Centennial Variegated kumquat.',
      image: 'kumquat.png',
      category: categories[0]._id,
      price: 6.99,
      quantity: 500
    },
    {
      name: 'Tangelo',
      description:
        'Tangelo is a citrus fruit that is a cross between a tangerine and a pomelo or grapefruit. It is extremely juicy and has a mildly sweet flavor. This sweet flavor makes it possible for tangelos to be used as a substitute for sweet oranges and mandarin oranges in drinks and dishes.',
      image: 'tangelo.png',
      category: categories[5]._id,
      price: 8.99,
      quantity: 500
    },
    {
      name: 'Grapefruit',
      description:
        'The grapefruit boasts of a unique flavor profile that ranges from sour to semi-sweet to bitter notes. It is a cross between two other citrus fruits sweet orange and pomelo.This citrus fruit gets its name from the way it grows in bunches that resemble grapes. The flesh of this beautiful fruit can come in red, white, or pink hues, depending on its cultivars.',
      image: 'grapefruit.png',
      category: categories[3]._id,
      price: 5.99,
      quantity: 750
    },
    {
      name: 'Tangerine',
      description:
        'The trusty old tangerine is believed to be a variety of another citrus fruit, the mandarin orange. It is much sweeter than a regular orange and is used in preparing a bunch of drinks, desserts, salads, and other dishes. Tangerine peels are so delicious that they are also eaten coated in chocolate!',
      image: 'tangerine.png',
      category: categories[1]._id,
      price: 3.99,
      quantity: 1100
    },
    {
      name: 'Buddhas Hand',
      description:
        'When it comes to oddly shaped fruits, Buddhas hand sure does top the list. This unique fruit is divided into finger-like segments. Due to its lack of pulp or juice, only its zest is used in preparing desserts, dishes, and alcoholic drinks.',
      image: 'buddhas-hand.png',
      category: categories[5]._id,
      price: 14.99,
      quantity: 100
    },
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
