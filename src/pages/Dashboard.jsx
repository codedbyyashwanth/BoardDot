import {HiSearch, HiOutlineBell} from "react-icons/hi"
import Navigation from "../components/Navigation";
import Revenue from "../components/RevenueCard";
import LineChart from "../components/LineChart";
import BottomLayout from "../components/BottomLayout";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import request, { gql } from "graphql-request";
import { useLocation } from "react-router-dom";

const query = gql`
        {
                graphDatas {
                        guest
                        user
                }

                productsDatas {
                        data
                        title
                }
        }
`;

const API = "https://api-ap-south-1.hygraph.com/v2/clg4z6sr004gi01t93b8qfdx7/master";

const Dashboard = ()=> {
        const location = useLocation();
        const [profileUrl, setProfileUrl] = useState(location.state || "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80");
        const {data, status} = useQuery("graph-data", () => {
                return request(API, query);
        });

        if (status == "loading")
                return <h1>Loading...</h1>

        if (status == "error")
                return <h1>Error</h1>

        if (status == "success")
                console.log(data)

        return (
                <section className="dashboard-section flex flex-row bg-gray-100 h-screen">
                        <Navigation />
                        <div className="dashboard basis-4/5 py-10 px-14 overflow-y-auto">
                                <div className="dashboard-header flex justify-between items-center">
                                        <h3 className="text-2xl font-bold">Dashboard</h3>
                                        <div className="profile-container flex items-center space-x-6">
                                                <div className="input-group  bg-white rounded-lg h-10 flex items-center  px-4  font-secondary ">
                                                        <input className="outline-none border-none" type="text" id="search" placeholder="Search..." />
                                                        <HiSearch className="text-xl text-gray-400" />
                                                </div>
                                                <HiOutlineBell className="text-2xl" />
                                                <div className="rounded-full overflow-hidden w-10 h-10">
                                                        <img className="w-full h-full object-cover object-center" src={profileUrl} alt="" />
                                                </div>
                                        </div>
                                </div>
                                <Revenue />
                                <LineChart data={data.graphDatas} />
                                <BottomLayout data={data.productsDatas}/>
                        </div>
                </section>
        ); 
}

export default Dashboard;