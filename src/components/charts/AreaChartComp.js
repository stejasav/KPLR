import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
const dataList = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
];
export default function AreaChartComp() {
  return (
    <div className="area-chart-container">
      <ResponsiveContainer >
        <AreaChart data={dataList} margin={{right: 30}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <Tooltip/>
          <Legend/>
          <Area type="monotone" dataKey="uv" stroke="#b820de" fill="#ca03ca" stackId="1"/>
          <Area type="monotone" dataKey="pv" stroke="#b820de" fill="#440055" stackId="1"/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}