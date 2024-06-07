let fortuneMessages = [
    "Follow what calls you.",
    "You're intoxicating when you do what you love.",
    "Be passionate and totally worth the chaos.",
    "You will know it when you see it. It will know you when it sees you.",
    "Do what you love. The rest will fall into place.",
    "Follow what you love and see what turns up.",
    "The middle of the process is no place to determine the end of it.",
    "You should def go for it.",
    "Enter unknown territory.",
    "Everything that is was first a dream.",
    "The fortune you seek is in another cookie.",
    "A closed mouth gathers no feet.",
    "A conclusion is simply the place where you got tired of thinking.",
    "A cynic is only a frustrated optimist.",
    "A foolish man listens to his heart. A wise man listens to cookies.",
    "You will die alone and poorly dressed.",
    "A fanatic is one who can't change his mind, and won't change the subject.",
    "If you look back, you'll soon be going that way.",
    "You will live long enough to open many fortune cookies.",
    "An alien of some sort will be appearing to you shortly.",
    "Do not mistake temptation for opportunity.",
    "Flattery will go far tonight.",
    "who laughs at himself never runs out of things to laugh at.",
    "He who laughs last is laughing at you.",
    "He who throws dirt is losing ground.",
    "Some men dream of fortunes, others dream of cookies.",
    "The greatest danger could be your stupidity.",
    "We don't know the future, but here's a cookie.",
    "The world may be your oyster, but it doesn't mean you'll get its pearl.",
    "You will be hungry again in one hour.",
    "The road to riches is paved with homework.",
    "You can always find happiness at work on Friday.",
    "Actions speak louder than fortune cookies.",
    "Because of your melodic nature, the moonlight never misses an appointment.",
    "Don't behave with cold manners.",
    "Don't forget you are always on our minds.",
    "Fortune not found? Abort, Retry, Ignore.",
    "Help! I am being held prisoner in a fortune cookie factory.",
    "It's about time I got out of that cookie.",
    "Never forget a friend. Especially if he owes you.",
    "Never wear your best pants when you go to fight for freedom.",
    "Only listen to the fortune cookie; disregard all other fortune telling units.",
    "It is a good day to have a good day.",
    "All fortunes are wrong except this one.",
    "Someone will invite you to a Karaoke party.",
    "That wasn't chicken."
]

let randomNumber = Math.floor(Math.random() * fortuneMessages.length);

const revealFortune = () => {
    let cookie = document.getElementById("cookie");
    let fortune = document.getElementById("fortune");
    cookie.setAttribute("src", "./open_fortune_cookie.png");
    fortune.innerHTML = fortuneMessages[randomNumber] + "<br /><br />Click to try again!";
    cookie.setAttribute("onclick", "window.location.reload()");
}
