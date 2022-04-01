import styles from "../styles/index.module.css"
import Board from "../components/Board"

export default function chess_board(){

    return <>
        <div className={styles.background}>
            <h1 className={styles.title}>Chess Board with Next.js</h1>
            <Board></Board>
        </div>
    </>
}