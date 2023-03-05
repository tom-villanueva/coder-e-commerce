const products = [
  {
    id: 1,
    name: 'Astral Dices',
    description:
      'The astral plane is vast, but it is not a gentle place. Great shards of space and matter fold in on themselves endlessly within the void. Such collisions leave pieces, slivers of the astral plane that rain down on the material plane like meteor showers. Gems cut from these fallen stars contain the violets and blues of the nebulas and the pinpoint lights of the astral plane itself. Space and time warp slowly around these mythical amethysts, so many of their owners have disappeared that most believe they never existed at all.',
    price: 2027.17,
    category: 'dices',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1677941024/astral-dice_swy8yq.webp',
  },
  {
    id: 2,
    name: 'Warrior Dices',
    description:
      'The young warrior gleamed with confidence, a darkened deed complete, without a shred of fear she stood, so confident and proud. The mighty efreet leered through shining eyes, she’d seen through every cheat, he stood up from his flaming throne and deeply laughed aloud. “What is your wish?” The genie asked, so sure that he could twist, the meaning of her wishes into terrors to endure. “My wish is simple sir.” The dancer sang, “But I’m afraid I must insist, I long to catch your eye great sir, to keep and to secure. “Granted” laughed the genie, though to his horror he did find, his eye had now been torn away, his ironic wish reversed. The dancer held a shining ruby, the genie found himself half-blind, she strode away far richer then, as he flailed about and cursed.',
    price: 2366.84,
    category: 'dices',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1677941024/fire-dice_vjcysw.webp',
  },
  {
    id: 3,
    name: 'Medusa Dices',
    description:
      'A single moment, a moment of warrior’s bravery and ingenuity but a moment of shock and terror for the ancient monstrosity. When a medusa spies her own reflection, she becomes enthralled by it, trapped by it, she leaves herself behind as a mere stone image of her former self. The mirror shatters, each shard contains her wholly, a perfect image of every shimmering scale and glinting fang. A single moment wrapped in glass, forever reflecting the pinnacle of both triumph and terror.',
    price: 3216.57,
    category: 'dices',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1677941024/medusa-dice_s5gfjb.webp',
  },
  {
    id: 4,
    name: 'Viking Dices',
    description:
      'What delicious and tantalizing wrath these dice contain, red with anger... Or perhaps that’s just the arcane phosphorus? Andrar sculpts each die with precision and skill, but just occasionally he adds the boiling zeal that made the Skullsplitter clan infamous among the orcish warlords of old. These ingots barely contain Andrar’s fury, keeping the red-hot righteous anger in check with adamantine brands. These dice want nothing more than to BURN THE ENEMY TO CINDERS. Limited quantity available, made only when Andrar has a flaming row.',
    price: 4377.8,
    category: 'dices',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1677941024/viking-dice_gplaiw.webp',
  },

  {
    id: 5,
    name: 'Dwarven Dice Case',
    description: 'Keep all your dices safe!',
    price: 2027.17,
    category: 'accesories',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678054522/chest-accesory_jzemtm.webp',
  },
  {
    id: 6,
    name: 'Foldable Dice Thrower',
    description: 'Throw your dices inside the new portable thrower.',
    price: 2027.17,
    category: 'accesories',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678054638/foldable-accesory_vbycue.webp',
  },
  {
    id: 7,
    name: 'Roll Dice Mug',
    description: 'Enjoy your coffee.',
    price: 2027.17,
    category: 'accesories',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053814/mug-accesory_monhve.webp',
  },
  {
    id: 8,
    name: 'Roll Dice T-Shirt',
    description: 'Eat, sleep, roll dice, repeat!',
    price: 2027.17,
    category: 'accesories',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053813/shirt-accesory_xq1yz9.webp',
  },

  {
    id: 9,
    name: 'Odin Figurine',
    description: 'The all mighty.',
    price: 2027.17,
    category: 'figurines',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053814/odin-figurine_tifzw5.webp',
  },
  {
    id: 10,
    name: 'Dragon Figurine',
    description: 'Fear the dragon.',
    price: 2027.17,
    category: 'figurines',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053814/dragon-figurine_zsudto.webp',
  },
  {
    id: 11,
    name: 'Gargoyle Figurine',
    description: 'The gargoyle.',
    price: 2027.17,
    category: 'figurines',
    img: 'https://res.cloudinary.com/dzbgydtng/image/upload/v1678053814/gargola-figurine_gjl6ue.webp',
  },
  {
    id: 12,
    name: 'Lilith Figurine',
    description: 'The Demon among us.',
    price: 2027.17,
    category: 'figurines',
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
