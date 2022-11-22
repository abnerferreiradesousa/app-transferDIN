import {useRouter} from 'next/router';
import Form from '../components/Form';
import {register} from '../requests';

export default function Register() {
	const router = useRouter();

	const handleClick = async (name: string, password: string) => {
		const userCreated = await register(name, password);
		if (userCreated) {
			void router.push('/Login');
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
