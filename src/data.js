import { nanoid } from 'nanoid';
import {
  EarphonesCat,
  HeadphonesCat,
  SpeakersCat,
  x99Mk1CategoryImgDesktop,
  x99Mk1CategoryImgMobile,
  x99Mk1CategoryImgTab,
  x99Mk2CategoryImgDesktop,
  x99Mk2CategoryImgMobile,
  x99Mk2CategoryImgTab,
  xx59CartImage,
  xx59CategoryImgDesktop,
  xx59CategoryImgMobile,
  xx59CategoryImgTab,
  xx59GalleryFirstDesktop,
  xx59GalleryFirstMobile,
  xx59GalleryFirstTab,
  xx59GallerySecondDesktop,
  xx59GallerySecondMobile,
  xx59GallerySecondTab,
  xx59GalleryThirdDesktop,
  xx59GalleryThirdMobile,
  xx59GalleryThirdTab,
  xx59ProductDesktop,
  xx59ProductMobile,
  xx59ProductTab,
  xx99Mk1CartImage,
  xx99Mk1GalleryFirstDesktop,
  xx99Mk1GalleryFirstMobile,
  xx99Mk1GalleryFirstTab,
  xx99Mk1GallerySecondDesktop,
  xx99Mk1GallerySecondMobile,
  xx99Mk1GallerySecondTab,
  xx99Mk1GalleryThirdDesktop,
  xx99Mk1GalleryThirdMobile,
  xx99Mk1GalleryThirdTab,
  xx99Mk1ProductDesktop,
  xx99Mk1ProductMobile,
  xx99Mk1ProductTab,
  xx99Mk2CartImage,
  xx99Mk2GalleryFirstDesktop,
  xx99Mk2GalleryFirstMobile,
  xx99Mk2GalleryFirstTab,
  xx99Mk2GallerySecondDesktop,
  xx99Mk2GallerySecondMobile,
  xx99Mk2GallerySecondTab,
  xx99Mk2GalleryThirdDesktop,
  xx99Mk2GalleryThirdMobile,
  xx99Mk2GalleryThirdTab,
  xx99Mk2ProductDesktop,
  xx99Mk2ProductMobile,
  xx99Mk2ProductTab,
  yx1CartImage,
  yx1CategoryImgDesktop,
  yx1CategoryImgMobile,
  yx1CategoryImgTab,
  yx1GalleryFirstDesktop,
  yx1GalleryFirstMobile,
  yx1GalleryFirstTab,
  yx1GallerySecondDesktop,
  yx1GallerySecondMobile,
  yx1GallerySecondTab,
  yx1GalleryThirdDesktop,
  yx1GalleryThirdMobile,
  yx1GalleryThirdTab,
  yx1ProductDesktop,
  yx1ProductMobile,
  yx1ProductTab,
  zx7CartImage,
  zx7CategoryImgDesktop,
  zx7CategoryImgMobile,
  zx7CategoryImgTab,
  zx7GalleryFirstDesktop,
  zx7GalleryFirstMobile,
  zx7GalleryFirstTab,
  zx7GallerySecondDesktop,
  zx7GallerySecondMobile,
  zx7GallerySecondTab,
  zx7GalleryThirdDesktop,
  zx7GalleryThirdMobile,
  zx7GalleryThirdTab,
  zx7ProductDesktop,
  zx7ProductMobile,
  zx7ProductTab,
  zx9CartImage,
  zx9CategoryImgDesktop,
  zx9CategoryImgMobile,
  zx9CategoryImgTab,
  zx9GalleryFirstDesktop,
  zx9GalleryFirstMobile,
  zx9GalleryFirstTab,
  zx9GallerySecondDesktop,
  zx9GallerySecondMobile,
  zx9GallerySecondTab,
  zx9GalleryThirdDesktop,
  zx9GalleryThirdMobile,
  zx9GalleryThirdTab,
  zx9ProductDesktop,
  zx9ProductMobile,
  zx9ProductTab,
} from './assets';

export const pages = [
  {
    id: nanoid(),
    page: 'home',
  },
  {
    id: nanoid(),
    page: 'headphones',
  },
  {
    id: nanoid(),
    page: 'speakers',
  },
  {
    id: nanoid(),
    page: 'earphones',
  },
];

