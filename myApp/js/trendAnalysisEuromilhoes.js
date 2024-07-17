import getData  from './fetchData.js';

console.log('Getting data....')
getData().then(data => {
    console.log(data);
}).catch(error => {
    console.error('Error fetching data:', error);
});
console.log('Getting data...', await getData() );
// Historical data arrays
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
    
];


let stars = [
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

    const countsOverTimeLucky = countOccurrencesOverTime(stars);
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
            labels: Array.from({ length: stars.length }, (_, i) => `Draw ${i + 1}`),
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
                    text: 'Stars number Trend Analysis'
                }
            }
        }
    });
};

// Call the function to perform trend analysis
performTrendAnalysis();


//D3// 


// Flatten the array of arrays into a single array of numbers
const allNumbers = historicalData.flat();

// Set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 40},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// Append the svg object to the body of the page
const svg = d3.select("#euromilhoesHistogramChart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// X axis: scale and draw
const x = d3.scaleLinear()
    .domain([0, 50])     // can be changed according to your data
    .range([0, width]);
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

// Set the parameters for the histogram
const histogram = d3.histogram()
    .value(d => d)
    .domain(x.domain())
    .thresholds(x.ticks(50));

// Apply the function to data to get the bins
const bins = histogram(allNumbers);

// Y axis: scale and draw
const y = d3.scaleLinear()
    .range([height, 0]);
y.domain([0, d3.max(bins, d => d.length)]);   // d3.hist has to be called before the Y axis obviously
svg.append("g")
    .call(d3.axisLeft(y));

// Append the bar rectangles to the svg element
svg.selectAll("rect")
    .data(bins)
  .enter().append("rect")
    .attr("x", 1)
    .attr("transform", d => "translate(" + x(d.x0) + "," + y(d.length) + ")")
    .attr("width", d => x(d.x1) - x(d.x0) - 1)
    .attr("height", d => height - y(d.length))
    .style("fill", "#69b3a2");