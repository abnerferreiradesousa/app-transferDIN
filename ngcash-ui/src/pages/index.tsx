import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
// import { decrement, selectValue,incrementByAmount } from '../redux/slices/userSlice'

export default function Home() {
  // const count = useSelector(selectValue)
  // const dispatch = useDispatch()

  return (
    <>
      <Link href="/Login">Login</Link>
      <Link href="/Register">Registrar-se</Link>
      {/* <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(26))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div> */}
    </>
  )
}
