const MyExpertise = () => {
    return (
        <>
            <div className="main-expertise-container mt-3">
                <h1 className="text-3xl pb-16 text-center font-bold underline">My Expertise</h1>
                <div className="main-box-container flex py-6 items-center" style={{ background: 'linear-gradient(to right, rgb(234, 204, 143), rgb(231, 251, 187), white, white)' }}>
                    <div className="main-box-container flex justify-center">
                        <div className="w-2/2  text-center space-y-4 ">
                            <h1 className="font-bold text-2xl">I love these technologies </h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus illo consectetur repellat molestiae eveniet ducimus. loerm mimmwec kskemm kmsmcis </p>
                            <button className="rounded-full py-1 shadow-lg bg-orange-500 px-3">Hire me</button>
                        </div>
                    </div>
                    <div className="main-box-cont2 flex justify-center">
                        <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap ">
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">Core Java</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">Spring Boot</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">Spring Framework</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">J2EE</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">HTML/CSS</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">Javascript</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">React</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">MySQL</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">JSP Servlet</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">Kafka</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">Tailwind CSS</p>
                            <p className="bg-gray-300 cursor-pointer w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-400">Angular</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default MyExpertise;