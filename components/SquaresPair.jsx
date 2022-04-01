import styles from "../styles/SquaresPair.module.css"

export default function SquaresPair(props){

    return <>

        <div style={{backgroundColor: props.even ? "#000": "#FFF"}} className={styles.square}></div>
        <div style={{backgroundColor: props.even ? "#FFF": "#000"}} className={styles.square}></div>

    </>

}