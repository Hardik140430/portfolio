import { useState } from "react";

const Service = () => {
    const [data, setData] = useState({
        service1: {
            icon: <i class="text-4xl fa-solid fa-computer"></i>,
            heading: "Front End Development",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi corporis, qui commodi molestiae dolorem.",
            service1button: {
                name: "check..",
                link: "/check1",
            },
        },
        service2: {
            icon: <i class="text-4xl fa-solid fa-server"></i>,
            heading: "Back End Development",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi corporis, qui commodi molestiae dolorem.",
            service2button: {
                name: "check..",
                link: "/check2",
            },
        },
        service3: {
            icon: <i class="text-4xl fa-solid fa-mobile"></i>,
            heading: "API Development",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi corporis, qui commodi molestiae dolorem.",
            service3button: {
                name: "check..",
                link: "/check3",
            },
        },
    })
    return (
        <>
            <div className="main-container py-10">
                <h1 className="text-3xl font-bold text-center underline ">My Skills</h1>
                <div className="service-container flex mt-12 space-x-5 px-5">

                    <div className="cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl service-1 space-y-3">
                        {data.service1.icon}
                        <h1 className="text-2xl ">{data.service1.heading}</h1>
                        <p>{data.service1.desc}</p>
                        <button className="px-3 py-1 bg-orange-500 rounded-full shadow-lg">{data.service1.service1button.name}</button>
                    </div>

                    <div className="cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl service-2 space-y-3">
                        {data.service2.icon}
                        <h1 className="text-2xl ">{data.service2.heading}</h1>
                        <p>{data.service2.desc}</p>
                        <button className="px-3 py-1 bg-orange-500 rounded-full shadow-lg">{data.service2.service2button.name}</button>
                    </div>

                    <div className="cursor-pointer hover:bg-gray-200 bg-slate-100 p-5 text-center shadow-lg rounded-xl service-3 space-y-3">
                        {data.service3.icon}
                        <h1 className="text-2xl ">{data.service3.heading}</h1>
                        <p>{data.service3.desc}</p>
                        <button className="px-3 py-1 bg-orange-500 rounded-full shadow-lg">{data.service3.service3button.name}</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Service;