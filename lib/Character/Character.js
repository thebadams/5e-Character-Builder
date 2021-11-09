class Character {
  constructor(name) {
    // console.log(typeof name)
    // if(typeof name === 'string' || typeof name === undefined || typeof name === null) {
    //   if(typeof name === 'string' && name.length < 1) {
    //     throw new Error('Name Must Be At Least 1 Character Long');
    //   } else {
    //     this._name = name
    //   }
    // } else if(typeof name !== 'string') {
    //   throw new TypeError('Name Must Be A String')
    // } else {
      this._name = name

  };
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Please Provide A String For Name')
    }

    if (value.length < 1) {
      throw new Error('Name Must Be At Least 1 Character Long')
    }
    this._name = value
    return value;
  }

  get name() {
    return this._name
  }
};

console.log(new Character('A'));

module.exports = Character;