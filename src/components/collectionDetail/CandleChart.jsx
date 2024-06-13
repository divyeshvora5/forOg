import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsStock from "highcharts/modules/stock";
import HighchartsReact from "highcharts-react-official";

HighchartsMore(Highcharts);
HighchartsStock(Highcharts);

const CandleChart = ({ data = [], loading = false }) => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        if (!data.length) return;
        const candleData = data.map((dataItem) => {
            // const dateString = dataItem?._id;
            // const dateComponents = dateString.split("-");
            // const year = parseInt(dateComponents[0]);
            // const month = parseInt(dateComponents[1]) - 1;
            // const day = parseInt(dateComponents[2] || 0);
            // const hour = parseInt(dateComponents[3] || 0);
            // const datanew = new Date(year, month, day, hour).getTime();
            const datanew = new Date(dataItem?.createdAt).getTime();
            return [
                datanew,
                dataItem.open,
                dataItem.high,
                dataItem.low,
                dataItem.close,
            ];
        });
        setChartData(candleData);
    }, [data]);
    const options = {
        rangeSelector: {
            enabled: false,
        },
        navigator: {
            enabled: false,
        },
        // scrollbar: {
        //     enabled: false,
        // },
        title: {
            text: "",
        },
        chart: {
            height: 400,
        },
        plotOptions: {
            candlestick: {
                color: "#FB4EF1",
                upColor: "#2BD7EF",
                // lineColor: 'black'
            },
        },

        series: [
            {
                type: "candlestick",
                name: "AAPL Stock Price",
                data: loading ? [] : chartData,
                // dataGrouping: {
                //     units: [
                //         [
                //             "week", // unit name
                //             [1], // allowed multiples
                //         ],
                //         ["month", [1, 2, 3, 4, 6]],
                //     ],
                // },
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
            {chartData?.length > 0 ? (
                <div>
                    <HighchartsReact
                        constructorType={"stockChart"}
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default CandleChart;
