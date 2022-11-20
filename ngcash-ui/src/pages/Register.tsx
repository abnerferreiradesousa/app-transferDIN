import { useRouter } from "next/router";
import Form from "../components/Form";
import { register } from "../requests";
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slices/userSlice'


export default function Register() {
    const router = useRouter();

    const handleClick = async (name: string, password: string) => {
        const userCreated = await register(name, password);
        if(userCreated) {
            router.push('/Login');  
        }
    }

    return (
        <Form
            title='Registre-se'
            handleClick={handleClick}
            pathRoute="Login"
            linkTitle="Login"
        />
    )
}