import AreaChartComp from "./charts/AreaChartComp";
import BarComp from "./charts/BarComp";
import LineChartComp from "./charts/LineChartComp";
import RadarChartComp from "./charts/RadarChartComp";
import FunnelComp from "./charts/FunnelComp";
import PieChartComp from "./charts/PieChartComp";
import PieChartComp2 from "./charts/PieChartComp2";

export default function DashInfo() {
  const isLoggedIn = localStorage.getItem("sessionToken");

  return (
    <div>
      {isLoggedIn ? (
        <div className="dashboard-container">
          <div className="upper-charts">
            <div className="chart-box">
              <h2>Page Ratio</h2>
              <PieChartComp />
            </div>

            <div className="chart-box">
              <h2>Data Ratio</h2>
              <PieChartComp2 />
            </div>

            <div className="chart-box-2">
                <AreaChartComp />
            </div>
          </div>

          <div className="lower-charts">
            <div className="chart-box-2 bar-chart">
              <BarComp />
            </div>

            <div className="rad-fun-line-charts">
              <div className="rad-fun-charts">
                <div className="chart-box-2 radar">
                  <RadarChartComp />
                </div>

                <div className="chart-box-2 funnel">
                  <FunnelComp />
                </div>
              </div>

              <div className="chart-box-2">
                <LineChartComp />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-dashboard">
          <h1>Login to see Dashboard</h1>
          <a href="/login">
            <button className="signup-button dash-login">View Insights</button>
          </a>
        </div>
      )}
    </div>
  );
}
