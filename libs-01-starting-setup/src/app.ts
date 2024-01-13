// import _ from 'lodash';

// declare var GLOBAL: any;

// console.log(_.shuffle([1, 2, 3]));

// console.log(GLOBAL);

import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { Product } from './product.model';

const products = [
  { title: 'A Carpet', price: 24.12 },
  { title: 'A Ball', price: 10.24 },
];

const newProd = new Product('', -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log('VALIDATION ERRORS!');
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});

// const p1 = new Product('A Book', 12.24);

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToInstance(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}
