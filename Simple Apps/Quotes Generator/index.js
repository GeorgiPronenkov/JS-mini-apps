const quotes = [
{
name:' Ralph Waldo Emerson',
quote: 'What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.'
},
{
name:'Buddha',
quote: 'Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.'
},
{
name:'Aristotel',
quote: 'It is during our darkest moments that we must focus to see the light.'
},
{
name:'Mahatma Gandi',
quote: 'In a gentle way, you can shake the world.'
},
{
name:'Theodore Roosevelt',
quote: 'Believe you can and you are halfway there.'
},
{
name:' Francis of Assisi',
quote: 'A single sunbeam is enough to drive away many shadows.'
},
{
name:'Benjamin Franklin',
quote: 'One today is worth two tomorrows.'
},
];

//targeting ids to access them with eventListener
const quote_Btn = document.querySelector('#quote_Btn');
const quote_author = document.querySelector('#quote_author');
const quote = document.querySelector('#quote');

quote_Btn.addEventListener('click', displayQuote);

function displayQuote() {

    //create random number
    let number = Math.floor(Math.random()*quotes.length);
    quote_author.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;    
}
