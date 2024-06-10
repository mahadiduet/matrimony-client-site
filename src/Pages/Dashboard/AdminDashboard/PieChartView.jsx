import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PieChartView = ({pieChartData}) => {

    // const {pieChartData.totalBiodates} = pieChartData;
    // console.log(pieChartData.totalBiodates);

    const data = [
        { name: 'Total Biodata', value: pieChartData.totalBiodates },
        { name: 'Male Biodata', value: pieChartData.totalMaleBiodates },
        { name: 'Female Biodata', value: pieChartData.totalFemaleBiodates },
        { name: 'Marriage Story', value: pieChartData.totalMarriageStory },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
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

export default PieChartView;