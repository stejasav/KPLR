import {Funnel, FunnelChart, LabelList, ResponsiveContainer, Tooltip} from "recharts";
const dataList = [
  { name: "Page A", uv: 250, fill: "#ca03ca" },
  { name: "Page B", uv: 210, fill: "#801994" },
  { name: "Page C", uv: 187, fill: "#7913a1" },
  { name: "Page D", uv: 150, fill: "#440055" },
  { name: "Page E", uv: 126, fill: "#a20ac1" },
  { name: "Page F", uv: 90,  fill: "#8508a4" },
];
export default function FunnelComp() {
  return (
    <div className="funnel-chart-container">
      <ResponsiveContainer> 
        <FunnelChart>
          <Tooltip/>
          <Funnel type="monotone" data={dataList} dataKey="uv" isAnimationActive>
            <LabelList position="right" fill={dataList.fill} stroke="none" dataKey="name" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
}