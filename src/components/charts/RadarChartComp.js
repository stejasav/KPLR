import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip} from "recharts";
const dataList = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
];
export default function RadarChartComp() {
  return (
    <div className="radar-chart-container">
      <ResponsiveContainer > 
        <RadarChart outerRadious={90} data={dataList}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name"/>
          <PolarRadiusAxis angle={30} domain={[0,150]} />
          <Tooltip/>
          <Radar type="monotone" dataKey="uv" fill="#ca03ca"/>
          <Radar type="monotone" dataKey="pv" fill="#801994"/>
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}