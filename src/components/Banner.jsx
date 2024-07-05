import { useRef } from "react";
import BannerImage from "../assets/Banner.jpg";
import Typed from "typed.js";
import { useEffect } from "react";
const Banner = () => {

    const el = useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: ["Software Developer", "Front End Developer", "Back End Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
          });
      
          // Destropying
          return () => {
            typed.destroy();
          };
    })

    return (
        <>
            <div className="main-container flex pb-10 pt-10" style={{ background: 'linear-gradient(#ff310026, rgb(192 192 43 / 64%))' }}>
                <div className="w-full flex justify-center items-center">
                    <div className="w-2/3 space-y-2">
                        <h3 className="text-2xl font-semibold">Hi, I am  </h3>
                        <h1 className=" mt-2 text-4xl font-bold" >Hardik.k.Harsora</h1>
                        <h2 className=" mt-2 text-xl font-semibold">I am a <span ref={el}></span></h2>
                        <p className="mt-1">Lorem. Sapiente laboriosam magnam in! Soluta inventore ipsam perferendis hic, impedit nulla in porro velit maiores amet officia error omnis dicta fugiat quaerat..</p>
                        <div className="icons-container space-x-5 flex mt-2">
                            <a className=" cursor-pointer px-2 w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center">
                                <i class="fa-brands text-2xl fa-instagram text-white"></i>
                            </a>
                            <a className=" cursor-pointer  px-2 w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center">
                                <i class="fa-brands text-2xl fa-linkedin text-white"></i>
                            </a>
                            <a className=" cursor-pointer px-2 w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center">
                                <i class="fa-brands text-2xl fa-facebook text-white"></i>
                            </a>
                            <a className=" cursor-pointer px-2 w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center">
                                <i class="fa-brands text-2xl fa-github text-white"></i>
                            </a>
                        </div>
                        <br />
                        <a href="/contact" className="px-4 py-2 bg-orange-500 rounded-full shadow-lg text-white">Contact Me</a>
                    </div>

                </div>
                <div className="w-full flex justify-center">
                    <div className="w-72">
                        <img src={BannerImage} className="rounded-full shadow-lg w-fit h-fit" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;