import { randomDataPoint } from "../../../config";

//Chart.js Line Chart Example 

var lineChartConfig = {
    type: 'line',

    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],

        datasets: [{
            label: 'Current week',
            fill: false,
            backgroundColor: window.chartColors.green,
            borderColor: window.chartColors.green,
            data: [
                randomDataPoint(),
                randomDataPoint(),
                randomDataPoint(),
                randomDataPoint(),
                randomDataPoint(),
                randomDataPoint(),
                randomDataPoint()
            ],
        }, {
            label: 'Previous week',
            borderDash: [3, 5],
            backgroundColor: window.chartColors.gray,
            borderColor: window.chartColors.gray,

            data: [
                randomDataPoint(),
                randomDataPoint(),
                randomDataPoint(),
                randomDataPoint(),
                randomDataPoint(),
                randomDataPoint(),
                randomDataPoint()
            ],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        aspectRatio: 1.5,

        legend: {
            display: true,
            position: 'bottom',
            align: 'end',
        },

        title: {
            display: true,
            text: 'Chart.js Line Chart Example',

        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleMarginBottom: 10,
            bodySpacing: 10,
            xPadding: 16,
            yPadding: 16,
            borderColor: window.chartColors.border,
            borderWidth: 1,
            backgroundColor: '#fff',
            bodyFontColor: window.chartColors.text,
            titleFontColor: window.chartColors.text,

            callbacks: {
                //Ref: https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
                label: function (tooltipItem, data) {
                    if (parseInt(tooltipItem.value) >= 1000) {
                        return "$" + tooltipItem.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    } else {
                        return '$' + tooltipItem.value;
                    }
                }
            },

        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    drawBorder: false,
                    color: window.chartColors.border,
                },
                scaleLabel: {
                    display: false,

                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    drawBorder: false,
                    color: window.chartColors.border,
                },
                scaleLabel: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    userCallback: function (value, index, values) {
                        return '$' + value.toLocaleString();   //Ref: https://stackoverflow.com/questions/38800226/chart-js-add-commas-to-tooltip-and-y-axis
                    }
                },
            }]
        }
    }
};



// Chart.js Bar Chart Example 

var barChartConfig = {
    type: 'bar',

    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Orders',
            backgroundColor: window.chartColors.green,
            borderColor: window.chartColors.green,
            borderWidth: 1,
            maxBarThickness: 16,

            data: [
                23,
                45,
                76,
                75,
                62,
                37,
                83
            ]
        }]
    },
    options: {
        responsive: true,
        aspectRatio: 1.5,
        legend: {
            position: 'bottom',
            align: 'end',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart Example'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleMarginBottom: 10,
            bodySpacing: 10,
            xPadding: 16,
            yPadding: 16,
            borderColor: window.chartColors.border,
            borderWidth: 1,
            backgroundColor: '#fff',
            bodyFontColor: window.chartColors.text,
            titleFontColor: window.chartColors.text,

        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    drawBorder: false,
                    color: window.chartColors.border,
                },

            }],
            yAxes: [{
                display: true,
                gridLines: {
                    drawBorder: false,
                    color: window.chartColors.borders,
                },


            }]
        }

    }
}

export {
    lineChartConfig,
    barChartConfig,
}