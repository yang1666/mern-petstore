import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Yiming',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1111'),
      isAdmin: true,
    },
    {
      name: 'Zilin',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: '1',
      name: 'Bridge Dog Mini Dish',
      slug: 'bd-mini-dish',
      category: 'mini-dish',
      image: '/images/p1.jpg', //679px * 829px
      price: 120,
      countInStock: 10,
      brand: 'Bridgedog',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality cat Mini Dish in violet',
    },
    {
      // _id: '2',
      name: 'Bridge Dog Mini Pan',
      slug: 'bd-mini-pan',
      category: 'mini-pan',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Bridgedog',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality cat Mini Pan in peach pink',
    },
    {
      // _id: '3',
      name: 'Bridge Dog Piggy Dish',
      slug: 'bd-piggy-dish',
      category: 'piggy-dish',
      image: '/images/p3.png',
      price: 25,
      countInStock: 15,
      brand: 'Bridgedog',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality pet Piggy Dish in lemon cream',
    },
    {
      // _id: '4',
      name: 'Bridge Dog Bear Dish',
      slug: 'bd-bear-dish',
      category: 'bear-dish',
      image: '/images/p4.png',
      price: 65,
      countInStock: 5,
      brand: 'Bridgedog',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality pet Bear Dish in caramel face',
    },
  ],
};
export default data;
