function Cat(name,owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  console.log(`${this.owner} loves ${this.name}`);
};

const sennacy = new Cat("Sennacy", "Tommy");
sennacy.cuteStatement();

Cat.prototype.cuteStatement = function() {
  console.log(`Everyone loves ${this.name}!`);
};

sennacy.cuteStatement();

Cat.prototype.meow = function() {
  console.log(`${this.name} is meow-ing!`);
};

const markov = new Cat("Markov", "Ned");

markov.meow = function() {
  console.log(`meow meow meow meow says ${this.name}`);
};

sennacy.meow();
markov.meow();
