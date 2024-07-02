// script.js
document.addEventListener('DOMContentLoaded', function() {
  const positiveWords = {
    A: ['Amazing', 'Awesome', 'Admirable', 'Affectionate', 'Ambitious'],
    B: ['Brilliant', 'Bright', 'Benevolent', 'Blissful', 'Bold'],
    C: ['Courageous', 'Cheerful', 'Compassionate', 'Creative', 'Confident'],
    D: ['Delightful', 'Dazzling', 'Dependable', 'Determined', 'Dynamic'],
    E: ['Energetic', 'Enthusiastic', 'Excellent', 'Empathetic', 'Encouraging'],
    F: ['Fabulous', 'Fantastic', 'Faithful', 'Friendly', 'Fearless'],
    G: ['Generous', 'Gracious', 'Great', 'Gleeful', 'Gentle'],
    H: ['Honest', 'Helpful', 'Humble', 'Happy', 'Hopeful'],
    I: ['Incredible', 'Inspirational', 'Innovative', 'Impressive', 'Insightful'],
    J: ['Joyful', 'Jubilant', 'Just', 'Jovial', 'Judicious'],
    K: ['Kind', 'Keen', 'Knowledgeable', 'Kudos', 'Keen-eyed'],
    L: ['Loving', 'Loyal', 'Luminous', 'Laudable', 'Lively'],
    M: ['Magnificent', 'Motivated', 'Mindful', 'Marvelous', 'Merry'],
    N: ['Noble', 'Nice', 'Nurturing', 'Notable', 'Neat'],
    O: ['Outstanding', 'Optimistic', 'Open-minded', 'Organized', 'Observant'],
    P: ['Positive', 'Passionate', 'Patient', 'Persistent', 'Pleasant'],
    Q: ['Quick-witted', 'Quality', 'Quaint', 'Quiet', 'Quintessential'],
    R: ['Respectful', 'Radiant', 'Reliable', 'Remarkable', 'Resilient'],
    S: ['Spectacular', 'Supportive', 'Sincere', 'Sympathetic', 'Strong'],
    T: ['Trustworthy', 'Talented', 'Thoughtful', 'Tremendous', 'Thankful'],
    U: ['Understanding', 'Upbeat', 'Unique', 'Uplifting', 'Unwavering'],
    V: ['Vibrant', 'Valiant', 'Virtuous', 'Versatile', 'Vivacious'],
    W: ['Wonderful', 'Wise', 'Warm-hearted', 'Witty', 'Welcoming'],
    X: ['Xenial', 'Xenodochial', 'Xenophilic', 'Xyloid', 'X-factor'],
    Y: ['Youthful', 'Yummy', 'Yearning', 'Yes-minded', 'Yare'],
    Z: ['Zealous', 'Zestful', 'Zappy', 'Zippy', 'Zen']
  };

  const maleButton = document.getElementById('maleButton');
  const femaleButton = document.getElementById('femaleButton');
  const resultParagraph = document.getElementById('resultParagraph');

  const generateMeaning = (name) => {
    const nameUpper = name.toUpperCase();
    let words = [];
    for (let char of nameUpper) {
      if (positiveWords[char]) {
        // Randomly pick one word from the array for each character
        const word = positiveWords[char][Math.floor(Math.random() * positiveWords[char].length)];
        words.push(word);
      }
    }
    return words.join(', ');
  };

  const displayMeaning = (name) => {
    if (name) {
      const words = generateMeaning(name);
      resultParagraph.textContent = `${name} is a ${words} person.`;
    } else {
      alert('Please enter a name.');
    }
  };

  maleButton.addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    displayMeaning(name);
  });

  femaleButton.addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    displayMeaning(name);
  });
});