// import React, { useEffect } from "react";
// import { Pie } from "react-chartjs-2";

import { Legend, PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";

const PieChart = () => {
    // const chartRef = React.createRef();
    // // console.log(data);
    // // {totalBiodates, totalMaleBiodates, totalFemaleBiodates, totalMarriageStory}
    // const chartData = {
    //     labels: ['Total Biodata', 'Total Male Biodata', 'Total Female Biodata', 'Total Marriage Stories'],
    //     datasets: [
    //         {
    //             label: 'Biodata Statistics',
    //             data: [data.totalBiodates, data.totalMaleBiodates, data.totalFemaleBiodates, data.totalMarriageStory],
    //             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384'],
    //             hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384'],
    //         },
    //     ],
    // };

    // useEffect(() => {
    //     return () => {
    //         if (chartRef.current) {
    //             chartRef.current.chartInstance.destroy();
    //         }
    //     };
    // }, []);

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    return (
        // <div>
        //     <h2 className="text-center text-2xl font-bold mb-4">Biodata Statistics</h2>
        //     <Pie data={chartData} />
        // </div>
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                    label
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChart;