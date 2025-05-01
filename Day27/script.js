
// size of 12
const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
];

// it contains complements size of 31
const compliments = [
    "You have an amazing sense of humor.",
    "Your creativity is boundless.",
    "You have a great sense of style.",
    "You're incredibly thoughtful.",
    "Your positivity is contagious.",
    "You light up the room.",
    "Your kindness is a balm to all who encounter it.",
    "You're a great listener.",
    "You have impeccable manners.",
    "You are very brave.",
    "Your passion is inspiring.",
    "You have a great eye for detail.",
    "You're very resourceful.",
    "You have a heart of gold.",
    "You’re a gift to those around you.",
    "You're a fantastic friend.",
    "Your confidence is admirable.",
    "You have a delightful laugh.",
    "You’re a true team player.",
    "Your resilience is impressive.",
    "You have a beautiful soul.",
    "You have an infectious enthusiasm.",
    "Your empathy is unparalleled.",
    "You're incredibly intelligent.",
    "You bring out the best in others.",
    "You have a magnetic personality.",
    "You're a ray of sunshine.",
    "You're a wonderful problem solver.",
    "You are as kind as you are wise.",
    "Your optimism is invigorating.",
    "You make the world a better place."
];

// Based on date  size of 20
const victimCardPhrases = [
    "I always put others first, but it seems no one cares.",
    "I'm kind to everyone, yet I feel invisible.",
    "No matter how much I do for others, it's never enough.",
    "I give so much, but I rarely get anything in return.",
    "People take advantage of my kindness.",
    "It feels like I'm always there for others, but when I need help, no one's around.",
    "I go out of my way to help, but it goes unnoticed.",
    "I’m always the shoulder to cry on, but who’s there for me?",
    "I'm constantly doing good deeds, but I feel unappreciated.",
    "Why do I always give, but never receive?",
    "I treat everyone with respect, yet I get treated poorly.",
    "I sacrifice so much for others, and it goes unrecognized.",
    "It's exhausting being the nice one with no gratitude in return.",
    "I always try to make everyone happy, but my happiness is overlooked.",
    "No one seems to notice all the good I do.",
    "I go the extra mile, but it's never acknowledged.",
    "People expect me to be nice, but never return the favor.",
    "It feels like I’m always giving and never receiving.",
    "I’m there for everyone, but no one is there for me.",
    "I show love and kindness, but feel isolated and alone."
];


// size 30
const lifeRecommendations = [
    "Stay positive and focus on the good in every situation.",
    "Maintain a healthy work-life balance.",
    "Exercise regularly to keep your body and mind in shape.",
    "Eat a balanced and nutritious diet.",
    "Cultivate strong relationships with family and friends.",
    "Pursue your passions and hobbies.",
    "Keep learning and expanding your knowledge.",
    "Practice mindfulness and meditation.",
    "Set realistic goals and work towards them.",
    "Give back to your community through volunteering.",
    "Stay organized and manage your time effectively.",
    "Get enough sleep to recharge your body and mind.",
    "Stay hydrated by drinking plenty of water.",
    "Laugh often and find joy in the little things.",
    "Take breaks and don't overwork yourself.",
    "Be kind to yourself and practice self-care.",
    "Maintain a positive self-image and self-esteem.",
    "Surround yourself with supportive and positive people.",
    "Embrace change and be adaptable.",
    "Focus on personal growth and self-improvement.",
    "Spend time in nature and enjoy the outdoors.",
    "Practice gratitude and appreciate what you have.",
    "Stay curious and open-minded.",
    "Develop good financial habits and save money.",
    "Travel and explore new places and cultures.",
    "Limit screen time and disconnect from technology.",
    "Stay humble and be respectful to others.",
    "Learn to forgive and let go of grudges.",
    "Seek professional help if you need it.",
    "Believe in yourself and your abilities."
];

// size of 20
const futurePredictions = [
    "You will become a crorepati soon.",
    "A significant career advancement is in your near future.",
    "You will meet someone who will change your life for the better.",
    "A long-awaited dream will finally come true.",
    "You will receive unexpected financial gains.",
    "A new and exciting journey awaits you.",
    "You will discover a hidden talent.",
    "Your hard work will be richly rewarded.",
    "A positive change in your health is on the horizon.",
    "You will experience a period of great happiness and joy.",
    "An exciting opportunity will present itself.",
    "You will reconnect with an old friend and create new memories.",
    "Your creativity will reach new heights.",
    "You will find peace and contentment in unexpected places.",
    "A surprise event will bring you great joy.",
    "You will overcome a challenge and emerge victorious.",
    "Your personal relationships will flourish.",
    "You will make a meaningful contribution to your community.",
    "A period of abundance and prosperity is coming your way.",
    "You will gain a new perspective that will change your life."
];

const form = document.getElementById('astroForm');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const Name = document.getElementById('firstname').value;
    const SurName = document.getElementById('lastname').value;
    const day = Number(document.getElementById('day').value);
    const month = Number(document.getElementById('month').value);
    const year = Number(document.getElementById('year').value);
    // console.log(Name,SurName,day,month,year);
    const result = document.getElementById('result');
    // result.innerText = "Hello Jitendra";

    const first_message = `Your name is ${Name} ${SurName} and Zodiac ${zodiacSigns[month]}.`;
    const second_message = compliments[day-1];

     let index = Math.floor(Math.random()*20);
     const third_message = victimCardPhrases[index];


     index = (Name.length*SurName.length*year)%30;
    const fourth_message = `Life Reccomendations: ${lifeRecommendations[index-1]}.`;
    

    index = (day*month*year)%20;
    const fifth_message = `Your Future Prediction: ${futurePredictions[index]}.`;

    result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} ${fifth_message}`;
})