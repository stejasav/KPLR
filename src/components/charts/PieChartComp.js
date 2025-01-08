import { Pie, PieChart, ResponsiveContainer, Tooltip} from "recharts";
const dataList = [
  { name: "Page A", uv: 250, fill: "#ca03ca" },
  { name: "Page B", uv: 210, fill: "#801994" },
  { name: "Page C", uv: 187, fill: "#7913a1" },
  { name: "Page D", uv: 150, fill: "#440055" },
  { name: "Page E", uv: 126, fill: "#a20ac1" },
  { name: "Page F", uv: 90,  fill: "#8508a4" },
];
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
export default function PieChartComp() {
  return (
    <ResponsiveContainer width={400} height={350}> 
      <PieChart >
        <Tooltip/>
        <Pie type="monotone" data={dataList} dataKey="uv" nameKey="name" cx="50%" cy="50%" outerRadius={90} fill="#ca03ca"/>
        <Pie type="monotone" data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={120} outerRadius={150} fill="#ca03ca" label/>
      </PieChart>
    </ResponsiveContainer>
  );
}