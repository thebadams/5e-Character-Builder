class Character {
  constructor(name, age) {
    //name construction and validation
    if(typeof name === 'string' || name === undefined || name === null) {
      if(typeof name === 'string' && name.length <1) {
        throw new Error('Name Must Be At Least 1 Character Long')
      }
      this._name = name
    } else {
      throw new TypeError('Please Provide A String For Name');
    }
//age construction and validation
     this._age = age 

  };
  //name setter
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
//name getter
  get name() {
    return this._name
  }
//age setter
  set age(value) {
    this._age = value
  }
//age getter
  get age() {
    return this._age
  }
};

module.exports = Character;