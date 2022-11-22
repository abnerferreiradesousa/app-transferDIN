import Link from 'next/link';
import styles from '../styles/home.module.scss';

export type HeaderProps = {
	username: string;
	balance?: number;
};

export default function Header({username, balance}: HeaderProps) {
	const handleClick = () => {
		localStorage.removeItem('token');
	};

	return (
		<section className={styles.header}>
			<h1 className={styles.logo}>
                NG
				<span>CASH</span>
			</h1>
			<nav className={styles.nav}>
				<p>Sr(a). {username}</p>
				<p>Saldo em conta: R$ {balance?.toFixed(2)}</p>
				<div>
					<Link href='/Login' onClick={handleClick}>Logout</Link>

				</div>
			</nav>
		</section>
	);
}

