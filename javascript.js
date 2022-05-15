var quotes = [
    'Always take your meds with a glass of water.',
    'Always take your meds with a glass of beer.',
    'Always take your meds with a glass of vodka.',
    'I always wanted to grow on a tomato. Wait what',
    'I always wanted to grow tomatoes.',
    'You should never fuck with a Milkovich.',
    'Aren\'t Milkoviches just so weird?',
    'If a Milkovich breaks your nose I will help you, but I won\'t snitch.',
    'Play what cool?',
    'If you plan on swimming in the pool do know how to swim first.',
    'You can steal, just don\'t make it obvious.',
    'Wow can you believe Mickey Milkovich is my husband?',
    'Sue knows best.',
    'Yeah, you already told me light blue looks good on me. Do you have an actual emergency though?',
    'I feel like I\'m going to steal one of these ambulances one day...',
    'No breakfast for the husbands who don\'t have jobs.',
    'No pancakes for the husbands who don\'t have jobs.',
    'No d!@k for the husbands who don\'t have jobs.',
    'If you call an ambulance, I could show up. No pics! I\'m on the job ladies.',
    'The papa tomato said to the baby tomato, "Son, I love you from my head tomatoes."',
    'When the teacher asked the student where tomatoes came from, she replied, "From the tomato source!"',
    'The judge tomato said that she would put all these thug tomatoes in jail if they do not tomatone for their crimes.',
    'When the tomato entered the room without knocking, he left red-faced because he had seen the salad dressing.',
    'Why do ambulance drivers always have a partner with them?',
    'They\'re pair-a-medics.',
    'Note to self--you can use Stayin\' Alive to perform CPR correctly. Just don\'t sing it out loud.'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}