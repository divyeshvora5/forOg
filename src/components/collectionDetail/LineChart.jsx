import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

const LineChart = ({ data = [], loading = false }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (!data.length) return;
        const lineData = data.map((dataItem) => [
            new Date(dataItem?.createdAt).getTime(),
            dataItem.close,
        ]);
        setChartData(lineData);
    }, [data]);
    const options = {
        chart: {
            zoomType: false,
            panning: false,
        },
        title: {
            text: "",
        },
        subtitle: {
            text: "",
        },
        xAxis: {
            type: "datetime",
        },
        yAxis: {
            title: {
                text: "",
            },
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1,
                    },
                    stops: [
                        [0, "#2BD7EF"],
                        [1, "#fff"],
                    ],
                },
                lineColor: "#2BD7EF",
                marker: {
                    radius: 2,
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1,
                    },
                },
                threshold: null,
            },
        },

        series: [
            {
                type: "area",
                name: "Floor",
                data: loading ? [] : chartData,
            },
        ],
        time: {
            useUTC: false,
            timezoneOffset: new Date().getTimezoneOffset(),
        },
        credits: {
            enabled: false,
        },
    };

    return (
        <>
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </>
    );
};

export default LineChart;
