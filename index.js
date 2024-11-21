const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let products = [
  { name: 'Laptop', price: 50000, category: 'Electronics' },
  { name: 'Mobile', price: 20000, category: 'Electronics' },
  { name: 'Shirt', price: 1500, category: 'Apparel' },
  { name: 'Mixer Grinder', price: 4000, category: 'Home Appliances' },
];

let cars = [
  { make: 'Maruti', model: 'Swift', mileage: 15000 },
  { make: 'Hyundai', model: 'i20', mileage: 25000 },
  { make: 'Tata', model: 'Nexon', mileage: 30000 },
];

let movies = [
  { title: '3 Idiots', genre: 'Comedy', rating: 9 },
  { title: 'Dangal', genre: 'Drama', rating: 10 },
  { title: 'Bahubali', genre: 'Action', rating: 8 },
];

let orders = [
  { orderID: 1, customerName: 'Rahul', status: 'shipped' },
  { orderID: 2, customerName: 'Sita', status: 'pending' },
  { orderID: 3, customerName: 'Amit', status: 'shipped' },
];

function filterByCategory(products, category) {
  let filteredProducts = products.filter(
    (product) => product.category === category
  );
  return filteredProducts;
}

function filterCarsByMileage(cars, mileage) {
  let filteredCars = cars.filter((car) => car.mileage < mileage);
  return filteredCars;
}

function filterMoviesByRating(movies, rating) {
  let filteredMovies = movies.filter((movie) => movie.rating > rating);
  return filteredMovies;
}

function filterOrdersByStatus(orders, status) {
  let filteredOrders = orders.filter((order) => order.status === status);
  return filteredOrders;
}

app.get('/products/category/:category', (req, res) => {
  let category = req.params.category;
  let items = filterByCategory(products, category);
  res.json(items);
});

app.get('/cars/mileage/:mileage', (req, res) => {
  let mileage = req.params.mileage;
  let resultCars = filterCarsByMileage(cars, mileage);
  res.json(resultCars);
});

app.get('/movies/rating/:rating', (req, res) => {
  let rating = req.params.rating;
  let resultMovies = filterMoviesByRating(movies, rating);
  res.json(resultMovies);
});

app.get('/orders/status/:status', (req, res) => {
  let status = req.params.status;
  let resultOrders = filterOrdersByStatus(orders, status);
  res.json(resultOrders);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
