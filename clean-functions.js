//Don't repeat yourself

class User{
    constructor(name, online, accountType){
        this.name = name;
        this.online = online;
        this.accountType = accountType;
    }
} 

const firstUser = new User('Yassine Bounou', 'True', 'Premium');
const secondUser = new User('Hakim Ziyech', 'False', 'Premium');
const thirdUser = new User('Cheb Laarbi Ibn Ahmed', 'True', 'Free');

const sendWelcomeMessageToUser = (user) => {
    if (user.online) {
        if (user.accountType === 'normal') {
          console.log('Hello ' + user.name + '!');
        } else {
        console.log('Welcome back premium user ' + user.name + '!');
        }
    }
}

sendWelcomeMessageToUser(firstUser);
sendWelcomeMessageToUser(secondUser);
sendWelcomeMessageToUser(thirdUser);


//making a fun to count words

const printStringStats = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    const wordCount = wordArray.length;
    let letterCount = 0;
    for (let word of wordArray) {
      word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
      letterCount += word.length;
    }
    const averageWordLength = parseFloat((letterCount / wordCount).toFixed(2));
    const stringStats = {
      wordCount: wordCount,
      letterCount: letterCount,
      averageWordLength: averageWordLength
    };
    console.log(stringStats);
  }