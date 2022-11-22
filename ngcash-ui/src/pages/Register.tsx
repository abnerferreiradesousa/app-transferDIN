import {useRouter} from 'next/router';
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { setUser } from '../redux/slices/userSlice';
import {register} from '../requests';

export default function Register() {
	const router = useRouter();
	const dispatch = useDispatch();

	const handleClick = async (name: string, password: string) => {
		const pattern = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$/;
		if(name.length < 3) {
			alert("Username deve conter no mínimo 3 caracteres!")
		} 
		if(!password.match(pattern)) {
			alert("Senha deve conter no mínimo 8 caracteres, 1 letra maiúscula e 1 letra minúscula!")
		} else {
			const userCreated = await register(name, password);
			if (userCreated) {
				localStorage.setItem('token', userCreated.token);
				dispatch(setUser(userCreated))
				void router.push('/Main');
			}
		}
	};

	return (
		<Form
			title='REGISTRE-SE'
			handleClick={handleClick}
			pathRoute='Login'
			linkTitle='Login'
		/>
	);
}
