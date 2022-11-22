import Link from 'next/link';
import stylesF from '../styles/form.module.scss';
import stylesH from '../styles/home.module.scss';

export default function Home() {
	return (
		<>
			<section className={stylesF.options_home}>
				<Link href="/Login" className={stylesH.button}>Login</Link>
				<Link href="/Register" className={stylesH.button}>Registrar-se</Link>
			</section>
		</>
	);
}
