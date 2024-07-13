// import { inizializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// import{ getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

// const appSettings = "https://euromilhoes-cbeff-default-rtdb.europe-west1.firebasedatabase.app/"

// const app = initializeApp(appSettings);
// const database = getDatabase(app);
// const historicalDataInDB = ref(database, 'historicalData');

let historicalData = [
    [16 ,23 , 24, 32, 35], // (6) Sorteio: 022/2024 totoloto
    [5, 9, 12, 13, 27],  // (10) Sorteio: 023/2024 totoloto
    [3, 10, 14, 21, 27], // (3) Sorteio: 024/2024 totoloto
    [9, 16, 23, 25, 32], // (10) Sorteio: 025/2024 totoloto
    [3, 12, 24, 31, 48], // (5) Sorteio: 026/2024 totoloto
    [5, 7, 29, 38, 45],  // (2) Sorteio: 027/2024 totoloto 
    [6, 11, 15, 34, 35], // (10) Sorteio: 028/2024 totoloto
    [18, 23, 38, 42, 49],// (5) Sorteio: 029/2024 totoloto
    [2, 16, 18, 26, 33], // (8) Sorteio: 030/2024 totoloto
    [16, 24, 28, 31, 33], // (1) Sorteio: 031/2024 totoloto
    [13, 36, 39, 45, 48], // (6) Sorteio: 032/2024 totoloto
    [7,19, 26, 31, 34], // (13) Sorteio: 033/2024 totoloto
    [17, 28, 30, 41, 43], // (1) Sorteio: 034/2024 totoloto
    [8, 9, 11, 18, 41], // (10) Sorteio: 035/2024 totoloto
    [5, 8, 19, 31, 46], // (10) Sorteio: 036/2024 totoloto
    [4, 9, 18, 26,38], // (1) Sorteio: 037/2024 totoloto 
    [2, 16, 28, 40, 44], // (13) Sorteio: 038/2024 totoloto
    [20, 37, 41, 46, 48], // (6) Sorteio: 039/2024 totoloto
    [2, 21, 35, 41, 43], // (3) Sorteio: 040/2024 totoloto
    [6, 23, 39, 40, 44], // (12) Sorteio: 041/2024 totoloto
    [3, 11, 24, 25, 41], // (4) Sorteio: 042/2024 totoloto
    [17, 19, 25, 28, 41], // (6) Sorteio: 043/2024 totoloto
    [2, 16, 17, 32, 40], // (5) Sorteio: 044/2024 totoloto
    [11, 20, 35, 43, 46], // (5) Sorteio: 045/2024 totoloto
    [7, 9, 20, 24, 43], // (6) Sorteio: 046/2024 totoloto
    [14, 18, 35, 41,48], // (6) Sorteio: 047/2024 totoloto
    [8, 17, 18, 41, 49], // (6) Sorteio: 048/2024 totoloto
    [20, 21, 28, 39, 42], // (1) Sorteio: 049/2024 totoloto
    [15, 20, 21, 38,42], // (6) Sorteio: 050/2024 totoloto
    [17, 19, 32 , 33, 41], // (5) Sorteio: 051/2024 totoloto
    [24, 15,33, 48, 34], //(8) Sorteio: 052/2024 totoloto
    [40, 14, 37, 35, 1], // (1) Sorteio: 053/2024 totoloto
    [47, 48, 6, 24, 34], // (9) Sorteio: 054/2024 totoloto
    [11,15,22,33,41] // (4) Sorteio: 055/2024 totoloto
  ];

  let luckyNumber = [
    [6],[10],[3],[10],[5],[2],[10],[5],[8],[1],[6],[13],[1],[10],[10],[1],[13],[6],[3],[12],[4], [6],[5],[6],[6],[6],[6],[1],[6],[5],[8],[1],[9],[4] 
  ]
    // Count the occurrences of each number
    const countOccurrences = (data) => {
        var counts = {};
        data.forEach(draw => {
          draw.forEach(number => {
            counts[number] = (counts[number] || 0 ) +1;
          });
        });
        return counts;
    };
      const TotalCount = historicalData.length * historicalData[0].length;
      const TotalCountLucky = luckyNumber.length * luckyNumber[0].length;
      // Calculate the probabilities based on occurrences
      const calculateProbabilities = (counts, totalDraws) => {
        let probabilities = {};
        for (let number in counts) {
          probabilities[number] = counts[number] / totalDraws;
        }
        return probabilities;
      };
      // Calculate the probabilities of the lucky number
      const calculateProbabilitiesLucky = (counts, totalDraws) => {
        let probabilities = {};
        for (let number in counts) {
          probabilities[number] = counts[number] / totalDraws;
        }
        return probabilities;
      };

      calculateProbabilities(countOccurrences(luckyNumber), TotalCount)

      const numberCounts = countOccurrences(historicalData);
      const luckyCounts = countOccurrences(luckyNumber);
      console.log("lucky counts", luckyCounts)
      const totalDraws = historicalData[0].length * historicalData.length;
      const luckyDraws = luckyNumber[0].length * luckyNumber.length;
      console.log("luckDraws", luckyDraws)
      const numberProbabilities = calculateProbabilities(numberCounts, totalDraws);
      const luckyProbabilities = calculateProbabilitiesLucky(luckyCounts, luckyDraws);
      // Function to generate a random number based on probabilities
      const weightedRandom = (probabilities) => {
        let sum = 0;
        let r = Math.random();

        // caltculate the total sum of the probabilities
        let total = Object.values(numberProbabilities).reduce((acc, curr) => acc + curr, 0);

        console.log("total", total)

        if (Math.abs(total - 1) > 0.00001) {
          console.error("The sum of probabilities must equal 1. Current sum:", total);
              // Normalize probabilities if needed
              for (let number in probabilities) {
                probabilities[number] /= total;
              }
          }
        
          for (let number in probabilities) {
            sum += (probabilities[number]);
            console.log(`number: ${number}, sum: ${sum}. r: ${r}`)
            if (r <= sum) {
              console.log("number", number)
              return parseInt(number);
            }            
          }
        
          console.error("No number was selected. Check the probabilities.");
          return null;
        };
                  // Function to normalize probabilities
          const normalizeProbabilities = (probabilities) => {
            const total = Object.values(probabilities).reduce((acc, curr) => acc + curr, 0);
            const normalizedProbabilities = {};
            for (let number in probabilities) {
                normalizedProbabilities[number] = probabilities[number] / total;
            }
            return normalizedProbabilities;
          };

          // Function to generate a random number based on normalized probabilities
        const weightedRandom1 = (probabilities) => {
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

        // Function to generate a random number based on normalized probabilities
        const weightedRandomLucky = (probabilities) => {
          const normalizedProbabilities = normalizeProbabilities(probabilities);
          let sum = 0;
          const r = Math.random();
          for (let number in normalizedProbabilities) {
              sum += normalizedProbabilities[number];
              console.log(`Lucky number: ${number}, sum: ${sum}. r: ${r}`);
              if (r <= sum) {
                  console.log("Lucky number", number);
                  return parseInt(number);
              }
          }
          console.error("No number was selected. Check the probabilities.");
          return null;
      };

        console.log("number of probabilities >", numberProbabilities);
        console.log("weighted random", weightedRandom(numberProbabilities));
        console.log("weighted random of lucky probability", weightedRandom(luckyProbabilities));



const generateNumbers = (targetId, count, includeStars = false) => {
    const numbers = [];
    const numbersShow = document.getElementById(targetId)

    if (!numbersShow) return;

    numbersShow.innerHTML = ''; 

for (let i = 0; i < 5; i++) {
    let randomNumber;
    do {
        randomNumber = weightedRandom(numberProbabilities) 
        }while (numbers.includes(randomNumber));
        numbers.push(randomNumber);
    }
    historicalData.push(numbers)

    // //firebase
    // const histoDataRef = database.ref('historialData');
    // histoDataRef.push(numbers)
    //   .then(() => {
    //     console.log("Data saved successfully to Firebase.", numbers);
    //   })
    //   .catch((error) => {
    //     console.error("Error saving data to Firebase:", error);
    //   });

    numbers.forEach((number,index) => {
        const numberElement = document.createElement('li');
        numberElement.className = index === count - 0 ? 'bonus-ball' : 'number-ball';
        numberElement.textContent = `${number}   `;
        numbersShow.appendChild(numberElement)
    })

}

const generateLuckyNumber = () => {
  const lucky = [];
  const luckyShow = document.getElementById("lucky");
  if (!luckyShow) return;

  luckyShow.innerHTML = ''; // Clear existing content

  for (let i = 0; i < 1; i++) {
      let randomNumber;
      do {
          randomNumber = weightedRandomLucky(luckyProbabilities); // Ensure luckyProbabilities is defined
      } while (lucky.includes(randomNumber));
      lucky.push(randomNumber);
  }

  lucky.forEach((number) => {
      const luckyElement = document.createElement('li');
      luckyElement.className = 'bonus-ball';
      luckyElement.textContent = `${number}`;
      luckyShow.appendChild(luckyElement); // Append to luckyShow instead of starsShow
  });
};

const generateEuroButton = document.getElementById('generateEuroButton')
const generateLuckyButton = document.getElementById('generateLuckyButton');
generateEuroButton.addEventListener("click", () => generateNumbers('numbers',5, true))
generateLuckyButton.addEventListener("click", () => generateLuckyNumber('lucky'))


// console.log("number of probabilities" ,generateLuckyNumber('stars'))


//INVERSE FUNCTIONS 
    //Calculate the inverseFrequencies of each number
const calculateInverseFrequencies = (counts) => {
let inverseFrequencies = {};
  for (let number in counts) {
    console.log("inverse Frequencies",number, counts[number] / totalDraws, 1 / counts[number] );
      inverseFrequencies[number] = 1 / counts[number];
  }
  console.log(counts)
  return inverseFrequencies;
  };
      
const inverseFrequencies = calculateInverseFrequencies(numberCounts);
const inverseProbabilities = calculateProbabilities(inverseFrequencies, TotalCount);
console.log("Inverse Probabilities:", inverseProbabilities);

const inverseFrequenciesLucky = calculateInverseFrequencies(luckyCounts);

// Step 3: Normalize inverse frequencies to probabilities
const normalizeInverseProbabilities = (frequencies) => {
    const total = Object.values(frequencies).reduce((acc, curr) => acc + curr, 0);
    const normalizedProbabilities = {};
    for (let number in frequencies) {
        normalizedProbabilities[number] = frequencies[number] / total;
    }
    return normalizedProbabilities;
};

// Step 4: Calculate cumulative probabilities
const calculateCumulativeProbabilities = (probabilities) => {
  const cumulativeProbabilities = {};
  let cumulativeSum = 0;
  for (let number in probabilities) {
      cumulativeSum += probabilities[number];
      cumulativeProbabilities[number] = cumulativeSum;
  }
  return cumulativeProbabilities;
};

const normalizedInverseProbabilities = normalizeProbabilities(inverseFrequencies);
const normalizedInverseProbabilitiesLucky = normalizeProbabilities(inverseFrequenciesLucky);
console.log("Normalized Inverse Probabilities:", normalizedInverseProbabilities);
console.log("Normalized Inverse Probabilities Lucky:", normalizedInverseProbabilitiesLucky);


const cumulativeInversedProbabilities = calculateCumulativeProbabilities(normalizedInverseProbabilities);
const cumulativeInversedProbabilitiesLucky = calculateCumulativeProbabilities(normalizedInverseProbabilitiesLucky);
console.log("Cumulative  Inverse Probabilities:", cumulativeInversedProbabilities);
console.log("Cumulative Inverse Probabilities Lucky:", cumulativeInversedProbabilitiesLucky);


const weightedRandomInverse = (cumulativeProbabilities) => {
  const r = Math.random();
  console.log("Random Inverse Number r:", r);
  for (let number in cumulativeProbabilities) {
    console.log("Number Inverse:", number, "Cumulative Inversed Probability:", cumulativeProbabilities[number]);
    // console.log("the r is:", r, "less than or equal to cumulativeProbabilities[number]:", cumulativeProbabilities)
      if (r <= cumulativeProbabilities[number]) {
        console.log("the final inversed selected number is:", number);
        return parseInt(number);

      }
    }

  console.error("No number was selected. Check the probabilities.");
  return null;
  
};


// Generate and display numbers
const generateInverseNumbers = (targetId, count, includeStars = false) => {
  const numbers = [];
  const numbersShow = document.getElementById(targetId);

  if (!numbersShow) return;

  numbersShow.innerHTML = '';

  for (let i = 0; i < 5; i++) {
      let randomNumber;
      do {
          randomNumber = weightedRandomInverse(cumulativeInversedProbabilities);
      } while (numbers.includes(randomNumber));
      numbers.push(randomNumber);
  }

  numbers.forEach((number, index) => {
      const numberElement = document.createElement('li');
      numberElement.className = index === count - 0 ? 'bonus-ball' : 'number-ball';
      numberElement.textContent = `${number}`;
      numbersShow.appendChild(numberElement);
  });


};

const generateLuckyInverseNumber = () => {
  const lucky = [];
  const luckyShow = document.getElementById("lucky");
  if (!luckyShow) return;

  luckyShow.innerHTML = ''; // Clear existing content

  for (let i = 0; i < 1; i++) {
      let randomNumber;
      do {
          randomNumber = weightedRandomInverse(cumulativeInversedProbabilitiesLucky);
      } while (lucky.includes(randomNumber));
      lucky.push(randomNumber);
  }

  lucky.forEach((number) => {
      const luckyElement = document.createElement('li');
      luckyElement.className = 'bonus-ball';
      luckyElement.textContent = `${number}`;
      luckyShow.appendChild(luckyElement);
  });
};




//Butao para GERAR NUMEROS INVERSOS



const generateInverseButton = document.getElementById('generateInverseButton')
const generateLuckyInverseButton = document.getElementById('generateInverseLuckyButton')

generateLuckyInverseButton.addEventListener("click", () => generateLuckyInverseNumber());
generateInverseButton.addEventListener("click", () => generateInverseNumbers('numbers', 5, true));


