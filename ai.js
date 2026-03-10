window.onload = () => {
    typeWriter("Greetings! I am the Cosmic Brain. Ask me anything to receive a fragment of universal truth! ✨", 'bot-msg');
};

function queryAI() {
    const promptInput = document.getElementById('aiPrompt');
    const btn = document.getElementById('askBtn');

    if (!promptInput || !promptInput.value.trim()) return;

    const userText = promptInput.value;
    addMessageToChat(userText, 'user-msg'); 

    const responses = [
        "The stars say: Absolutely! ✨",
        "My internal sensors say: Not likely. 🤖",
        "Ask me again after I've had some digital coffee. ☕",
        "That's a fascinating thought! 🧠",
        "Error 404: Answer not found in this dimension. 🌌",
        "Octopuses have three hearts and blue blood. 🐙",
        "A group of flamingos is called a 'flamboyance.' 🦩",
        "Shrimp have their hearts located in their heads. 🦐",
        "Sloths can hold their breath longer than dolphins can—up to 40 minutes! 🦥",
        "A blue whale's tongue is heavier than an entire elephant. 🐋",
        "Honey never spoils; archaeologists found edible honey in 3,000-year-old tombs. 🍯",
        "Koalas have fingerprints so similar to humans they can taint crime scenes. 🐨",
        "Sharks existed on Earth before trees did! 🦈",
        "A day on Venus is longer than a year on Venus. 🪐",
        "The footprints on the moon will stay there for 100 million years. 🌑",
        "Saturn is so light that it could actually float in water. 🪐",
        "One million Earths could fit inside the sun. ☀️",
        "On Mars, sunsets appear blue. 🌅",
        "Diamonds can be made from peanut butter under extreme pressure. 💎",
        "Lightning strikes about 6,000 times every single minute on Earth. ⚡",
        "The Eiffel Tower can grow 6 inches taller in the summer due to heat expansion. 🗼",
        "The real name for a hashtag (#) is an 'octothorpe.' #️⃣",
        "Apples float in water because they are 25% air. 🍎",
        "Strawberries are the only fruit that carries its seeds on the outside. 🍓",
        "Ketchup was once sold as medicine in the 1830s. 🍅",
        "McDonald's once created bubblegum-flavored broccoli to help kids eat veggies. 🥦",
        "The world's longest French fry was 34 inches long. 🍟",
        "Your brain uses about 20% of your body's total energy. 🧠",
        "The human nose can remember 50,000 different scents. 👃",
        "Human teeth are as strong as shark teeth, just not as sharp. 🦷",
        "Every person has a unique tongue print, just like a fingerprint. 👅",
        "One-quarter of all the bones in your body are in your feet. 👣",
        "A sneeze can travel at a speed of over 100 miles per hour! 💨",
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    promptInput.value = "";
    btn.innerText = "Thinking...";

    setTimeout(() => {
        typeWriter(randomResponse, 'bot-msg');
        btn.innerText = "Consult Brain ✨";
    }, 600); 
}


function addMessageToChat(text, className) {
    const responseArea = document.getElementById('aiResponseArea');
    const messageDiv = document.createElement('div');
    messageDiv.className = `msg ${className}`;
    messageDiv.innerText = text;
    responseArea.appendChild(messageDiv);
    responseArea.scrollTop = responseArea.scrollHeight;
}


function typeWriter(text, className) {
    const responseArea = document.getElementById('aiResponseArea');
    const messageDiv = document.createElement('div');
    messageDiv.className = `msg ${className}`;
    responseArea.appendChild(messageDiv);
    
    let i = 0;
    const speed = 30; 

    function type() {
        if (i < text.length) {
            messageDiv.innerHTML += text.charAt(i);
            i++;
            responseArea.scrollTop = responseArea.scrollHeight;
            setTimeout(type, speed);
        }
    }
    type();
}

