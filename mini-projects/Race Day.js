let raceNumber = Math.floor(Math.random() * 1000);   //This will assign players with any random number.
let registeredEarly = false;                         //To check if the player has registered early or not.
const adultAge = 18;                                 //This age is for reference ie; it is used to seperate the adults from the kids.
let age = 18;                                        //From the variable type we can tell that this is where we check the age for kids and adults.

                                                     //And now lets create a flow statement that makes the magic happen;
if (age > adultAge && registeredEarly){
      console.log(`Your race starts at 9:30am and your race number is ${raceNumber}`);
    } else if (age > adultAge && !registeredEarly )  {console.log(`Your race starts at 11:00am and your race number is ${raceNumber}`);
    } else if (age < adultAge ){
      console.log('Your race starts at 12:30am');
    } else console.log('See the registration desk.')


/*TWITTER HANDLE: -------AS ALLWAYS, FEEL FREE TO DM ME ON TWITTER @uzairkhan123221 REGARDING ANY ISSUES :) ————*/
