export class QDataService {

    quokkaBgColorTab = [ 
        { 
            mainColor : "#0B4672",
            sdColor: "#FF5B5B"
        },
        { 
            mainColor : "#F9BA34",
            sdColor: "#2F3249"
        },
        { 
            mainColor : "#153B4F",
            sdColor: "#1AFED4"
        },
        { 
            mainColor : "#A4D3FF",
            sdColor: "#5C33BA"
        },
        { 
            mainColor : "#2BF1D3",
            sdColor: "#115BB1"
        },
        { 
            mainColor : "#F63376",
            sdColor: "#E5E5E5"
        },
    ];

    quokkaQuoteStart = [
        {
            text : "Hi there, I'm Quokka and I'm here to give your break a shake."
        }
    ];

    quokkaQuote = [
        {
            text : "Are you reaaaady?"
        },
        {
            text : "Getting ready for your break"
        },
        {
            text : "Creating an awesome break"
        },
        {
            text : "Chop Chop !"
        },
    ];

    quokkaTask = [
        {
            title : 'Give a hug to someone you like',
            hashtag : '#MOOVEYOUR',
            category : 'PhysicalActivity'
        },
        {
            title : 'Walk up and down a few flights of stairs',
            hashtag : '#MOOVEYOUR',
            category : 'PhysicalActivity'
        },
        {
            title : 'Organize the next football match ',
            hashtag : '#MOOVEYOUR',
            category : 'PhysicalActivity'
        },
        {
            title : 'Go outside for a 5 minutes walk ',
            hashtag : '#MOOVEYOUR',
            category : 'PhysicalActivity'
        },
        {
            title : 'Challenge a co-worker to a chair race',
            hashtag : '#MOOVEYOUR',
            category : 'PhysicalActivity'
        },
        {
            title : "Giggle like it’s your birthday",
            hashtag : '#MOOVEYOUR',
            category : 'PhysicalActivity'
        },

        {
            title : 'Did you know that all oysters are born male and have the ability to change sex according to their will?',
            hashtag : '#DIDYOUKNOW',
            category : 'LearningSthingNew'
        },
        {
            title : 'Did you know that Starfish can re-grow their arms?',
            hashtag : '#DIDYOUKNOW',
            category : 'LearningSthingNew'
        },
        {
            title : 'Did you know that Pteronophobia is the fear of being tickled by feathers?',
            hashtag : '#DIDYOUKNOW',
            category : 'LearningSthingNew'
        },
        {
            title : 'Did you know that the oldest "your mom" joke was discovered on a 3,500 year old Babylonian tablet?',
            hashtag : '#DIDYOUKNOW',
            category : 'LearningSthingNew'
        },
        {
            title : 'Did you know there are over 6,000 languages spoken in the world today',
            hashtag : '#DIDYOUKNOW',
            category : 'LearningSthingNew'
        },

        {
            title : 'Play rock-paper-scissors with someone queueing at the coffee machine',
            hashtag : '#BETACOFFE',
            category : 'PlayingAGame'
        },
        {
            title : 'Find a word and make someone guessing it',
            hashtag : '#BETACOFFE',
            category : 'PlayingAGame'
        },
        {
            title : 'Guess the numeric sequence 2 3 _  13 choosing between 6 7 10 11',
            hashtag : '#BETACOFFE',
            category : 'PlayingAGame'
        },
        {
            title : 'Spot a habit',
            hashtag : '#BETACOFFE',
            category : 'PlayingAGame'
        },
        {
            title : 'Play Tic Tac Toe with someone queueing at the coffee machine',
            hashtag : '#BETACOFFE',
            category : 'PlayingAGame'
        },

        {
            title : 'Go outside and feel the fresh air',
            hashtag : '#REFRESH',
            category : 'Meditation'
        },
        {
            title : 'Do nothing for as long as possible',
            hashtag : '#REFRESH',
            category : 'Meditation'
        },
        {
            title : 'Listen to Om Mani Padme Hum mantra on youtube for 5 minutes',
            hashtag : '#REFRESH',
            category : 'Meditation'
        },
        {
            title : 'Drink a glass of water',
            hashtag : '#REFRESH',
            category : 'Meditation'
        },
        {
            title : 'Unlace your shoes',
            hashtag : '#REFRESH',
            category : 'Meditation'
        },
        {
            title : "Change your smartphone's background",
            hashtag : '#REFRESH',
            category : 'Meditation'
        },
        {
            title : 'Take three big breaths',
            hashtag : '#REFRESH',
            category : 'Meditation'
        },
        {
            title : 'Stretch your arms and legs',
            hashtag : '#REFRESH',
            category : 'Meditation'
        },
        {
            title : 'Stretch your back and shoulders',
            hashtag : '#REFRESH',
            category : 'Meditation'
        },
        {
            title : 'Stretch your hands and foot',
            hashtag : '#REFRESH',
            category : 'Meditation'
        },
        {
            title : 'What about tea instead of coffee?',
            hashtag : '#REFRESH',
            category : 'Meditation'
        },

        {
            title : 'Think with the next person in queue about solutions to consume less packaging',
            hashtag : '#TALKTO',
            category : 'HelpAndInteract'
        },
        {
            title : 'Share the last fun fact you learn to someone',
            hashtag : '#TALKTO',
            category : 'HelpAndInteract'
        },
        {
            title : 'Wish someone a good day',
            hashtag : '#TALKTO',
            category : 'HelpAndInteract'
        },
        {
            title : 'Ask the person next to you about his/her worst nightmare',
            hashtag : '#TALKTO',
            category : 'HelpAndInteract'
        },
        {
            title : 'Call one of your family members to say hi',
            hashtag : '#TALKTO',
            category : 'HelpAndInteract'
        },
        {
            title : 'Ask a co-worker about the latest concert they have been to',
            hashtag : '#TALKTO',
            category : 'HelpAndInteract'
        },
        {
            title : 'Propose a colleague to have lunch together next week',
            hashtag : '#TALKTO',
            category : 'HelpAndInteract'
        },

        {
            title : 'What if you take a different path going home today ?',
            hashtag : '#WHATIF?',
            category : 'SetNewGoal'
        },
        {
            title : 'Draw a tree without removing your finger',
            hashtag : '#WHATIF?',
            category : 'SetNewGoal'
        },
        {
            title : 'Can you remember your last dream?',
            hashtag : '#WHATIF?',
            category : 'SetNewGoal'
        },
        {
            title : 'Maybe the person next to you have the answer to your question',
            hashtag : '#WHATIF?',
            category : 'SetNewGoal'
        },
        {
            title : 'What could you do differently next time?',
            hashtag : '#WHATIF?',
            category : 'SetNewGoal'
        },
    ];
}