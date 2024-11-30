import { motion } from "motion/react"

const Navbar = () => {

    const loginBtnHandler = () => {
        // Go to /login
        window.location.href = "/login";
    }

    const registerBtnHandler = () => {
        // Go to /register
        window.location.href = "/register";
    }

    return (
        <section className="bg-secondaryDark w-full h-[75px] flex flex-col justify-center px-16 py-12">
            <div className="flex flex-row w-full">
                {/* left section */}
                <div className="flex flex-row w-1/2 items-center justify-between">
                    <img src="assets/revalit_nav.png" alt="revalit_navbar_logo"  />
                    <nav className="text-white flex gap-6 text-lg">
                        <a className="hover:text-laravel font-bold text-laravel" href="#">Features</a>
                        <a className="hover:text-laravel" href="#">Documentation</a>
                        <a className="hover:text-laravel" href="#">History</a>
                    </nav>
                </div>

                {/* Right section */}
                <div className="flex flex-row w-1/2 items-center justify-end gap-4">
                    <motion.button 
                        whileTap={{ scale: 0.9, rotate: 3 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={loginBtnHandler}
                        className="border-2 border-react text-react px-8 py-2 rounded-lg font-bold"                        
                    >
                       Login
                    </motion.button>
                    <motion.button 
                        whileTap={{ scale: 0.9, rotate: 3 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={registerBtnHandler}
                        className="bg-react text-primaryDark px-8 py-2 rounded-lg font-bold"                
                    >
                       Register
                    </motion.button>
                </div>
            </div> 
        </section>
    );

}

export default Navbar;