

const HeroSection = () => {

    return (
        <section className="flex flex-col w-full h-[800px] items-center justify-center">
            <img className="w-[500px]" src="assets/revalit_hero.png" alt="revalit_hero_logo" />
            <p className="text-white text-lg w-[800px] text-center font-semibold">
                A ready-to-use monolithic boilerplate that seamlessly integrates 
                <span className="text-react"> ReactJS</span> and <span className="text-laravel">Laravel</span> within a unified development environment.
            </p>
        </section>
    );


}

export default HeroSection;