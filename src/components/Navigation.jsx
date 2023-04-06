import {HiOutlineChartPie, HiOutlineCreditCard, HiOutlineCalendar, HiOutlineUserCircle, HiOutlineCog} from "react-icons/hi"

const navigation = [
        {
                element : <HiOutlineChartPie className="text-xl"/>,
                label : "Dashboard",
                active : true
        },
        {
                element : <HiOutlineCreditCard className="text-xl"/>,
                label : "Transcations",
                active : false
        },
        {
                element : <HiOutlineCalendar className="text-xl"/>,
                label : "Schedules",
                active : false
        },
        {
                element : <HiOutlineUserCircle className="text-xl"/>,
                label : "Users",
                active : false
        },
        {
                element : <HiOutlineCog className="text-xl"/>,
                label : "Settings",
                active : false
        }
]

const Navigation = () => {
        return (
                <>
                        <div className="navigation-bar basis-1/5 pl-8 py-6 text-white h-screen ">
                                <div className="container bg-black h-full rounded-3xl px-12 py-16 flex flex-col justify-between">
                                        <div className="nav-items">
                                                <h1 className=" text-4xl font-bold">Board.</h1>
                                                <div className="navigation-items mt-10 space-y-5">
                                                        {
                                                                navigation.map((data, index) => (
                                                                        <div className={`item flex space-x-6 items-center cursor-pointer`} key={index}>
                                                                                {data.element}
                                                                                <span className={`text-lg  ${data.active ? `font-semibold ` : `text-gray-400` }`}>{data.label}</span>
                                                                        </div>
                                                                ))
                                                        }
                                                </div>
                                        </div>
                                        <div className="support-container space-y-4">
                                                <a className="text-md text-gray-200 block" href="#">Help</a>
                                                <a className="text-md text-gray-200 block" href="#">Contact Us</a>
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default Navigation