import { AxiosError } from 'axios';
import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import BasicTable from '../components/BasicTable';
import Header from '../components/Header';
import {FilterInfo, type ITransactionSerial} from '../interfaces';
import {selectUser, setAccount} from '../redux/slices/userSlice';
import {
	fetchByDate,
	fetchTransactions,
	fetchTransactionsByCashIn,
	fetchTransactionsByCashOut,
	getBalance,
	transfer,
} from '../requests';
import styles from '../styles/home.module.scss';

interface TransactionProps {
	transactions: ITransactionSerial[];
}

export default function Main() {
	const [value, setValue] = useState('');
	const [recieverName, setRecieverName] = useState('');
	const [wasTransfered, setWasTransfered] = useState(0);
	const [dataStart, setDataStart] = useState<string>("");
	const [dataEnd, setDataEnd] = useState<string>("");
	const [transactions, setTransactions] = useState<ITransactionSerial[]>([]);
	const [transfersBackup, setTransfersBackup] = useState<ITransactionSerial[]>([]);
	const {account, username, token} = useSelector(selectUser);
	const dispatch = useDispatch();
	const [sendIsSelected, setSendIsSelected] = useState(false);
	const [recieveIsSelected, setRecieveIsSelected] = useState(false);

	const fetchCashIn = async (dates: FilterInfo) => {
		const transfers = await fetchTransactionsByCashIn(token, dates);
		setTransactions(transfers);
	};

	const fetchCashOut = async (dates: FilterInfo) => {
		const transfers = await fetchTransactionsByCashOut(token, dates);
		setTransactions(transfers);
	};

	const handleTransfer = async () => {
		if (value !== '' && recieverName !== '') {
			try {
				const transaction = await transfer(token, {
					value,
					usernameCredited: recieverName,
				});
				if (transaction !== null) {
					setWasTransfered(wasTransfered + 1);
					alert('Transaferência concluída!');
					setValue('');
					setRecieverName('');
				}
			} catch (err: any) {
				alert(err.response.data.message)
			}
		} else {
			alert('Preencha os campos de transferência!');
		}
	};


	const handleFilterDate = async () => {

		const dates: FilterInfo = {
			dataStart: dataStart ? new Date(dataStart.replaceAll("-", "/"))
			.toLocaleDateString("pt-BR") : new Date(1950, 7, 6).toLocaleDateString(),
			dataEnd: dataEnd ? new Date(dataEnd.replaceAll("-", "/"))
			.toLocaleDateString("pt-BR") : new Date().toLocaleDateString(),
		};
		// Filtro por data.
		if(!sendIsSelected && !recieveIsSelected || sendIsSelected && recieveIsSelected) {
			const res = await fetchByDate(token, dates);
			setTransactions(res);
		}
		// Filtro por cashout e/ou data.
		if(sendIsSelected) {
			await fetchCashOut(dates);
		}
		// Filtro por cashin e/ou data.
		if(recieveIsSelected) {
			await fetchCashIn(dates);
		}
	}


	useEffect(() => {
		const fetch = async () => {
			try {
				const data = await fetchTransactions(token);
				const account = await getBalance(token);
				dispatch(setAccount(account));
				setTransactions(data);
				setTransfersBackup(data);
			} catch (err) {
				console.log(err);
			}
		};

		void fetch();
	}, [token, wasTransfered]);

	return (
		<>
			<Header
				balance={account?.balance}
				username={username}
			/>
			<section className={styles.transfer}>
				<h2>Realizar Transferência</h2>
				<label htmlFor='reciever'>
                    Nome do destinatário:
					<input
						type='text'
						id='reciever'
						placeholder='Agente P'
						value={recieverName}
						onChange={(e) => setRecieverName(e.target.value)}
					/>
				</label>
				<label htmlFor='value'>
                    Valor da transferência:
					<input
						type='text'
						id='value'
						placeholder='100'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</label>
				<button
					type='button'
					onClick={handleTransfer}
					className={styles.button}
				>Transferir</button>
			</section>
			<section className={styles.transfer}>
				<h2>Histórico</h2>
				<section className={styles.filter}>
					<h3>Filtros: </h3>
					<section>

						<label htmlFor=''>
                        Data inicial:
							<input
								type='date'
								name='startDate'
								onChange={(e) => setDataStart(e.target.value)}
								className={styles.input_date}
							/>
						</label>
						<label htmlFor=''>
                        Data final:
							<input
								type='date'
								name='endDate'
								onChange={(e) => setDataEnd(e.target.value)}
								className={styles.input_date} 
							/>
						</label>
						<label htmlFor="">
							<input
								type='checkbox'
								onClick={() => setSendIsSelected(!sendIsSelected)}
							/>Recebidas
						</label>
						<label htmlFor="">
							<input
								type='checkbox'
								onClick={() => setRecieveIsSelected(!recieveIsSelected)}
								/>
								Enviadas
						</label>
						<button
							type='button'
							onClick={handleFilterDate}
							className={styles.button}
						>Filtrar</button>
					</section>
				</section>
				<br />
				<BasicTable rows={transactions} />
			</section>
		</>
	);
}
