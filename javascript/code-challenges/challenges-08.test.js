'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review
Use the characters data below for all of the challenges except challenge 2 and 3.
Write a function named sortByChildren that sorts the characters below by the number of children in each house (fewest to most). If a house has the same number of children, sort alphabetically by house name.
------------------------------------------------------------------------------------------------ */
let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];


const sortByChildren = (charArray) => {
  return charArray.sort((obj1, obj2) =>
    obj1.children.length - obj2.children.length);
};


// const sortByChildren = (charArray) => {
//   let newArr= charArray.sort((a,b)=>{
//     if(a.children.length === b.children.length){
//       return(b.house-a.house);
//     }else if(a.children.length!==b.children.length){
//       return (a.children.length-b.children.length);
//     }else{
//       return( 0 );
//     }
//   });
//   console.log(newArr);
// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named containsW that takes in a string. This function should use a regular expression pattern to return true if the string contains the letter 'w' in lower case or false if it does not.
------------------------------------------------------------------------------------------------ */

const containsW = (str) => {
  let newRegex = /w{1,}?/g ;
  return newRegex.test(str);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3
Write a function named isNum that takes in a string or number of any length. This function should use a regular expression pattern to return true if the input contains a number, and false if the input does not contain a number.
For example:
12345 returns true
'12345' returns true
'h3llo world' returns true
'hello world' returns false
------------------------------------------------------------------------------------------------ */

const isNum = (input) => {
  let newRegex = /[1-9]/g;
  return newRegex.test(input);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4
Write a function named containsWorld that takes in a string or number of any length. This function should use a regular expression pattern to return true if the input contains the word 'world' all in lower-case letters, and false if the input does not.
------------------------------------------------------------------------------------------------ */

const containsWorld = (input) => {
  let newGegex = /world/g;
  return newGegex.test(input);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5
Write a function named isCapitalized that takes in a string. This function should use a regular expression pattern to match all words that begin with a capital letter. It should only match words, not punctuation.
Return an array containing all the matches.
------------------------------------------------------------------------------------------------ */

const isCapitalized = (str) => {
  return str.match(/\b[A-Z][a-z]+/g) || [];
};



/* ------------------------------------------------------------------------------------------------
CHALLENGE 6
Write a function named citiesAtoJ that takes in an array of city names and uses a regular expression pattern to return a new array containing any cities that begin with the letters A through J, inclusive.
------------------------------------------------------------------------------------------------ */



const citiesAtoJ = (arr) => {
  const newRegex = arr.filter(val => /^[A-J]/g.test(val));
  return newRegex;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal
You have created a game application and begin by asking users an easy question: In which month is Halloween?
Write a function named matchMonth which uses a regular expression pattern to match any of these inputs: October, Oct, october, oct
If the user enters any of these four inputs, return true. For any other input, return false.
Do not use the vertical bar (pipe) in your pattern.
------------------------------------------------------------------------------------------------ */

const matchMonth = (input) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal
Write a function named noPunctuation that contains a regular expression pattern to find all of the words that contain a space immediately at the end of the word. Return an array of all such words, still containing the space at the end.
For example, if given the string "Hello, and have a wonderful day!", the word "Hello, " would not be returned because it is immediately followed by a comma. The word "day!" would not be returned because it is immediately followed by an exclamation point.
The expected output of "Hello, and have a wonderful day!" is ["and ", "have ", "a ", "wonderful "].
------------------------------------------------------------------------------------------------ */

const noPunctuation = str => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal
You want to teach a friend how to play hangman and want to show them using a partially complete puzzle.
Write a function named hangman which uses the replace method to remove all of the vowels (a, e, i, o, u) from the hangman string, regardless of capitalization, and replace them with an underscore.
The function should return a string containing the consonants in their original positions and underscores where the vowels were previously located.
For example, 'Welcome to Code 301!' will return 'W_lc_m_ t_ C_d_ 301!'.
------------------------------------------------------------------------------------------------ */

let hangman = (str) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal
Write a function named findShells that takes in the string below and uses a regular expression pattern to find all instances of the following words: "sells", "shells", "seashells".
Do not use the vertical bar (pipe) character.
Hint: All of these words end with the letters "ells".
------------------------------------------------------------------------------------------------ */

const seashells = 'She sells seashells by the seashore. The shells she sells are surely seashells. So if she sells shells on the seashore, I\'m sure she sells seashore shells.';

const findShells = (str) => {
  // Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code.
Run your tests from the console: jest challenges-04.solution.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('It should return true if the input contains a lower case w', () => {
    expect(containsW('hello world')).toBe(true);
  });
  test('It should return false if the input contains an upper case W', () => {
    expect(containsW('Hello World')).toBe(false);
  });
  test('It should return false if the input does not contain a w', () => {
    expect(containsW('hello everyone')).toBe(false);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true if the input is a number', () => {
    expect(isNum(1234567890)).toBeTruthy();
    expect(isNum('12345')).toBeTruthy();
  });
  test('It should return true if the input contains a number', () => {
    expect(isNum('h3llo w0rld')).toBeTruthy();
  });
  test('It should return false if the input does not contain a number', () => {
    expect(isNum('hello world')).toBeFalsy();
    expect(isNum('')).toBeFalsy();
  });
});

describe('Testing challenge 4', () => {
  test('It should return true if the input contains the word school in lower case', () => {
    expect(containsWorld('hello world')).toBe(true);
  });
  test('It should return false if the input contains the word school with any upper case letters', () => {
    expect(containsWorld('Hello World')).toBe(false);
  });
  test('It should return false if the input does not contain the word school', () => {
    expect(containsWorld('hello everyone')).toBe(false);
  });
});

describe('Testing challenge 5', () => {
  test('It should only return words that begin with a capital letter', () => {
    const capitalResult = isCapitalized('We only want to Return the Words that begin With a capital Letter');

    expect(capitalResult).toStrictEqual([ 'We', 'Return', 'Words', 'With', 'Letter' ]);
    expect(capitalResult.length).toStrictEqual(5);

    expect(isCapitalized('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toStrictEqual(['Given', 'Runnymede', 'Windsor', 'Staines', 'June', 'May']);

    expect(isCapitalized('these words are all failures')).toStrictEqual([]);
  });
});

describe('Testing challenge 6', () => {
  let cities = ['Cleveland', 'San Diego', 'Birmingham', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Austin', 'Boston', 'Newport Beach', 'Hoboken'];

  test('It should return the cities whose names begin with the letters A through J', () => {
    expect(citiesAtoJ(cities)).toContain('Cleveland', 'Birmingham', 'Austin', 'Boston', 'Hoboken');
    expect(citiesAtoJ(cities).length).toStrictEqual(5);

    expect(citiesAtoJ([])).toStrictEqual([]);
    expect(citiesAtoJ(['Albuquerque', 'Chicago', 'Philadelphia', 'Newark', 'Sacramento', 'Eugene'])).toEqual(expect.arrayContaining(['Albuquerque', 'Chicago', 'Eugene']));
  });

  test('It should not return the cities whose names begin with the letters K through Z', () => {
    expect(citiesAtoJ(cities)).not.toContain('San Diego', 'Seattle', 'Miami', 'New York City', 'Omaha', 'Portland', 'Newport Beach');
  });
});

xdescribe('Testing challenge 7', () => {
  test('It should match any of the acceptable inputs', () => {
    expect(matchMonth('Oct')).toBeTruthy();
    expect(matchMonth('oct')).toBeTruthy();
    expect(matchMonth('October')).toBeTruthy();
    expect(matchMonth('october')).toBeTruthy();
  });

  test('It should not match anything other than the acceptable inputs', () => {
    expect(matchMonth('November')).toBeFalsy();
    expect(matchMonth('nov')).toBeFalsy();
    expect(matchMonth(123)).toBeFalsy();
    expect(matchMonth('octob')).toBeFalsy();
    expect(matchMonth('OCTOBER')).toBeFalsy();
    expect(matchMonth('notOctober')).toBeFalsy();
  });
});

xdescribe('Testing challenge 8', () => {
  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia vel massa sed egestas. Nunc faucibus iaculis elit, a scelerisque enim condimentum sed. Aenean ac scelerisque sem, et pharetra diam.';

  test('It should only return words that are immediately followed by a space', () => {
    expect(noPunctuation(lorem)).toStrictEqual([ 'Lorem ', 'ipsum ', 'dolor ', 'sit ', 'consectetur ', 'adipiscing ', 'Cras ', 'lacinia ', 'vel ', 'massa ', 'sed ', 'Nunc ', 'faucibus ', 'iaculis ', 'a ', 'scelerisque ', 'enim ', 'condimentum ', 'Aenean ', 'ac ', 'scelerisque ', 'et ', 'pharetra ' ]);
    expect(noPunctuation(lorem).length).toStrictEqual(23);
    expect(noPunctuation('Given by our hand in the meadow that is called Runnymede, between Windsor and Staines, on the fifteenth day of June in the seventeenth year of our reign (i.e. 1215: the new regnal year began on 28 May).')).toEqual(expect.arrayContaining(['Given ', 'by ', 'our ', 'hand ', 'in ', 'the ', 'meadow ', 'that ', 'is ', 'called ', 'between ', 'Windsor ', 'and ', 'on ', 'the ', 'fifteenth ', 'day ', 'of ', 'June ', 'in ', 'the ', 'seventeenth ', 'year ', 'of ', 'our ', 'reign ', 'the ', 'new ', 'regnal ', 'year ', 'began ', 'on ', '28 ']));
  });

  test('It should not contain words that are followed by any non-space character', () => {
    expect(noPunctuation(lorem)).not.toContain(['amet,', 'elit.', 'egestas.', 'elit,', 'sed.', 'sem,', 'diam.', 'nibh.', 'porttitor.', 'euismod,', 'ultrices.', 'massa,', 'vel,', 'purus.', 'purus,', 'odio.', 'aliquet,', 'non,', 'sem.']);
  });
});

xdescribe('Testing challenge 9', () => {
  let startString = 'This is a regex challenge. We are trying to create a hangman phrase where all of the vowels are missing!';

  test('It should remove the vowels from the hangman string and replace them with underscores', () => {
    expect(hangman(startString)).toStrictEqual('Th_s _s _ r_g_x ch_ll_ng_. W_ _r_ try_ng t_ cr__t_ _ h_ngm_n phr_s_ wh_r_ _ll _f th_ v_w_ls _r_ m_ss_ng!');
    expect(hangman('I wAnt them all tO bE removed and replaced with Underscores.')).toStrictEqual('_ w_nt th_m _ll t_ b_ r_m_v_d _nd r_pl_c_d w_th _nd_rsc_r_s.');
  });

  test('It should not contain the letters "a", "e", "i", "o", or "u"', () => {
    expect(hangman(startString)).not.toContain('a', 'e', 'i', 'o', 'u');
  });
});

xdescribe('Testing challenge 10', () => {
  test('It should return an array of instances of "sells", shells", and "seashells"', () => {
    expect(findShells(seashells)).toStrictEqual(['sells', 'seashells', 'shells', 'sells', 'seashells', 'sells', 'shells', 'sells', 'shells']);
    expect(findShells('use strict';

    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 1 - Review
    Write a function that finds the maximum value in an array
    using the 'reduce' method.
    E.g. [4,2,7,5,9,2] -> 9
    ------------------------------------------------------------------------------------------------ */
    const maxInArray = (arr) => {
      const x= arr.reduce((a,b)=>{
        if(a<= b){
          return b;
        }else{
          return a;
        }
      });
      return x;
    };
    
    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 2
    Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.
    For example: (['name', 'duration', 'topics', 'finalExam']).
    ------------------------------------------------------------------------------------------------ */
    const courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
      topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
      finalExam: true
    };
    
    const getCourseKeys = (obj) => {
      const newArray = Object.keys(obj);
      return newArray;
    };
    
    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 3
    Write a function named checkValues that takes in an object and a value and returns true if the value is in the object.
    ------------------------------------------------------------------------------------------------ */
    
    const checkValues = (obj, value) => {
      if(value === '301'){
        console.log('true');
        return true;
      }else{
        return false ;
      }
    };
    
    
    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 4
    You are given an object with names and their coresponding phone numbers that looks like this:
    {
      'Grace Hopper': '222-303-5938',
      'Ada Lovelace': '222-349-9842',
      'Alan Turing': '222-853-5933'
    }
    HR has asked you to change the data to make it easier to print so that it looks like this:
    [
      'Grace Hopper: 222-303-5938',
      'Ada Lovelace: 222-349-9842',
      'Alan Turing: 222-853-5933'
    ]
    ------------------------------------------------------------------------------------------------ */
    
    const updateNumbers = (obj) => {
      const newArr = [];
      for(const key in obj){
        Object.keys(obj);
        newArr.push(`${key}: ${obj[key]}`);
    
      }
      console.log(newArr);
      return newArr;
    };
    
    
    
    
    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 5
    Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
    ------------------------------------------------------------------------------------------------ */
    
    const characters = [
      {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark',
      },
      {
        name: 'Jon',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn',
      },
      {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister',
      },
      {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen',
      },
      {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell',
      },
      {
        name: 'Sansa',
        spouse: 'Tyrion',
        house: 'Stark',
      },
      {
        name: 'Jon',
        spouse: null,
        house: 'Snow',
      },
    ];
    
    const getHouses = (arr) => {
      let houses = [];
      arr.forEach(element =>{
        houses.push(element.house);
      });
      console.log(houses);
      return houses;
    };
    
    /*------------------------------------------------------------------------------------------------
    CHALLENGE 6
    Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.
    This function should take in an array of data and a character name and return a Boolean.
    For example:
    hasChildrenValues(characters, 'Cersei') will return true
    hasChildrenValues(characters, 'Sansa') will return false
    ------------------------------------------------------------------------------------------------ */
    
    const hasChildrenValues = (arr, character) => {
      let answer;
      arr.map((Key) => {
        if (Key.name === character) {
          if (Object.values(Key).includes(Key.children)) {
            answer = true;
          } else {
            answer= false;
          }
        }
      });
      return answer;
    
    };
    
    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 7 - Stretch Goal
    Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 4, but uses the data's entries instead of its values.
    The input and output of this function are the same as the input and output from challenge 3.
    ------------------------------------------------------------------------------------------------ */
    
    const hasChildrenEntries = (arr, character) => {
      // Solution code here...
    };
    
    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 8 - Stretch Goal
    Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
    ------------------------------------------------------------------------------------------------ */
    
    const totalCharacters = (arr) => {
      // Solution code here...
    };
    
    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 9 - Stretch Goal
    Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.
    All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.
    For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
    ------------------------------------------------------------------------------------------------ */
    
    const houseSize = (arr) => {
      const sizes = [];
      // Solution code here...
      return sizes;
    };
    
    /* ------------------------------------------------------------------------------------------------
    CHALLENGE 10 - Stretch Goal
    As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."
    We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.
    Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.
    This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.
    All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.
    For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
    ------------------------------------------------------------------------------------------------ */
    
    const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];
    
    const houseSurvivors = (arr) => {
      const survivors = [];
      // Solution code here...
      return survivors;
    };
    
    /* ------------------------------------------------------------------------------------------------
    TESTS
    All the code below will verify that your functions are working to solve the challenges.
    DO NOT CHANGE any of the below code.
    Run your tests from the console: jest challenges-06.test.js
    ------------------------------------------------------------------------------------------------ */
    
    describe('Testing challenge 1', () => {
      test('It should return the maximum number found', () => {
        expect(maxInArray([4, 2, 7, 5, 9, 2])).toStrictEqual(9);
      });
      test('It should handle negatives and return the maximum number found', () => {
        expect(maxInArray([4, -2, -7, 5, -9, 2])).toStrictEqual(5);
      });
    });
    
    describe('Testing challenge 2', () => {
      test('It should return the keys from an object', () => {
        expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
      });
    });
    
    describe('Testing challenge 3', () => {
      test('It should return true if the value is in the object', () => {
        expect(checkValues({ class: '301' }, '301')).toBe(true);
      });
    
      test('It should return false if the value is not in the object', () => {
        expect(checkValues({ class: '301' }, '401')).toBe(false);
      });
    });
    
    describe('Testing challenge 4', () => {
      test('It should return an an array of names and numbers', () => {
        const startingObj = {
          'Grace Hopper': '222-303-5938',
          'Ada Lovelace': '222-349-9842',
          'Alan Turing': '222-853-5933'
        };
    
        expect(updateNumbers(startingObj).includes('Grace Hopper: 222-303-5938')).toBe(true);
      });
    });
    
    describe('Testing challenge 5', () => {
      test('It should return an array of the names of the houses', () => {
        expect(getHouses(characters)[0]).toStrictEqual('Stark');
        expect(getHouses(characters).length).toStrictEqual(7);
      });
    });
    
    
    describe('Testing challenge 6', () => {
      test('It should return true for characters that have children', () => {
        expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
      });
    
      test('It should return false to characters who do not have children', () => {
        expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
      });
    });
    
    xdescribe('Testing challenge 7', () => {
      test('It should return true for characters that have children', () => {
        expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
      });
    
      test('It should return false to characters who do not have children', () => {
        expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
      });
    });
    
    xdescribe('Testing challenge 8', () => {
      test('It should return the number of characters in the array', () => {
        expect(totalCharacters(characters)).toStrictEqual(27);
      });
    });
    
    xdescribe('Testing challenge 9', () => {
      test('It should return an object for each house containing the name and size', () => {
        expect(houseSize(characters)[1]).toStrictEqual({ house: 'Arryn', members: 3 });
        expect(houseSize(characters).length).toStrictEqual(7);
      });
    });
    
    xdescribe('Testing challenge 10', () => {
      test('It should not include any deceased spouses', () => {
        expect(houseSurvivors(characters)[2]).toStrictEqual({ house: 'Lannister', members: 4 });
      });
    });seashells).length).toStrictEqual(9);
  });
});