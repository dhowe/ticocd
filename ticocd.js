let faker = require('faker');
//let RiTa = require('../rita2js/lib/rita');
let RiTa = require('rita');
let grammar = require('./assets/js/grammar');

let context = {
  qq: (s) => '<q>' + s + '</q>',
  randomJob: () => faker.company.companyName(),
  catchPhrase: () => faker.company.catchPhrase(),
  pluralNoun: () => RiTa.randomWord({ pos: 'nns' }),
  randomAdjective: () => RiTa.randomWord({ pos: 'jjs' }),
  randomPosition: () => faker.name.jobArea() + " " + faker.name.jobType(),
  randomPosition: () => faker.name.jobArea() + " " + faker.name.jobType(),
  randomLocation: () => faker.address.city() + ", " + faker.address.state(),
  randomPerson: () => faker.name.firstName() + " " + faker.name.lastName()
};

let rg = new RiTa.Grammar(grammar, context);
for (let i = 0; i < 100; i++) {
  console.log(i, rg.expand());
}
