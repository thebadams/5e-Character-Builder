const Character = require('./Character');

describe('Character Class', () => {
  test('Character Class Acts Like a Class', () => {
    const newCharacter = new Character();
    expect(newCharacter).toBeInstanceOf(Character);
  });
  describe('Character Class Properties', () => {
    describe('Character Name Property', () => {
      const newCharacter = new Character('Valar the Oathsmith')
      test('Character Class Has A Name Property', () => {
        expect(newCharacter).toHaveProperty('_name');
      });
      test('Character Name Is A String', () => {
        expect(typeof newCharacter._name).toBe('string');
      });
      test('Character Name Is "Valar The Oathsmith"', () => {
        expect(newCharacter._name).toBe('Valar the Oathsmith');
      })
      describe('Character Name Getter and Setters', () => {
        const newCharacter = new Character()
        test('Name Getter Should Return Undefined If No Name Has Been Provided', () => {          
          expect(newCharacter.name).toBeUndefined()
          expect(newCharacter._name).toBeUndefined()
        })
        test('Name Setter Should Successfully Work And Set _name Property', () => {
          newCharacter.name = 'Valar the Oathsmith';
          expect(newCharacter.name).toEqual('Valar the Oathsmith');
          expect(newCharacter._name).toBe(newCharacter.name)
        })
       
      })
      describe('Character Name Error Handling', () => {
        describe('Character Name Type Handling', () => {
          test('If A Non String Is Provided, Throw An Error', () => {
            expect(() => {
            new Character(1)
          }).toThrow('Please Provide A String For Name')
          expect(() => {
            const newCharacter = new Character();
            newCharacter.name = 2
          }).toThrow('Please Provide A String For Name')
          })
          
        })
        describe('String Length Error Handling', () => {
          test('If A Name Is A String of Less than 1 Character, Error Should Be Thrown', () => {
            expect(() => {
              new Character('')
            }).toThrow('Name Must Be At Least 1 Character Long');

            expect(() => {
              const newCharacter = new Character()
              newCharacter.name = ''
            }).toThrow('Name Must Be At Least 1 Character Long')
          })
        })
        
      })
    })

    describe('Character Age Property', () => {
      const newCharacter = new Character('Valar', 36)
      test('Character Class Has An Age Property', () => {
        expect(newCharacter).toHaveProperty('_age');
      });
      test('Character Age Is Number', () => {
        expect(typeof newCharacter._age).toBe('number')
      });
      test('Character Age Is What Was Expected', () => {
        expect(newCharacter._age).toBe(36)
      })
      describe('Age Setter and Getters', () => {
        const newCharacter = new Character('Valar');
        test('Age Getter Should Return Undefined If no age has been provided', () => {
          expect(newCharacter.age).toBe(undefined);
          expect(newCharacter._age).toBe(undefined);
        })
        test('Age Setter Should Succesfully Work and Set _age property', () => {
          newCharacter.age = 45
          expect(newCharacter.age).toBe(45)
          expect(newCharacter.age).toEqual(newCharacter._age);
        })
      })
      describe('Age Error Handling', () => {
        describe('Type Errors For Age', () => {
          test('If A Non Number Is Passed In, Throw a Type Error', () => {
          expect(() => {
            new Character('Valar', '35')
          }).toThrow('Please Provide A Number For Age')
          expect(() => {
            const newCharacter = new Character()
            newCharacter.age = '46'
          }).toThrow('Please Provide A Number For Age')
        });
        })
        describe('Number Validation', () => {
          test('If a Number Less Than 1 Is Provided, Throw An Error', () => {
            expect(() => {
              new Character('Valar', 0)
            }).toThrow('Age Must Be Greater Than 0')
            expect(() => {
              const newCharacter = new Character()
              console.log(newCharacter)
              newCharacter.age = 0
            }).toThrow('Age Must Be Greater Than 0')
          })
        })
      })
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