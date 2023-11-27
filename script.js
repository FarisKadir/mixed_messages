

//store the verbs and the applicable messages
const verbMessages = [
    {
        verb: 'are',
        person: ['You'],
        messages: ['having a great day. Keep positive thoughts.', 'going to be excited this upcoming week. Try to contain your excitement', 'having good luck! Try your hand at the lotto!']
    },
    {
        verb:   'will',
        person: ['You', 'Someone close to you', 'An old acquaintance'],
        messages: ['win the lotto this month!', 'have good luck this week!', 'start a new career.']
    },
    {
        verb:   'should',
        person: ['You'],  
        messages: ['try something new.', 'try to stay positive even if things are not great.', 'learn something new.']
    }
];

//function that randomly selects an option from an array

const randomizer = (arr) =>  {
    let randomChoice = arr[Math.floor(Math.random() * arr.length)];
    return randomChoice;
};


//function that randomly selects an appropriate verb and message
const formMessage = (arr) =>  {
    let person = randomizer(arr.person);
    let message =  randomizer(arr.messages);
    return `${person} ${arr.verb} ${message}`
}

console.log(formMessage(randomizer(verbMessages)));


