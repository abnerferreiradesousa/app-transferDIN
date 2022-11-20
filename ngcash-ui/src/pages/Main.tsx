import { clear } from "console";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import BasicTable from "../components/BasicTable";
import Header from "../components/Header";
import { Transaction } from "../interfaces";
import { selectUser } from '../redux/slices/userSlice'
import { fetchTransactions } from "../requests";

interface TransactionProps {
    transactions: Transaction[]
}

export default function Main() {
    const [value, setValue] = useState("");
    const [recieverName, setRecieverName] = useState("");
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const { account, username, token } = useSelector(selectUser);


    useEffect(() => {
        const fetch = async () => {
            try {
                console.log(token)
                const data = await fetchTransactions(token);
                console.log(data)
                setTransactions(data);
            } catch(err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

    return (
        <>
            <Header
                balance={account?.balance}
                username={username}
            />
            <section>
                <h2>Transferir</h2>
                <label htmlFor="reciever">
                    Nome do destinatário:
                    <input
                        type="text"
                        id="reciever"
                        onChange={(e) => setRecieverName(e.target.value)}
                    />
                </label>
                <label htmlFor="value">
                    Valor a ser transferido:
                    <input
                        type="text"
                        id="value"
                        onChange={(e) => setValue(e.target.value)}
                    />
                </label>
            </section>
            <BasicTable rows={transactions} />
        </>
    )
}