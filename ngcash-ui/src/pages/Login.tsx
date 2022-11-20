import { useRouter } from "next/router";
import Form from "../components/Form";
import type { Token } from "../interfaces";
import { login } from "../requests";

export default function Login() {
    const router = useRouter();

    const handleClick = async (name: string, password: string) => {
        const data:Token | void = await login(name, password);
        if(data) {
            localStorage.setItem("token", data.token);
            router.push('/Main');        
        }
    }

    return (
        <Form
            title='Login'
            handleClick={handleClick}
            pathRoute="Register"
            linkTitle="Register"
        />
    )
}

