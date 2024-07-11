// Historical data arrays
let historicalData = [
    [16, 23, 24, 32, 35],
    [5, 9, 12, 13, 27],
    [3, 10, 14, 21, 27],
    [9, 16, 23, 25, 32],
    [3, 12, 24, 31, 48],
    [5, 7, 29, 38, 45],
    [6, 11, 15, 34, 35],
    [18, 23, 38, 42, 49],
    [2, 16, 18, 26, 33],
    [16, 24, 28, 31, 33],
    [13, 36, 39, 45, 48],
    [7, 19, 26, 31, 34],
    [17, 28, 30, 41, 43],
    [8, 9, 11, 18, 41],
    [5, 8, 19, 31, 46],
    [4, 9, 18, 26, 38],
    [2, 16, 28, 40, 44],
    [20, 37, 41, 46, 48],
    [2, 21, 35, 41, 43],
    [6, 23, 39, 40, 44],
    [3, 11, 24, 25, 41],
    [17, 19, 25, 28, 41],
    [2, 16, 17, 32, 40],
    [11, 20, 35, 43, 46],
    [7, 9, 20, 24, 43],
    [14, 18, 35, 41, 48],
    [8, 17, 18, 41, 49],
    [20, 21, 28, 39, 42],
    [15, 20, 21, 38, 42],
    [17, 19, 32, 33, 41]
];


let luckyNumber = [
    [6],[10],[3],[10],[5],[2],[10],[5],[8],[1],[6],[13],[1],[10],[10],[1],[13],[6],[3],[12],[4], [6],[5],[6],[6],[6],[6],[1],[6],[5] 
  ];

// Count the occurrences of each number over time
const countOccurrencesOverTime = (data) => {
    let countsOverTime = {};
    data.forEach((draw, index) => {
        draw.forEach(number => {
            if (!countsOverTime[number]) {
                countsOverTime[number] = Array(data.length).fill(0);
            }
            countsOverTime[number][index] += 1;
        });
    });
    return countsOverTime;
};

// Calculate the cumulative sum for trend analysis
const calculateCumulativeSum = (countsOverTime) => {
    let cumulativeSum = {};
    for (let number in countsOverTime) {
        cumulativeSum[number] = countsOverTime[number].map((sum => value => sum += value)(0));
    }
    return cumulativeSum;
};

// Prepare data for Chart.js
const prepareChartData = (cumulativeSum) => {
    let datasets = [];
    for (let number in cumulativeSum) {
        datasets.push({
            label: `Number ${number}`,
            data: cumulativeSum[number],
            fill: false,
            borderColor: getRandomColor(),
            tension: 0.1
        });
    }
    return datasets;
};

// Generate a random color for the chart lines
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Perform trend analysis and display chart
const performTrendAnalysis = () => {
    const countsOverTime = countOccurrencesOverTime(historicalData);
    const cumulativeSum = calculateCumulativeSum(countsOverTime);
    const datasets = prepareChartData(cumulativeSum);

    const countsOverTimeLucky = countOccurrencesOverTime(luckyNumber);
    const cumulativeSumLucky = calculateCumulativeSum(countsOverTimeLucky);
    const datasetsLucky = prepareChartData(cumulativeSumLucky);

    const ctx = document.getElementById('trendChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: historicalData.length }, (_, i) => `Draw ${i + 1}`),
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Lottery Number Trend Analysis'
                }
            }
        }
    });
    const ctxLucky = document.getElementById('trendChartLucky').getContext('2d');
    new Chart(ctxLucky, {
        type: 'line',
        data: {
            labels: Array.from({ length: luckyNumber.length }, (_, i) => `Draw ${i + 1}`),
            datasets: datasetsLucky
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Lottery Number Trend Analysis'
                }
            }
        }
    });
};

// Call the function to perform trend analysis
performTrendAnalysis();
