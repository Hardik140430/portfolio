import { useState } from 'react';
import AboutImage from '../assets/about_img.jpg';
const About = () => {
    const [data,setData]  = useState({
        image:AboutImage ,
        title:"Java Full Stack Developer",
        desc1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptas non provident.",
        desc2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis debitis itaque amet quos nisi suscipit accusamus quisquam quae, repellat aliquam consequatur corrupti? Suscipit.",        
        actionButton:{
            title:"Read More..",
            link: "/readmore",
        }
    })
    return (
        <>
            <div className="main-container bg-gray-100 py-16">
                <h1 className="text-3xl pb-16 underline font-bold text-center">About Me</h1>
                <div className="main-box-conatiner flex items-center">
                    <div className='w-full flex justify-center'>

                        <img src={data.image} className=" rounded-full shadow-lg w-80 h-fit" alt="hardik harsora" />

                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='space-y-5 w-2/3'>
                            <h1 className='text-4xl font-semibold'>{data.title}</h1>
                            <p>{data.desc1}</p>
                            <p>{data.desc2}</p>
                            <button className='bg-orange-500 shadow-lg px-3 py-1 text-1xl rounded-full'>{data.actionButton.title}</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About;