import Activity from "./activity/activity";
import Chart from "./chart/chart";
import "./dashboardLanding.scss"
import Overview from "./overview/overview";
import Request from "./request/request";

const DashboardLanding = () => {
    return (
        <div className="dashboard-landing">
            <div className="left">
                <Overview />
                <Chart />
                <Request />
            </div>
            <div className="right">
               <Activity />
            </div>
        </div>
    )
}

export default DashboardLanding;