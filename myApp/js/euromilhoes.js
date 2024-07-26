import getData from "./fetchData.js";

console.log("Getting data...");


getData().then(data => {
  console.log("Understand the data", data);


  // process the fetched data here...
  const historicalData = data.map(draw => draw.numbers);
  const historicStarData = data.map(draw => draw.stars);

  console.log(`Historical data: ${historicalData.length} draws`);

  console.log(`Last numbers and stars : ${historicalData.splice(historicalData.length - 1)} and stars: ${historicStarData.splice(historicStarData.length - 1)}`);
  // Count the occurrences of each number
  const countOccurrences = (data) => {
    var counts = {};
    data.forEach(draw => {
        draw.forEach(number => {
            counts[number] = (counts[number] || 0) + 1;
        });
    });
    return counts;
  };
  
  const totalDraws = historicalData.length * historicalData[0].length;
  const starDraws = historicStarData.length * historicStarData[0].length;
  
  // Calculate the probabilities based on occurrences
  const calculateProbabilities = (counts, totalDraws) => {
    let probabilities = {};
    for (let number in counts) {
        probabilities[number] = counts[number] / totalDraws;
    }
    return probabilities;
  };
  
  const numberCounts = countOccurrences(historicalData);
  const starCounts = countOccurrences(historicStarData);
  
  const numberProbabilities = calculateProbabilities(numberCounts, totalDraws);
  const starProbabilities = calculateProbabilities(starCounts, starDraws);
  
  // Normalize probabilities
  const normalizeProbabilities = (probabilities) => {
    const total = Object.values(probabilities).reduce((acc, curr) => acc + curr, 0);
    const normalizedProbabilities = {};


    for (let number in probabilities) {
        normalizedProbabilities[number] = probabilities[number] / total;
        console.log(`Normalized probability for ${number}: ${normalizedProbabilities[number]}`);
        
    }

    return normalizedProbabilities;
  }

  
  // Function to generate a random number based on normalized probabilities
  const weightedRandom = (probabilities) => {
    const normalizedProbabilities = normalizeProbabilities(probabilities);
    let sum = 0;
    const r = Math.random();
    for (let number in normalizedProbabilities) {
      console.log(`r ${r} sum ${sum} number ${number}`);
        sum += normalizedProbabilities[number];
        
        if (r <= sum) {
          console.log("Selected number:", number);
            return parseInt(number);
        }
    }
    console.error("No number was selected. Check the probabilities.");
    return null;
  };
  
  const generateNumbers = (targetId, count, includeStars = false) => {
    const numbers = [];
    const numbersShow = document.getElementById(targetId);
  
    if (!numbersShow) return;
  
    numbersShow.innerHTML = '';
  
    for (let i = 0; i < 5; i++) {
        let randomNumber;
        do {
            randomNumber = weightedRandom(numberProbabilities);
        } while (numbers.includes(randomNumber));
        numbers.push(randomNumber);
    }
    historicalData.push(numbers);
  
    numbers.forEach((number, index) => {
        const numberElement = document.createElement('li');
        numberElement.className = index === count - 0 ? 'bonus-ball' : 'number-ball';
        numberElement.textContent = `${number} `;
        numbersShow.appendChild(numberElement);
    });
  
    // Generate stars if requested
    if (includeStars) {
        generateStars('stars');
    }
  };
  
  const generateStars = (targetId) => {
    const starsShow = document.getElementById(targetId);
    if (!starsShow) return;
  
    starsShow.innerHTML = '';
  
    const stars = [];
    while (stars.length < 2) {
        let randomStar = weightedRandom(starProbabilities);
        if (!stars.includes(randomStar)) {
            stars.push(randomStar);
        }
    }
  
    stars.forEach((star) => {
        const starsElement = document.createElement('li');
        starsElement.className = 'bonus-ball';
        starsElement.textContent = `${star}`;
        starsShow.appendChild(starsElement);
    });
  };
  
  const generateEuroButton = document.getElementById('generateEuroButton');

  
  generateEuroButton.addEventListener("click", () => generateNumbers('numbers', 5, true));
 
  
  console.log("number of probabilities", numberProbabilities);
  console.log("weighted random", weightedRandom(numberProbabilities));
  console.log("weighted random of star probabilities", weightedRandom(starProbabilities));
  console.log(typeof numberProbabilities)
/* const numberProbabilities = calculateProbabilities(numberCounts, totalDraws);
  const starProbabilities = calculateProbabilities(starCounts, starDraws);
  */

  // i want to generate a number based on probabilities directly

 /* is an object the number of probabilities, then convert the object into an array of entries [key, value] */
 const entries = Object.entries(numberProbabilities);
 // i can see that is an object of arrrays of probabilities each array each number

 // Sort the entries by probability (value) in descending order
 entries.sort(([, probA], [, probB]) => probB - probA);

 // select the top 5 entries (highest probabilities)
 const top5Entries = entries.slice(0, 5);
 console.log("top 5 probabilities", top5Entries);


 entries.sort(([, probA], [, probB]) => probA - probB);
 const bottom5Entries = entries.slice(0, 5);
 console.log("bottom 5 probabilities", bottom5Entries);

 const entriesStar = Object.entries(starProbabilities);
 entriesStar.sort(([, probA], [, probB]) => probB - probA);

 const top2EntriesStar = entriesStar.slice(0, 2);
 
 console.log("top probabilities of stars", top2EntriesStar);

 const bottom2EntriesStar = entriesStar.slice(-2);
 console.log("bottom probabilities of stars", bottom2EntriesStar);

// Chat GPT

// Assuming top5Entries and top5EntriesStar contain the top numbers and stars respectively

// with their corresponding probabilities
function displayTopNumbersAndStars(topNumbers, topStars) {
  // Get the HTML elements by their IDs
  const topNumbersElement = document.getElementById('top-numbers');
  const topStarsElement = document.getElementById('top-stars');

  topNumbersElement.innerHTML = ``;
  topStarsElement.innerHTML = ``;
  console.log("top numbers", topNumbers);

  topNumbers.forEach(([number]) => {
    const numberElement = document.createElement('li');
    numberElement.className = 'number-ball';
    numberElement.textContent = `${[number]}`;
    topNumbersElement.appendChild(numberElement);
  });

  topStars.forEach(([star]) => {
    const starsElement = document.createElement('li');
    starsElement.className = 'bonus-ball';
    starsElement.textContent = `${star}`;
    topStarsElement.appendChild(starsElement);
  });

}

function displayBottomNumbersAndStars(bottomNumbers, bottomStars) {
  const bottomNumbersElement = document.getElementById('bottom-numbers');
  const bottomStarsElement = document.getElementById('bottom-stars');
  /*
  const numbersShow = document.getElementById(targetId);
  
  if (!numbersShow) return;

  numbersShow.innerHTML = '';
*/
bottomNumbersElement.innerHTML = ``;
bottomStarsElement.innerHTML = ``;

    bottomNumbers.forEach(([number]) => {
      const numberElement = document.createElement('li');
      numberElement.className = 'number-ball';
      numberElement.textContent = `${[number]}`;
      bottomNumbersElement.appendChild(numberElement);
    });

    bottomStars.forEach(([star]) => {
      const starsElement = document.createElement('li');
      starsElement.className = 'bonus-ball';
      starsElement.textContent = `${star}`;
      bottomStarsElement.appendChild(starsElement);
    });

}
  
// Call this function with your actual data
generateTopButton.addEventListener("click", () => displayTopNumbersAndStars(top5Entries, top2EntriesStar));

generateBottomButton.addEventListener("click", () => displayBottomNumbersAndStars(bottom5Entries, bottom2EntriesStar));

});