const products = [
  {
    id: 1,
    name: 'Astral Dices',
    description: 'The astral plane is vast, but it is not a gentle place.',
    price: 2027.17,
    category: 'dices',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1677941024/astral-dice_swy8yq.webp',
  },
  {
    id: 2,
    name: 'Warrior Dices',
    description:
      'The young warrior gleamed with confidence, a darkened deed complete, without a shred of fear she stood, so confident and proud.',
    price: 2366.84,
    category: 'dices',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1677941024/fire-dice_vjcysw.webp',
  },
  {
    id: 3,
    name: 'Medusa Dices',
    description:
      'When a medusa spies her own reflection, she becomes enthralled by it, trapped by it, she leaves herself behind as a mere stone image of her former self.',
    price: 3216.57,
    category: 'dices',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1677941024/medusa-dice_s5gfjb.webp',
  },
  {
    id: 4,
    name: 'Viking Dices',
    description:
      'What delicious and tantalizing wrath these dice contain, red with anger... Or perhaps that’s just the arcane phosphorus?',
    price: 4377.8,
    category: 'dices',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1677941024/viking-dice_gplaiw.webp',
  },

  {
    id: 5,
    name: 'Dwarven Dice Case',
    description: 'Keep all your dices safe!',
    price: 2027.17,
    category: 'accesories',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678054522/chest-accesory_jzemtm.webp',
  },
  {
    id: 6,
    name: 'Foldable Dice Thrower',
    description: 'Throw your dices inside the new portable thrower.',
    price: 2027.17,
    category: 'accesories',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678054638/foldable-accesory_vbycue.webp',
  },
  {
    id: 7,
    name: 'Roll Dice Mug',
    description: 'Enjoy your coffee.',
    price: 2027.17,
    category: 'accesories',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053814/mug-accesory_monhve.webp',
  },
  {
    id: 8,
    name: 'Roll Dice T-Shirt',
    description: 'Eat, sleep, roll dice, repeat!',
    price: 2027.17,
    category: 'accesories',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053813/shirt-accesory_xq1yz9.webp',
  },

  {
    id: 9,
    name: 'Odin Figurine',
    description: 'The all mighty.',
    price: 2027.17,
    category: 'figurines',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053814/odin-figurine_tifzw5.webp',
  },
  {
    id: 10,
    name: 'Dragon Figurine',
    description: 'Fear the dragon.',
    price: 2027.17,
    category: 'figurines',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053814/dragon-figurine_zsudto.webp',
  },
  {
    id: 11,
    name: 'Gargoyle Figurine',
    description: 'The gargoyle.',
    price: 2027.17,
    category: 'figurines',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053814/gargola-figurine_gjl6ue.webp',
  },
  {
    id: 12,
    name: 'Lilith Figurine',
    description: 'The Demon among us.',
    price: 2027.17,
    category: 'figurines',
    stock: 5,
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053814/lilith-figurine_osuqwb.webp',
  },
];

export const fetchProducts = (category = undefined) => {
  if (category) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.filter(product => product.category === category));
      }, 2000);
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  }
};

export const fetchProduct = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === Number(id)));
    }, 2000);
  });
};
