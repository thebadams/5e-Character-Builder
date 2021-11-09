const Character = require('./Character');

describe('Character Class', () => {
  test('Character Class Acts Like a Class', () => {
    const newCharacter = new Character();
    expect(newCharacter).toBeInstanceOf(Character);
  });
  describe('Character Class Properties', () => {
    
    describe('Character Name Property', () => {
      test.todo('Character Class Has A Name Property');
      test.todo('Character Name Is A String');
    })

    describe('Character Age Property', () => {
      test.todo('Character Class Has An Age Property');
      test.todo('Character Age Is Number');
    })

    describe('Character Weight Property', () => {
      test.todo('Character Class Has A Weight Property');
      test.todo('Character Weight Is A String')
    })

    describe('Character Description Property', () => {
      test.todo('Character Class Has a Description Property');
      test.todo('Character Description Is a String');
    })
    
    describe('Character Race Property', () => {
      test.todo('Character Class Has A Race Property');
      test.todo('Character Race Is An Instance of the Race Class')
    })
    
    describe('Character Background Property', () => {
      test.todo('Character Class Has a Background Property')
      test.todo('Character Background Is An Instance Of the Background Class')
    })

    describe('Character Ability Score Property', () => {
      test.todo('Character Class Has An Ability Score Property')
      test.todo('Character Ability Score Is An Instnace of the Ability Score Class')
    })

    describe('Character Bond Property', () => {
      test.todo('Character Class Has A Bond Property');
      test.todo('Character Bond Is A String');
    })

    describe('Character Personality Trait Property', () => {
      test.todo('Character Class Has a personality trait property');
      test.todo('Character Personality Trait Is A String')
    })

    describe('Character Flaw Property', () => {
      test.todo('Character Class Has A Flaw Property');
      test.todo('Character Flaw Is a String');
    })

    describe('Character Ideal Property', () => {
      test.todo('Character Class Has An Ideal Property');
      test.todo('Character Ideal Is a String');
    })

    describe('Character Skills Property', () => {
      test.todo('Character Class Has A Skills Property')
      test.todo('Character Skills Is An Instance of the Skills Class')
    })

    describe('Character Inventory Property', () => {
      test.todo('Character Class Has An Inventory Property');
      test.todo('Character Inventory Is An Array');
      test.todo('Each Element of the Inventory Array Is An Instance of the Item Class');
    })

    describe('Character Class Property', () => {
      test.todo('Character Class Has a Class Property');
      test.todo('Character Class Property Is An Array');
      test.todo('Each Element of the Array Is An Instance of the Class class');
    })
  })
  
})