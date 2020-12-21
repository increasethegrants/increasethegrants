(function (document, window) {
    "use strict";

    // Foundation Assets Chart
    // ========================

    var dataSets = [
        [34.1, 36.5, 36.2, 42.1, 45.4, 55.1, 61.4, 69.7, 73.0, 84.4],
        [3.6, 3.5, 3.7, 4.3, 4.4, 4.8, 5.9, 5.6, 5.7, 6.7],
        [
            Math.round(3.6 / 34.1 * 100 * 100) / 100,
            Math.round(3.5 / 36.5 * 100 * 100) / 100,
            Math.round(3.7 / 36.2 * 100 * 100) / 100,
            Math.round(4.3 / 42.1 * 100 * 100) / 100,
            Math.round(4.4 / 45.4 * 100 * 100) / 100,
            Math.round(4.8 / 55.1 * 100 * 100) / 100,
            Math.round(5.9 / 61.4 * 100 * 100) / 100,
            Math.round(5.6 / 69.7 * 100 * 100) / 100,
            Math.round(5.7 / 73.0 * 100 * 100) / 100,
            Math.round(6.7 / 84.4 * 100 * 100) / 100
        ]
    ];
    var assetsChartCtx = document.getElementById('assets-chart');
    var assetsChart = new Chart(assetsChartCtx, {
        type: 'line',
        data: {
            labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
            datasets: [
                {
                    label: "Total Foundation Assets",
                    backgroundColor: "rgba(217,92,62,0.3)",
                    borderColor: "rgba(217,92,62,0.8)",
                    yAxisID: 'y-axis-dollars',
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    data: dataSets[0]
                },
                {
                    label: "Total Grants From Foundations",
                    backgroundColor: "rgba(7,86,177, 0.3)",
                    borderColor: "rgba(7,86,177, 0.8)",
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    yAxisID: 'y-axis-dollars',
                    data: dataSets[1]
                },
                {
                    label: "Granting as % of Assets",
                    backgroundColor: "transparent",
                    borderColor: "rgba(0, 0, 0, 0.4)",
                    yAxisID: 'y-axis-percent',
                    pointBackgroundColor: "rgba(0, 0, 0, 0.4)",
                    pointRadius: 4,
                    pointHoverRadius: 6,
                    borderDash: [10, 5],
                    data: dataSets[2]
                },

            ]
        },
        options: {
            tooltips: {
                mode: "index",
                intersect: true,
                callbacks: {
                    label(dataSetItem, config) {
                        var label = config.datasets[dataSetItem.datasetIndex].label;
                        if (dataSetItem.datasetIndex === 2) {
                            return label + ': ' + dataSetItem.value + '%';
                        }
                        return label + ': $' + dataSetItem.value + ' B';
                    }
                }
            },
            scales: {
                yAxes: [
                    {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        id: 'y-axis-dollars',
                        scaleLabel: {
                            display: true,
                            labelString: 'dollars (billions)',
                        },
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 90,
                            callback: function (value) {
                                return '$' + value;
                            }
                        }
                    },
                    {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        id: 'y-axis-percent',
                        ticks: {
                            stepSize: 1,
                            min: 7,
                            max: 11,
                            callback: function (value) {
                                return value + '%';
                            }
                        },
                        gridLines: {
                            drawOnChartArea: false,
                        },
                    }
                ],
            }
        }
    });

})(document, window);