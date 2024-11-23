import { motion } from "motion/react"

const RegisForm = () => {

    return (
        <>
            <section className="flex flex-col rounded-lg shadow-lg w-[500px] h-fit bg-secondaryDark py-8 px-12">
                <h2 className="font-bold text-center text-white text-3xl mb-6">Sign Up</h2>
                <form className="flex flex-col w-full">
                    <div className="flex flex-col mb-6">
                        <label className="font-semibold mb-4 text-react ">Your Name</label>
                        <input 
                            type="text"
                            name="name" 
                            placeholder="e.g. John Doe" 
                            className="rounded-lg border-2 border-react bg-primaryDark p-2 text-[#00768B] placeholder-[#00768B] 
                            focus:border-react focus:outline-none" 
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="font-semibold mb-2 text-react ">Email</label>
                        <input 
                            type="email"
                            name="email" 
                            placeholder="e.g. johndoe45@mail.com" 
                            className="rounded-lg border-2 border-react bg-primaryDark p-2 text-[#00768B] placeholder-[#00768B] 
                            focus:border-react focus:outline-none" 
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="font-semibold mb-2 text-react ">Password</label>
                        <input 
                            type="password"
                            name="password" 
                            placeholder="Minimum 8 characters" 
                            className="rounded-lg border-2 border-react bg-primaryDark p-2 text-[#00768B] placeholder-[#00768B] 
                            focus:border-react focus:outline-none" 
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="font-semibold mb-2 text-react ">Confirm Password</label>
                        <input 
                            type="password"
                            name="confirm_password" 
                            placeholder="Type your password again" 
                            className="rounded-lg border-2 border-react bg-primaryDark p-2 text-[#00768B] placeholder-[#00768B] 
                            focus:border-react focus:outline-none" 
                        />
                    </div>

                    {/* Button for Submit */}
                    <motion.button
                        whileTap={{ scale: 0.9}}
                        whileHover={{ scale: 1.1 }} 
                        type="submit" 
                        className="bg-react my-2 font-bold text-primaryDark  py-2 rounded-lg focus:outline-none"
                    >
                        Submit
                    </motion.button>
                    <p className="text-white text-center mt-4 mb-10">Already have an account? <a href="#" className="text-laravel font-bold hover:underline">Sign In</a></p>
                </form>
            </section>
        
        </>
    );

}

export default RegisForm;