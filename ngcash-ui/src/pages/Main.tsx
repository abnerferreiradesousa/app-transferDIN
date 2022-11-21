import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import BasicTable from "../components/BasicTable";
import Header from "../components/Header";
import { ITransactionSerial } from "../interfaces";
import { selectUser, setAccount } from '../redux/slices/userSlice'
import {
    fetchTransactions,
    fetchTransactionsByCashIn,
    fetchTransactionsByCashOut,
    getBalance,
    transfer 
} from "../requests";
import styles from '../../styles/home.module.scss'


interface TransactionProps {
    transactions: ITransactionSerial[]
}

export default function Main() {
    const [value, setValue] = useState("");
    const [recieverName, setRecieverName] = useState("");
    const [wasTransfered, setWasTransfered] = useState(0);
    const [selected, setSelected] = useState(false);
    const [transactions, setTransactions] = useState<ITransactionSerial[]>([]);
    const [transfersBackup, setTransfersBackup] = useState<ITransactionSerial[]>([]);
    const { account, username, token } = useSelector(selectUser);
    const dispatch = useDispatch();

    const fetchCashIn = async () => {
        const transfers = await fetchTransactionsByCashIn(token);
        setTransactions(transfers)
    }

    const fetchCashOut = async () => {
        const transfers = await fetchTransactionsByCashOut(token);
        setTransactions(transfers)
    }

    const handleTransfer = async () => {
        if(value != "" || recieverName != "") {
            const transaction = await transfer(token, { 
                value, 
                usernameCredited: recieverName
            });
            if(transaction !== null) {
                setWasTransfered(wasTransfered + 1)
                alert("Transaferência concluída!")
                setValue("")
                setRecieverName("")
            }
        } else {
            alert("Preencha os campos de transferência!")
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
                        value={recieverName}
                        onChange={(e) => setRecieverName(e.target.value)}
                    />
                </label>
                <label htmlFor="value">
                    Valor da transferência:
                    <input
                        type="text"
                        id="value"
                        value={value}
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
                        className={selected === true ? styles.filter_button_actived : ""}
                    >Recebidas</button>
                    <button
                        type="button"
                        onClick={fetchCashOut}
                        className={selected === true ? styles.filter_button_actived : ""}
                    >Enviadas</button>
                    </section>
                </section>
                <br />
                <BasicTable rows={transactions} />
            </section>
        </>
    )
}