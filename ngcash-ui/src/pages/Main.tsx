import { clear } from "console";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import BasicTable from "../components/BasicTable";
import Header from "../components/Header";
import { ITransactionSerial, Transaction } from "../interfaces";
import { selectUser } from '../redux/slices/userSlice'
import {
    fetchTransactions,
    fetchTransactionsByCashIn,
    fetchTransactionsByCashOut,
    transfer 
} from "../requests";
import styles from '../../styles/home.module.scss'


interface TransactionProps {
    transactions: Transaction[]
}

export default function Main() {
    const [value, setValue] = useState("");
    const [recieverName, setRecieverName] = useState("");
    const [wasTransfered, setWasTransfered] = useState(false);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [transfersBackup, setTransfersBackup] = useState<Transaction[]>([]);
    const { account, username, token } = useSelector(selectUser);

    const fetchCashIn = async () => {
        const transfers = await fetchTransactionsByCashIn(token);
        console.log(transfers)
        setTransactions(transfers)
    }

    const fetchCashOut = async () => {
        const transfers = await fetchTransactionsByCashOut(token);
        console.log(transfers)
        setTransactions(transfers)
    }

    const handleTransfer = async () => {
        const transaction = await transfer(token, { 
            value, 
            usernameCredited: recieverName
        });
        if(transaction) {
            setWasTransfered(true)
        }
    }

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await fetchTransactions(token);
                setTransactions(data);
                setTransfersBackup(data);
            } catch(err) {
                console.log(err)
            }
        }
        fetch()
    }, [token, wasTransfered])

    return (
        <>
            <Header
                balance={account?.balance}
                username={username}
            />
            <section className={styles.transfer}>
                <h2>Realizar Transferência</h2>
                <label htmlFor="reciever">
                    Nome do destinatário:
                    <input
                        type="text"
                        id="reciever"
                        onChange={(e) => setRecieverName(e.target.value)}
                    />
                </label>
                <label htmlFor="value">
                    Valor da transferência:
                    <input
                        type="text"
                        id="value"
                        onChange={(e) => setValue(e.target.value)}
                    />
                </label>
                <button
                    type="button"
                    onClick={handleTransfer}
                    className={styles.button}
                >Transferir</button>
            </section>
            <section className={styles.transfer}>
                <h2>Histórico</h2>
                <section className={styles.filter}>
                    <h3>Filtros: </h3>
                    <section>

                    <label htmlFor="">
                        Data inicial:
                        <input
                            type="date"
                            name="startDate"
                            className={styles.input_date}
                        />
                    </label>
                    <label htmlFor="">
                        Data final:
                        <input
                            type="date"
                            name="endDate"
                            className={styles.input_date} 
                        />
                    </label>
                    <button
                        type="button"
                        onClick={fetchCashIn}
                        className={styles.button}
                    >Recebidas</button>
                    <button
                        type="button"
                        onClick={fetchCashOut}
                        className={styles.button}
                    >Enviadas</button>
                    </section>
                </section>
                <br />
                <BasicTable rows={transactions} />
            </section>
        </>
    )
}