import { HiOutlineCash, HiOutlineTag, HiOutlineThumbUp, HiOutlineUsers } from "react-icons/hi"

const data = [
        {
                label : "Total Revenues",
                price : "$2,129,430",
                color : "bg-green-100",
                element : <HiOutlineCash className="text-2xl" />
        },
        {
                label : "Total Transactions",
                price : "1,520",
                color : "bg-yellow-100",
                element : <HiOutlineTag className="text-2xl" />
        },
        {
                label : "Total Likes",
                price : "9,721",
                color : "bg-red-100",
                element : <HiOutlineThumbUp className="text-2xl" />
        },
        {
                label : "Total Users",
                price : "892",
                color : "bg-purple-100",
                element : <HiOutlineUsers className="text-2xl" />
        },
]

const Revenue = () => {
        return (
                <div className="my-4">
                        <div className="container flex flex-row space-x-10">
                                {
                                        data.map((items, index) => (
                                                <div className={`data-card ${items.color} basis-1/4 p-6 rounded-3xl`} key={index}>
                                                        <div className=" flex justify-end">
                                                                {items.element}
                                                        </div>
                                                        <p className=" font-secondary text-sm ">{items.label}</p>
                                                        <h1 className="text-2xl font-bold mt-1">{items.price}</h1>
                                                </div>
                                        ))
                                }
                        </div>
                </div>
        );
}

export default Revenue