import RegisForm from "../../molecules/auth/RegisForm";


const RegisLayout = () => {


    return (
        <div className="flex flex-col w-full h-[100vh] items-center justify-center">
            <img className="w-[275px] mb-4" src="assets/revalit_hero.png" alt="revalit_regis_logo" />
            <RegisForm />
        </div>
    );

}

export default RegisLayout;