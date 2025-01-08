import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
const dataList = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
];
export default function LineChartComp() {
  return (
    <div className="line-chart-container">
      <ResponsiveContainer >
        <LineChart data={dataList} margin={{ top: 5, left: 20, bottom: 5, right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="grey"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Line type="monotone" dataKey="uv" stroke="#ff01ae" stackId="1"/>
          <Line type="monotone" dataKey="pv" stroke="#580dc0" stackId="1"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}