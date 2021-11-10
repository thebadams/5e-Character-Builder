const Character = require('./Character');

describe('Character Class', () => {
  const newCharacter = new Character('Valar the Oathsmith', 36, '200 lbs', 'Description');
  test('Character Class Acts Like a Class', () => {
    
    expect(newCharacter).toBeInstanceOf(Character);
  });
  describe('Character Class Properties', () => {
    describe('Character Name Property', () => {
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
      test('Character Class Has A Weight Property', () => {
        expect(newCharacter).toHaveProperty('_weight')
      });
      test('Character Weight Is A String', () => {
        expect(typeof newCharacter._weight).toBe('string')
      })
      test('Character Weight Is What It Is Meant To Be', () => {
        expect(newCharacter._weight).toBe('200 lbs');
      })
      describe('Weight Getters and Setters', () => {
        const newCharacter = new Character()
        test('Weight getter should return undefined if no weight has been provided', () =>{
          expect(newCharacter.age).toBeUndefined();
          expect(newCharacter._age).toBeUndefined();
        })
        test('Weight setter should successfully set weight property', () => {
          newCharacter.weight = '201 lbs';
          expect(newCharacter.weight).toBe('201 lbs');
          expect(newCharacter.weight).toEqual(newCharacter._weight);
        })
      })
      describe('Weight Property Error Handling', () => {
        describe('Type Errors', () => {
          test('If A Non String Is Passed In, Throw A Type Error', () => {
            expect(() => {
              new Character('Valar', 35, 300)
            }).toThrow('Please Provide A String For Weight');
            expect(() => {
              const newCharacter = new Character();
              newCharacter.weight = 400;
            }).toThrow('Please Provide A String For Weight')
          })
        })
        describe('String Validation', () => {
          test.todo('If an empty String is passed in, throw an error')
        })
      })
    })

    describe('Character Description Property', () => {
      test('Character Class Has a Description Property', () => {
        expect(newCharacter).toHaveProperty('_description')
      });
      test('Character Description Is a String', () => {
        expect(typeof newCharacter._description).toBe('string')
      });
      test('Character Description Is Equal To "Description"', () => {
        expect(newCharacter._description).toBe('Description')
      })
    })
    
    describe('Character Race Property', () => {
      test('Character Class Has A Race Property', () => {
        expect(newCharacter).toHaveProperty('_race');
      });
      test.todo('Character Race Is An Instance of the Race Class')
    })
    
    describe('Character Background Property', () => {
      test('Character Class Has a Background Property', () => {
        expect(newCharacter).toHaveProperty('_background');
      })
      test.todo('Character Background Is An Instance Of the Background Class')
    })

    describe('Character Ability Score Property', () => {
      test('Character Class Has An Abilities Property', () => {
        expect(newCharacter).toHaveProperty('_abilities')
      })
      test.todo('Character Ability Score Is An Instnace of the Ability Score Class')
    })

    describe('Character Bond Property', () => {
      test('Character Class Has A Bond Property', () => {
        expect(newCharacter).toHaveProperty('_bond');
      });
      test.todo('Character Bond Is A String');
    })

    describe('Character Personality Trait Property', () => {
      test('Character Class Has a personality trait property', () => {
        expect(newCharacter).toHaveProperty('_personalityTrait')
      });
      test.todo('Character Personality Trait Is A String')
    })

    describe('Character Flaw Property', () => {
      test('Character Class Has A Flaw Property', () => {
        expect(newCharacter).toHaveProperty('_flaw');
      });
      test.todo('Character Flaw Is a String');
    })

    describe('Character Ideal Property', () => {
      test('Character Class Has An Ideal Property', () => {
        expect(newCharacter).toHaveProperty('_ideal');
      });
      test.todo('Character Ideal Is a String');
    })

    describe('Character Skills Property', () => {
      test('Character Class Has A Skills Property', () => {
        expect(newCharacter).toHaveProperty('_skills');
      })
      test.todo('Character Skills Is An Instance of the Skills Class')
    })

    describe('Character Inventory Property', () => {
      test('Character Class Has An Inventory Property', () => {
        expect(newCharacter).toHaveProperty('_inventory');
      });
      test.todo('Character Inventory Is An Array');
      test.todo('Each Element of the Inventory Array Is An Instance of the Item Class');
    })

    describe('Character Class Property', () => {
      test('Character Class Has a Class Property', () => {
        expect(newCharacter).toHaveProperty('_class')
      });
      test.todo('Character Class Property Is An Array');
      test.todo('Each Element of the Array Is An Instance of the Class class');
    })
  })
  
})