import LoginForm from "../../molecules/auth/LoginForm";


const LoginLayout = () => {

    return (
        <>
            <div className="flex flex-col w-full h-[100vh] items-center justify-center bg-revalit-gradient">
                <img className="w-[275px] mb-4" src="assets/revalit_hero.png" alt="revalit_regis_logo" />
                <LoginForm />
            </div>
        </>
    );

}

export default LoginLayout;