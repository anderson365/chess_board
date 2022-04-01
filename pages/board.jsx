import styles from "./board.module.css"
import Board from "../components/Board"

export default function chess_board(){

    return <div className={styles.background}>
        <h1 className={styles.title}>Chess Board</h1>
        <Board rows={8} cols={8}></Board>
    </div>
}