import getData from './fetchData.js';

console.log('Getting data....')
getData().then(data => {
    console.log("understand the data", data);
    const historicalData = data.map(draw => draw.numbers);
    const stars = data.map(draw => draw.stars);

    console.log(`Historical data: ${historicalData.length} draws`);

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

    // D3.js Histogram
    const allNumbers = historicalData.flat();
    const margin = { top: 10, right: 30, bottom: 30, left: 40 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    const svg = d3.select("#euromilhoesHistogramChart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleLinear()
        .domain([0, 50])
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    const histogram = d3.histogram()
        .value(d => d)
        .domain(x.domain())
        .thresholds(x.ticks(50));

    const bins = histogram(allNumbers);

    const y = d3.scaleLinear()
        .range([height, 0]);
    y.domain([0, d3.max(bins, d => d.length)]);
    svg.append("g")
        .call(d3.axisLeft(y));

    svg.selectAll("rect")
        .data(bins)
        .enter().append("rect")
        .attr("x", 1)
        .attr("transform", d => "translate(" + x(d.x0) + "," + y(d.length) + ")")
        .attr("width", d => x(d.x1) - x(d.x0) - 1)
        .attr("height", d => height - y(d.length))
        .style("fill", "#69b3a2");

}).catch(error => {
    console.error('Error fetching data:', error);
});
