const products = [
  {
    id: 1,
    name: "Lenovo Laptop",
    brand: "Lenovo",
    category: "Laptop",

    platforms: [
      {
        name: "Amazon",
        price: 60000,
        rating: 4.5,
        link: "https://amazon.com"
      },
      {
        name: "Flipkart",
        price: 58000,
        rating: 4.4,
        link: "https://flipkart.com"
      },
      {
        name: "Meesho",
        price: 57000,
        rating: 4.1,
        link: "https://meesho.com"
      }
    ]
  },

  {
    id: 2,
    name: "iPhone 16",
    brand: "Apple",
    category: "Mobile",

    platforms: [
      {
        name: "Amazon",
        price: 75000,
        rating: 4.7,
        link: "https://amazon.com"
      },
      {
        name: "Flipkart",
        price: 73000,
        rating: 4.6,
        link: "https://flipkart.com"
      }
    ]
  }
];

export default products;