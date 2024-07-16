let historicalData = [
  [7,15,18,46,49], // 2nd january 2024
  [4,7,18,39,50], // 5th january 2024
  [2,9,12,39,40],  // 9th january 2024
  [16,17,18,45,49], // 12th january 2024   
  [10,18,21,33,43], // 16th january 2024  
  [27,28,44,48,50], // 19th january 2024  
  [14,23,39,48,50], // 23rd january 2024
  [8,19,32,41,42],    // 26th january 2024
  [5,10,19,27,30], // 30th january 2024
  [13,20,23,27,42], // 2nd february 2024
  [2,7,21,28,45], // 6th february 2024
  [23,24,35,37,45], // 9th february 2024
  [13,17,18,20,46], // 13th february 2024
  [8,13,14,24,26], // 16th february 2024
  [23,31,37,42,43], // 20th february 2024
  [24,27,28,30,49], // 23rd february 2024
  [3,4,9,12,20], // 27th february 2024
  [4,7,19,20,34],// 1st march 2024
  [2,15,17,23,36],// 5th march 2024
  [8,11,12,16,44],// 8th march 2024
  [13,19,30,38,46],// 12th march 2024
  [1,4,31,34,40],// 15th march 2024
  [7,16,18,20,32],// 19th march 2024
  [8,11,23,32,44],// 22nd march 2024
  [2,13,14,26,29],// 26th march 2024
  [16,17,35,36,49],// 29th march 2024
  [1,23,31,36,48],// 2nd april 2024
  [13,18,266,35,37],// 5th april 2024
  [19,23,26,27,46],// 9th april 2024
  [2,3,12,16,45],// 12th april 2024
  [22,39,31,39,46],// 16th april 2024
  [10,20,40,44,46],// 19th april 2024
  [6,9,11,32,49],// 23rd april 2024
  [2,20,39,40,47],// 26th april 2024
  [13,22,24,33,47],// 30th april 2024
  [6,9,10,30,49],// 3rd may 2024
  [35,36,41,42,45],// 7th may 2024
  [13,28,29,44,48],// 10th may 2024
  [2,8,17,28,35],// 14th may 2024
  [18,31,32,41,46],// 17th may 2024
  [11,13,14,34,48],// 21st may 2024
  [9,12,18,22,50],// 24th may 2024
  [16,18,35,36,41],// 28th may 2024
  [4,7,16,33,34],// 31st may 2024
  [6,7,9,14,43],// 4th june 2024
  [15,16,26,30,37],// 7th june 2024
  [7,15,34,45,48],// 11th june 2024
  [2,13,16,24,32],// 14th june 2024
  [3,11,33,34,36],// 18th june 2024
  [3,4,7,11,17],// 21st june 2024
  [14,16,37,45,49],// 25th june 2024
  [10,16,18,22,35],// 28th june 2024
  [2,7,34,35,46],// 2nd july 2024
  [11,13,29,31,47],// 5th july 2024
  [6,15,19,28,39],// 9th july 2024
    //Friday 5th January 2024
  ];
  
  let historicStarData = 
    [
      [10,12], // 2nd january 2024
      [3,8], // 5th january 2024
      [1,3],  // 9th january 2024
      [9,12], // 12th january 2024   
      [8,12], // 16th january 2024  
      [7,12], // 19th january 2024  
      [3,12], // 23rd january 2024
      [9,12],    // 26th january 2024
      [5,6], // 30th january 2024
      [5,9], // 2nd february 2024
      [5,11], // 6th february 2024
      [9,12], // 9th february 2024
      [4,9], // 13th february 2024
      [1,2], // 16th february 2024
      [3.7], // 20th february 2024
      [1.12], // 23rd february 2024
      [5,6], // 27th february 2024
      [2,4],// 1st march 2024
      [3,8],// 5th march 2024
      [4,7],// 8th march 2024
      [4,12],// 12th march 2024
      [4,5],// 15th march 2024
      [1,3],// 19th march 2024
      [9,10],// 22nd march 2024
      [5,6],// 26th march 2024
      [1,10],// 29th march 2024
      [5,8],// 2nd april 2024
      [8,11],// 5th april 2024
      [2,10],// 9th april 2024
      [2,11],// 12th april 2024
      [3,7],// 16th april 2024
      [1,3],// 19th april 2024
      [2,10],// 23rd april 2024
      [4,8],// 26th april 2024
      [1,5],// 30th april 2024
      [3,4],// 3rd may 2024
      [6,11],// 7th may 2024
      [4,12],// 10th may 2024
      [7,9],// 14th may 2024
      [1,10],// 17th may 2024
      [7,9],// 21st may 2024
      [1,3],// 24th may 2024
      [6,7],// 28th may 2024
      [7,8],// 31st may 2024
      [3,4],// 4th june 2024
      [5,8],// 7th june 2024
      [7,9],// 11th june 2024
      [1,7],// 14th june 2024
      [1,12],// 18th june 2024
      [3,12],// 21st june 2024
      [5,7],// 25th june 2024
      [1,10],// 28th june 2024
      [6,8],// 2nd july 2024
      [1,11],// 5th july 2024
      [6,8],// 9th july 2024
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
  