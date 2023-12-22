import images from './images';

const friedfishes = [
  {
    title: 'shrimp',
    price: '$13',
  },
  {
    title: 'Fish',
    price: '$15',
  },
  {
    title: 'Shrimp and Chicken',
    price: '$15',
  },
  {
    title: 'Chicken',
    price: '$15',
  },
  {
    title: 'Seafood Mix',
    price: '$17',
  },
  {
    title: 'Whole Fish',
    price: '$19',
  },
];

const sandwiches = [
  {
    title: 'Minuta (Fish) Sandwich',
    price: '$11',
  },
  {
    title: "Tuna Maria",
    price: '$12',
  },
  {
    title: 'Phili Steak ',
    price: '$13',
  },
  {
    title: 'OG Cuban Panini',
    price: '12',
  },
  {
    title: 'Teriyaki Chicken Sandwich',
    price: '$10',
  },
  {
    title: 'Shrimp Slider',
    price: '$11',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { friedfishes, sandwiches, awards };
