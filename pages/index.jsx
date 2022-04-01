import styles from "../styles/boardPage.module.css"
import Row from "../components/Row"

export default function chess_board(){

    return <div className={styles.background}>
        <h1 className={styles.title}>Chess Board with Next.js</h1>
        <Row></Row>
        <Row even></Row>
        <Row></Row>
        <Row even></Row>
        <Row></Row>
        <Row even></Row>
        <Row></Row>
        <Row even></Row>
    
    </div>
}