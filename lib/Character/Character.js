class Character {
  constructor(name, age, weight, description, race, background, abilities, bond, personalityTrait, flaw, ideal, skills, inventory, charClass) {
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
     
//description construction and validation

    this._description = description

//race construction and validation
    this._race = race

//background construction and validation

    this._background = background
//abilities construction and validation

    this._abilities = abilities

//bond construction and validation

    this._bond = bond
//personality trait construction and validation

    this._personalityTrait = personalityTrait

//flaw construction and validation
    this._flaw = flaw

//ideal construction and validation
    this._ideal = ideal

//skills construction and validation
    this._skills = skills

//inventory construction and validation

    this._inventory = inventory

//class construction and validation

    this._class = charClass

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
//weight setter

  set weight(value) {
    this._weight = value;
    return value;
  }

  get weight() {
    return this._weight;
  }
};

module.exports = Character;