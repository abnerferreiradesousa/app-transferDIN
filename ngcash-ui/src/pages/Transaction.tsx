import Link from "next/link";

export default function Transaction() {
    const handleClick = () => localStorage.removeItem("token");

    return (
        <>
            <h1>Transaction</h1>
            <Link href="/" onClick={handleClick}>Log out</Link>
        </>
    )
}