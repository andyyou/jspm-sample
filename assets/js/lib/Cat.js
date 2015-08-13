export default class Cat {
  constructor (name) {
    this.name = name;
  }

  yell () {
    var result = `${this.name}: meow`;
    console.log(result);
    return result;
  }
}
