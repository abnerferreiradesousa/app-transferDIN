import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Form from "../components/Form";
import { IUserToken } from "../interfaces";
import { setUser } from "../redux/slices/userSlice";
import { login } from "../requests";

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClick = async (name: string, password: string) => {
        const data:IUserToken | void = await login(name, password);
        if(data) {
            localStorage.setItem("token", data.token);
            dispatch(setUser(data))     
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

