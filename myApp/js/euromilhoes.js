let historicalData = [
    [7, 15, 18, 46, 49],  //Tuesday 2nd January 2024
    [4, 7, 18, 39, 50],  //Friday 5th January 2024
  ];
  
  let historicStarData = [
    [10, 12],  //Tuesday 2nd January 2024
    [3, 8],  //Friday 5th January 2024
  ];
  
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
    }
    return normalizedProbabilities;
  };
  
  // Function to generate a random number based on normalized probabilities
  const weightedRandom = (probabilities) => {
    const normalizedProbabilities = normalizeProbabilities(probabilities);
    let sum = 0;
    const r = Math.random();
    for (let number in normalizedProbabilities) {
        sum += normalizedProbabilities[number];
        if (r <= sum) {
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
  
    console.log("historicalData", historicalData);
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
  const generateStarsButton = document.getElementById('generateStarsButton');
  
  generateEuroButton.addEventListener("click", () => generateNumbers('numbers', 5, true));
  generateStarsButton.addEventListener("click", () => generateStars('stars'));
  
  console.log("number of probabilities", numberProbabilities);
  console.log("weighted random", weightedRandom(numberProbabilities));
  console.log("weighted random of star probabilities", weightedRandom(starProbabilities));
  