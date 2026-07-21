const products = [

  {
    id: 1,
    name: "iPhone 16",
    brand: "Apple",
    category: "Mobile",
    platforms: [
      {
        name: "Amazon",
        price: 79999,
        rating: 4.5,
        link: "https://amazon.in"
      },
      {
        name: "Flipkart",
        price: 77999,
        rating: 4.4,
        link: "https://flipkart.com"
      }
    ]
  },

  {
    id: 2,
    name: "Nike Shoes",
    brand: "Nike",
    category: "Shoes",
    platforms: [
      {
        name: "Myntra",
        price: 3999,
        rating: 4.5,
        link: "https://myntra.com"
      },
      {
        name: "Amazon",
        price: 3799,
        rating: 4.3,
        link: "https://amazon.in"
      }
    ]
  },

  {
    id: 3,
    name: "Lenovo IdeaPad Slim 5",
    brand: "Lenovo",
    category: "Laptop",
    platforms: [
      {
        name: "Amazon",
        price: 58999,
        rating: 4.4,
        link: "https://amazon.in"
      },
      {
        name: "Flipkart",
        price: 57999,
        rating: 4.5,
        link: "https://flipkart.com"
      }
    ]
  }

];

module.exports = products;