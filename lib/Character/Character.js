class Character {
  constructor(name, age, weight) {
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
    if(typeof age === 'number' || age === undefined || age === null) {
      if(age < 1) {
        throw new Error('Age Must Be Greater Than 0')
      }
      this._age = age 
    } else {
      throw new TypeError('Please Provide A Number For Age');
    }

//weight construction and validation
    this._weight = weight
     

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
    console.log(value)
    if(typeof value !== 'number') {
      throw new TypeError('Please Provide A Number For Age')
    }
    if(value < 1) {
      console.log(value)
      throw new Error('Age Must Be Greater Than 0')
    }
    this._age = value
    return value
  }
//age getter
  get age() {
    return this._age
  }
};

module.exports = Character;