export const categories = [
  {
    id: nanoid(),
    name: 'headphones',
    img: HeadphonesCat,
  },
  {
    id: nanoid(),
    name: 'speakers',
    img: SpeakersCat,
  },
  {
    id: nanoid(),
    name: 'earphones',
    img: EarphonesCat,
  },
];

export const data = [
  {
    id: 1,
    slug: 'yx1',
    name: 'YX1 Wireless Earphones',
    image: {
      mobile: yx1ProductMobile,
      tablet: yx1ProductTab,
      desktop: yx1ProductDesktop,
    },
    cartImage: yx1CartImage,
    category: 'earphones',
    categoryImage: {
      mobile: yx1CategoryImgMobile,
      tablet: yx1CategoryImgTab,
      desktop: yx1CategoryImgDesktop,
    },
    new: true,
    price: 599,
    description:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
    features:
      'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.\n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.',
    includes: [
      {
        quantity: 2,
        item: 'Earphone unit',
      },
      {
        quantity: 6,
        item: 'Multi-size earplugs',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: 'USB-C charging cable',
      },
      {
        quantity: 1,
        item: 'Travel pouch',
      },
    ],
    gallery: {
      first: {
        mobile: yx1GalleryFirstMobile,
        tablet: yx1GalleryFirstTab,
        desktop: yx1GalleryFirstDesktop,
      },
      second: {
        mobile: yx1GallerySecondMobile,
        tablet: yx1GallerySecondTab,
        desktop: yx1GallerySecondDesktop,
      },
      third: {
        mobile: yx1GalleryThirdMobile,
        tablet: yx1GalleryThirdTab,
        desktop: yx1GalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: 'xx99 mark i',
        name: 'XX99 Mark I',
        image: {
          mobile: xx99Mk1ProductMobile,
          tablet: xx99Mk1ProductTab,
          desktop: xx99Mk1ProductDesktop,
        },
      },
      {
        slug: 'xx59',
        name: 'XX59',
        image: {
          mobile: xx59ProductMobile,
          tablet: xx59ProductTab,
          desktop: xx59ProductDesktop,
        },
      },
      {
        slug: 'zx9',
        name: 'ZX9 Speaker',
        image: {
          mobile: zx9ProductMobile,
          tablet: zx9ProductTab,
          desktop: zx9ProductDesktop,
        },
      },
    ],
  },
  {
    id: 2,
    slug: 'xx59',
    name: 'XX59 Headphones',
    image: {
      mobile: xx59ProductMobile,
      tablet: xx59ProductTab,
      desktop: xx59ProductDesktop,
    },
    cartImage: xx59CartImage,
    category: 'headphones',
    categoryImage: {
      mobile: xx59CategoryImgMobile,
      tablet: xx59CategoryImgTab,
      desktop: xx59CategoryImgDesktop,
    },
    new: false,
    price: 899,
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    features:
      'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.',
    includes: [
      {
        quantity: 1,
        item: 'Headphone unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
    ],
    gallery: {
      first: {
        mobile: xx59GalleryFirstMobile,
        tablet: xx59GalleryFirstTab,
        desktop: xx59GalleryFirstDesktop,
      },
      second: {
        mobile: xx59GallerySecondMobile,
        tablet: xx59GallerySecondTab,
        desktop: xx59GallerySecondDesktop,
      },
      third: {
        mobile: xx59GalleryThirdMobile,
        tablet: xx59GalleryThirdTab,
        desktop: xx59GalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: 'xx99 mark ii',
        name: 'XX99 Mark II',
        image: {
          mobile: xx99Mk2ProductMobile,
          tablet: xx99Mk2ProductTab,
          desktop: xx99Mk2ProductDesktop,
        },
      },
      {
        slug: 'xx99 mark i',
        name: 'XX99 Mark I',
        image: {
          mobile: xx99Mk1ProductMobile,
          tablet: xx99Mk1ProductTab,
          desktop: xx99Mk1ProductDesktop,
        },
      },
      {
        slug: 'zx9',
        name: 'ZX9 Speaker',
        image: {
          mobile: zx9ProductMobile,
          tablet: zx9ProductTab,
          desktop: zx9ProductDesktop,
        },
      },
    ],
  },
  {
    id: 3,
    slug: 'xx99 mark i',
    name: 'XX99 Mark I Headphones',
    image: {
      mobile: xx99Mk1ProductMobile,
      tablet: xx99Mk1ProductTab,
      desktop: xx99Mk1ProductDesktop,
    },
    cartImage: xx99Mk1CartImage,
    category: 'headphones',
    categoryImage: {
      mobile: x99Mk1CategoryImgMobile,
      tablet: x99Mk1CategoryImgTab,
      desktop: x99Mk1CategoryImgDesktop,
    },
    new: false,
    price: 1750,
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    features:
      'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.',
    includes: [
      {
        quantity: 1,
        item: 'Headphone unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
    ],
    gallery: {
      first: {
        mobile: xx99Mk1GalleryFirstMobile,
        tablet: xx99Mk1GalleryFirstTab,
        desktop: xx99Mk1GalleryFirstDesktop,
      },
      second: {
        mobile: xx99Mk1GallerySecondMobile,
        tablet: xx99Mk1GallerySecondTab,
        desktop: xx99Mk1GallerySecondDesktop,
      },
      third: {
        mobile: xx99Mk1GalleryThirdMobile,
        tablet: xx99Mk1GalleryThirdTab,
        desktop: xx99Mk1GalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: 'xx99 mark ii',
        name: 'XX99 Mark II',
        image: {
          mobile: xx99Mk2ProductMobile,
          tablet: xx99Mk2ProductTab,
          desktop: xx99Mk2ProductDesktop,
        },
      },
      {
        slug: 'xx59',
        name: 'XX59',
        image: {
          mobile: xx59ProductMobile,
          tablet: xx59ProductTab,
          desktop: xx59ProductDesktop,
        },
      },
      {
        slug: 'zx9',
        name: 'ZX9 Speaker',
        image: {
          mobile: zx9ProductMobile,
          tablet: zx9ProductTab,
          desktop: zx9ProductDesktop,
        },
      },
    ],
  },
  {
    id: 4,
    slug: 'xx99 mark ii',
    name: 'XX99 Mark II Headphones',
    image: {
      mobile: xx99Mk2ProductMobile,
      tablet: xx99Mk2ProductTab,
      desktop: xx99Mk2ProductDesktop,
    },
    category: 'headphones',
    cartImage: xx99Mk2CartImage,
    categoryImage: {
      mobile: x99Mk2CategoryImgMobile,
      tablet: x99Mk2CategoryImgTab,
      desktop: x99Mk2CategoryImgDesktop,
    },
    new: true,
    price: 2999,
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    features:
      'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
    includes: [
      {
        quantity: 1,
        item: 'Headphone unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
      {
        quantity: 1,
        item: 'Travel bag',
      },
    ],
    gallery: {
      first: {
        mobile: xx99Mk2GalleryFirstMobile,
        tablet: xx99Mk2GalleryFirstTab,
        desktop: xx99Mk2GalleryFirstDesktop,
      },
      second: {
        mobile: xx99Mk2GallerySecondMobile,
        tablet: xx99Mk2GallerySecondTab,
        desktop: xx99Mk2GallerySecondDesktop,
      },
      third: {
        mobile: xx99Mk2GalleryThirdMobile,
        tablet: xx99Mk2GalleryThirdTab,
        desktop: xx99Mk2GalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: 'xx99 mark i',
        name: 'XX99 Mark I',
        image: {
          mobile: xx99Mk1ProductMobile,
          tablet: xx99Mk1ProductTab,
          desktop: xx99Mk1ProductDesktop,
        },
      },
      {
        slug: 'xx59',
        name: 'XX59',
        image: {
          mobile: xx59ProductMobile,
          tablet: xx59ProductTab,
          desktop: xx59ProductDesktop,
        },
      },
      {
        slug: 'zx9',
        name: 'ZX9 Speaker',
        image: {
          mobile: zx9ProductMobile,
          tablet: zx9ProductTab,
          desktop: zx9ProductDesktop,
        },
      },
    ],
  },
  {
    id: 5,
    slug: 'zx7',
    name: 'ZX7 Speaker',
    image: {
      mobile: zx7ProductMobile,
      tablet: zx7ProductTab,
      desktop: zx7ProductDesktop,
    },
    category: 'speakers',
    cartImage: zx7CartImage,
    categoryImage: {
      mobile: zx7CategoryImgMobile,
      tablet: zx7CategoryImgTab,
      desktop: zx7CategoryImgDesktop,
    },
    new: false,
    price: 3500,
    description:
      'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    features:
      'Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.',
    includes: [
      {
        quantity: 2,
        item: 'Speaker unit',
      },
      {
        quantity: 2,
        item: 'Speaker cloth panel',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 7.5m audio cable',
      },
      {
        quantity: 1,
        item: '7.5m optical cable',
      },
    ],
    gallery: {
      first: {
        mobile: zx7GalleryFirstMobile,
        tablet: zx7GalleryFirstTab,
        desktop: zx7GalleryFirstDesktop,
      },
      second: {
        mobile: zx7GallerySecondMobile,
        tablet: zx7GallerySecondTab,
        desktop: zx7GallerySecondDesktop,
      },
      third: {
        mobile: zx7GalleryThirdMobile,
        tablet: zx7GalleryThirdTab,
        desktop: zx7GalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: 'xx99 mark i',
        name: 'XX99 Mark I',
        image: {
          mobile: xx99Mk1ProductMobile,
          tablet: xx99Mk1ProductTab,
          desktop: xx99Mk1ProductDesktop,
        },
      },
      {
        slug: 'xx59',
        name: 'XX59',
        image: {
          mobile: xx59ProductMobile,
          tablet: xx59ProductTab,
          desktop: xx59ProductDesktop,
        },
      },
      {
        slug: 'zx9',
        name: 'ZX9 Speaker',
        image: {
          mobile: zx9ProductMobile,
          tablet: zx9ProductTab,
          desktop: zx9ProductDesktop,
        },
      },
    ],
  },
  {
    id: 6,
    slug: 'zx9',
    name: 'ZX9 Speaker',
    image: {
      mobile: zx9ProductMobile,
      tablet: zx9ProductTab,
      desktop: zx9ProductDesktop,
    },
    category: 'speakers',
    cartImage: zx9CartImage,
    categoryImage: {
      mobile: zx9CategoryImgMobile,
      tablet: zx9CategoryImgTab,
      desktop: zx9CategoryImgDesktop,
    },
    new: true,
    price: 4500,
    description:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
    features:
      'Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).\n\nDiscover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.',
    includes: [
      {
        quantity: 2,
        item: 'Speaker unit',
      },
      {
        quantity: 2,
        item: 'Speaker cloth panel',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 10m audio cable',
      },
      {
        quantity: 1,
        item: '10m optical cable',
      },
    ],
    gallery: {
      first: {
        mobile: zx9GalleryFirstMobile,
        tablet: zx9GalleryFirstTab,
        desktop: zx9GalleryFirstDesktop,
      },
      second: {
        mobile: zx9GallerySecondMobile,
        tablet: zx9GallerySecondTab,
        desktop: zx9GallerySecondDesktop,
      },
      third: {
        mobile: zx9GalleryThirdMobile,
        tablet: zx9GalleryThirdTab,
        desktop: zx9GalleryThirdDesktop,
      },
    },
    others: [
      {
        slug: 'zx7',
        name: 'ZX7 Speaker',
        image: {
          mobile: zx7ProductMobile,
          tablet: zx7ProductTab,
          desktop: zx7ProductDesktop,
        },
      },
      {
        slug: 'xx99 mark i',
        name: 'XX99 Mark I',
        image: {
          mobile: xx99Mk1ProductMobile,
          tablet: xx99Mk1ProductTab,
          desktop: xx99Mk1ProductDesktop,
        },
      },
      {
        slug: 'xx59',
        name: 'XX59',
        image: {
          mobile: xx59ProductMobile,
          tablet: xx59ProductTab,
          desktop: xx59ProductDesktop,
        },
      },
    ],
  },
];
