import { Bar, Pie } from "react-chartjs-2"
import {HiOutlineChevronDown, HiOutlineChevronRight} from "react-icons/hi"
import { Data } from "./Data2"
import { useState } from "react"

const BottomLayout = ({data}) => {
        const [chart, setChart] = useState({
                labels : ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
                datasets : [
                        {
                                label : "Guest",
                                data : data.map((item) => item.data),
                                backgroundColor : [
                                        "rgba(26, 255, 0, 0.3)",
                                        "rgba(251, 255, 0, 0.3)",
                                        "rgba(255, 0, 0, 0.3)",
                                ]
                        }
                ]
        })

        return (
                <div className="bottom-section">
                        <div className="container flex flex-row space-x-14 items-stretch">
                                <div className="chart-container basis-1/2 bg-white rounded-3xl py-8 px-10" style={{minHeight : 220}}>
                                        <div className="header">
                                                <div className="flex items-center justify-between">
                                                        <h3 className="text-lg font-bold">Top products</h3>
                                                        <span className="text-sm text-gray-500 flex items-center">May - June 2021  <HiOutlineChevronDown className="ml-1" /></span>
                                                </div>
                                        </div>
                                        <div className="content py-4">
                                                <div className="flex justify-center items-center">
                                                        <Pie data={chart}  style={{ width : 250, maxWidth : 250, height: "auto" }}   options={
                                                                {
                                                                        plugins: {
                                                                                title: {
                                                                                        display: false
                                                                                },
                                                                                legend: {
                                                                                        display: false
                                                                                }
                                                                        },
                                                                        responsive : false,
                                                                        maintainAspectRatio : false
                                                        }} />
                                                        <div className=" space-y-2">
                                                                <div className="item flex">
                                                                        <div className="w-3 h-3 bg-green-200 rounded-full mt-1.5 mr-2"></div>
                                                                        <div>
                                                                                <h4 className="font-bold text-sm">Basic Tees</h4>
                                                                                <p className="text-gray-500 text-sm">55%</p>
                                                                        </div>
                                                                </div>
                                                                <div className="item flex">
                                                                        <div className="w-3 h-3 bg-yellow-200 rounded-full mt-1.5 mr-2"></div>
                                                                        <div>
                                                                                <h4 className="font-bold text-sm">Custom Short Pants</h4>
                                                                                <p className="text-gray-500 text-sm">31%</p>
                                                                        </div>
                                                                </div>
                                                                <div className="item flex">
                                                                        <div className="w-3 h-3 bg-red-200 rounded-full mt-1.5 mr-2"></div>
                                                                        <div>
                                                                                <h4 className="font-bold text-sm">Super Hoodies</h4>
                                                                                <p className="text-gray-500 text-sm">14%</p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="news-container basis-1/2 bg-white rounded-3xl pt-8 px-10" style={{minHeight : 220}}>
                                        <div className="header">
                                                <div className="flex items-center justify-between">
                                                        <h3 className="text-lg font-bold">Today's schedule</h3>
                                                        <span className="text-sm text-gray-500 flex items-center">See All <HiOutlineChevronRight className="ml-1" /></span>
                                                </div>
                                        </div>
                                        <div className="text-content space-y-4 my-6">
                                                <div className="item border-l-4 border-green-300">
                                                        <div className="px-3">
                                                                <h4 className="font-bold text-md">Meeting with suppliers from Kuta Bali</h4>
                                                                <p className="text-gray-500 text-sm">14.00-15.00</p>
                                                                <p className="text-gray-500 text-sm">at Sunset Road, Kuta, Bali</p>
                                                        </div>
                                                </div>
                                                <div className="item  border-l-4 border-purple-300">
                                                        <div className="px-3">
                                                                <h4  className="font-bold text-md">Check operation at Giga Factory 1</h4>
                                                                <p className="text-gray-500 text-sm">18.00-20.00</p>
                                                                <p className="text-gray-500 text-sm">at Central Jakarta </p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

export default BottomLayout