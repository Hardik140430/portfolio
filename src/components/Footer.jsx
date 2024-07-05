const Footer =()=>{
    return(
        <>
        <div className="py-5 bg-gray-100 flex justify-between px-40">
            <div>
                <p>Copyright ©2024 Hardik Harsora <span> All Rights Reserved</span> </p>
                
            </div>
            <div className="space-x-5">
                <a href="/about" className="hover:text-orange-400">About</a>
                <a href="/privacy" className="hover:text-orange-400">Privacy Policy</a>
                <a href="/licensing" className="hover:text-orange-400">Licensing</a>
                <a href="/contact" className="hover:text-orange-400">Contact</a>
            </div>
        </div>
        </>
    )
}

export default Footer;