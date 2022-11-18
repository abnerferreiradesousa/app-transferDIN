import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Link href="/Login">Login</Link>
      <Link href="/Register">Registrar-se</Link>
    </>
  )
}
