import Form from "../components/Form"

const Auth = ()=> {
        return (
                <section className="login-section flex flex-row h-screen">
                        <div className="title-container bg-black text-white grid place-content-center basis-2/5">
                                <h1 className="text-6xl font-extrabold">Board.</h1>
                        </div>
                        <Form />
                </section>
        ); 
}

export default Auth;