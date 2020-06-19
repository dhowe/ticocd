let faker = require('faker');
let RiTa = require('rita');
let grammar = require('./assets/js/grammar');

let context = {
  randomJob: () => faker.company.companyName(),
  catchPhrase: () => faker.company.catchPhrase(),
  pluralNoun: () => RiTa.randomWord({ pos: 'nns' }),
  randomAdjective: () => RiTa.randomWord({ pos: 'jjs' }),
  randomPosition: () => faker.name.jobArea() + " " + faker.name.jobType(),
  randomPerson: () => faker.name.firstName().articlize() + " " + faker.name.lastName(),
  randomPosition: () => faker.name.jobArea() + " " + faker.name.jobType(),
  randomLocation: () => faker.address.city() + ", " + faker.address.state()
};

let rg = new RiTa.Grammar(grammar);
rg.addTransform(context);

for (let i = 0; i < 10; i++) {
  console.log(i, rg.expand());
}
