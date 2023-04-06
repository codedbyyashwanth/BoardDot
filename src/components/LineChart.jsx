import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js";
import { Data } from "./Data"
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {HiOutlineChevronDown} from "react-icons/hi"

Chart.register(CategoryScale);

const LineChart = ({data}) => {
        const [chart, setChart] = useState({
                labels : ["week 1", "week 2", "week 3", "week 4"],
                datasets : [
                        {
                                label : "Guest",
                                data : data.map((values) => values.guest),
                                borderColor: "#ff0000",
                                fill: false,
                                tension: 0.4
                        },
                        {
                                label : "User",
                                data : data.map((values) => values.user),
                                borderColor: "#00ff6a",
                                fill: false,
                                tension: 0.4
                        }
                ]
        })

        return (
                <div className="w-full bg-white my-10 py-8 px-10 box-border rounded-3xl">
                        <div className="header">
                                <div className="">
                                        <h3 className="text-lg font-bold">Activities</h3>
                                        <span className="text-sm text-gray-500 flex items-center">May - June 2021  <HiOutlineChevronDown className="ml-1" /></span>
                                </div>
                        </div>
                        <Line className="w-full" style={{ height : 250, maxHeight : 250 }}  data={chart}  options={
                                {
                                        plugins: {
                                                title: {
                                                        display: false
                                                },
                                                legend: {
                                                        display: true
                                                }
                                        },
                                        responsive : true,
                                        maintainAspectRatio : false
                        }} />
                </div>
        );
}

export default LineChart