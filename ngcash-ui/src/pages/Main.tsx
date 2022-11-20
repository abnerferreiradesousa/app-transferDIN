import Link from "next/link";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Transaction } from "../interfaces";
import { selectValue } from '../redux/slices/userSlice'
import { fetchTransactions } from "../requests";

interface TransactionProps {
    transactions: Transaction[] | []
}

export default function Main() {
    const [value, setValue] = useState("");
    const [recieverName, setRecieverName] = useState("");
    const { account, username } = useSelector(selectValue);
    const handleClick = () => localStorage.removeItem("token");

    return (
        <>
            <Link href="/" onClick={handleClick}>Log out</Link>
            <h1>Transações</h1>
            <p>Sr. {username} </p>
            <p>Saldo em conta: {account?.balance}</p>
            <section>
                <h2>Transferências</h2>
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
        </>
    )
}

// export async function getStaticProps() {
//     const transactions = await fetchTransactions();

//     return {
//       props: {
//         transactions,
//       },
//     }
// }