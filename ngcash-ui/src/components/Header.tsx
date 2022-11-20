import Link from "next/link";
import { useState } from "react"

export interface HeaderProps {
    username: string
    balance?: number
}

export default function Header({ username, balance}: HeaderProps) {
    const handleClick = () => localStorage.removeItem("token");

    return (
        <>
            <Link href="/" onClick={handleClick}>Log out</Link>
            <h1>Transações</h1>
            <p>Sr. {username} </p>
            <p>Saldo em conta: R$ {balance?.toFixed(2)}</p>
        </>
    )
}