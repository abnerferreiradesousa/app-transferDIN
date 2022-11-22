import {useRouter} from 'next/router';
import {useDispatch} from 'react-redux';
import Form from '../components/Form';
import {type IUserToken} from '../interfaces';
import {setUser} from '../redux/slices/userSlice';
import {login} from '../requests';

export default function Login() {
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
			try {
				const data: IUserToken | void = await login(name, password);
				if (data) {
					localStorage.setItem('token', data.token);
					dispatch(setUser(data));
					void router.push('/Main');
				}
			} catch(err:any) {
				alert(err)
			}
		}
	};

	return (
		<Form
			title='LOGIN'
			handleClick={handleClick}
			pathRoute='Register'
			linkTitle='Registre-se'
		/>
	);
}

