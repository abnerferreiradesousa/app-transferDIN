import Link from 'next/link';
import {useState} from 'react';
import stylesF from '../styles/form.module.scss';
import stylesH from '../styles/home.module.scss';

export type FomrProps = {
	title: string;
	pathRoute: string;
	linkTitle: string;
	handleClick: (name: string, password: string) => void;
};

export default function Form({title, pathRoute, linkTitle, handleClick}: FomrProps) {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<section className={stylesF.form}>
			<form action='' className={stylesF.section_form}>
				<h1>{title}</h1>
				<label htmlFor=''>
                    Username
					<input
						type='text'
						onChange={e => {
							setName(e.target.value);
						}}
						className={stylesH.input_date}
					/>
				</label>
				<label htmlFor=''>
                    Password
					<input
						type='text'
						onChange={e => {
							setPassword(e.target.value);
						}}
						className={stylesH.input_date}
					/>
				</label>
				<button
					type='button'
					onClick={ () => {
						handleClick(name, password);
					} }
					className={stylesH.button}>
					{title}
				</button>
				<Link
					href={`/${pathRoute}`}
					className={stylesH.button}
				>{linkTitle}</Link>
			</form>
		</section>
	);
}
