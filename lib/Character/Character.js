class Character {
  constructor(name) {
    if(typeof name === 'string' || name === undefined || name === null) {
      if(typeof name === 'string' && name.length <1) {
        throw new Error('Name Must Be At Least 1 Character Long')
      }
      this._name = name
    } else {
      throw new TypeError('Please Provide A String For Name');
    }
      

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

module.exports = Character;