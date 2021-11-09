class Character {
  constructor(name) {
    if(name) {
      if(typeof name !== 'string') {
        throw new Error('Please Provide A String For Name')
      }
      if(name.length < 1) {
        throw new Error('Name Must Be At Least 1 Character Long')
      }

      this._name = name
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