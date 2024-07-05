import { useState } from "react";

const Header=()=>{

    const [brandName,setBrandName] = useState("Portfolio");
    const [menuLinks,setMenuLinks]=useState([
        {
            title:"Home",
            link:"/home",
            id:1,        
        },
        {
            title:"About",
            link:"/about",
            id:2,
        },
        {
            title:"Skills",
            link:"/skills",
            id:3,
        },
        {
            title:"Testimonials",
            link:"/testimonials",
            id:4,
        },
        {
            title:"Contact",
            link:"/contact",
            id:2,
        }
    ]);

    const [actionBtn,setActionBtn] = useState({
        title:"Hire Me",
        link:"/hire-me",
        })
    return( 
        <>
        <div className=" h-20 border main flex justify-between items-center px-16 bg-gray-300">
        <div className="brandlogo">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>

        <div className="space-x-6">

        {menuLinks.map(link=>(
            <a key={link.id} href={link.link} className="hover:text-orange-500" >
                {link.title}
            </a>
        ))}

        {/* 
        <a href="/about" className="hover:text-orange-500">About</a>
        <a href="/skills" className="hover:text-orange-500">Skills</a>
        <a href="/testimonials" className="hover:text-orange-500">Testimonials</a>
        <a href="/contact" className="hover:text-orange-500">Contact</a> */}

        </div>

        <div className="button">
        <a className="px-4 py-2 bg-orange-500 rounded-full shadow text-1xl" href={actionBtn.link}>{actionBtn.title}</a>
        </div>
        </div>
        </>
    )
};

export default Header;