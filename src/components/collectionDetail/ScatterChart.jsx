import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { ScatterData } from "./candledata";

const ScatterChart = ({ data = [], loading = false }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (!data.length) return;
        const scatterData = data.map((dataItem) => [
            new Date(dataItem?.createdAt).getTime(),
            dataItem.close,
        ]);
        let newData = [
            {
                name: "",
                id: "",
                // marker: {
                //     symbol: "circle",
                // },
                data: scatterData,
                showInLegend: false,
            },
        ];
        setChartData(newData);
    }, [data]);
    const options = {
        series: chartData,
        chart: {
            type: "scatter",
            // zoomType: "xy",
            zoomType: false,
            panning: false,
        },
        title: {
            text: "",
            // align: "left",
        },
        subtitle: {
            text: "",
            // align: "left",
        },
        xAxis: {
            title: {
                text: "",
            },
            // labels: {
            //     format: "{value} m",
            // },
            // startOnTick: true,
            // endOnTick: true,
            // showLastLabel: true,
            type: "datetime",
        },
        yAxis: {
            title: {
                text: "",
            },
            labels: {
                format: "{value}",
            },
        },
        legend: {
            enabled: true,
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 2.5,
                    symbol: "circle",
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: "rgb(100,100,100)",
                        },
                    },
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false,
                        },
                    },
                },
                jitter: {
                    x: 0.005,
                },
            },
        },
        tooltip: {
            formatter: function () {
                const localTime = new Date(
                    this.x + new Date().getTimezoneOffset() * 60000
                );
                const formattedDate = Highcharts.dateFormat(
                    "%b %e at %l:%M %p",
                    localTime
                );

                return `<b>Floor: ${this.y}</b><br/>${formattedDate}`;
            },
        },

        time: {
            useUTC: false,
            timezoneOffset: new Date().getTimezoneOffset(),
        },
        credits: {
            enabled: false,
        },
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default ScatterChart;
