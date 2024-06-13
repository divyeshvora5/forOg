import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const PriceDistributionChart = ({ data = {} }) => {
    const options = {
        chart: {
            type: "column",
        },
        title: {
            text: "",
        },
        xAxis: {
            categories: data?.timePeriod || [],
            crosshair: true,
            accessibility: {
                description: "Time Period",
            },
        },
        yAxis: {
            title: {
                text: null,
            },
        },
        plotOptions: {
            column: {
                maxPointWidth: 30,
                pointPadding: 0.2,
                borderWidth: 0,
                borderRadius: "50%",
            },
        },
        series:
            data?.records?.map((series) => ({
                ...series,
                color: series.name === "Listing" ? "#FB4EF1" : "#2BD7EF",
            })) || [],
        credits: {
            enabled: false,
        },
        // subtitle: {
        //     text:
        //         'Source: <a target="_blank" ' +
        //         'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
        //     align: "left",
        // },

        // yAxis: {
        //     min: 0,
        //     title: {
        //         text: "1000 metric tons (MT)",
        //     },
        // },
        // tooltip: {
        //     valueSuffix: " (1000 MT)",
        // },
    };

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default PriceDistributionChart;
