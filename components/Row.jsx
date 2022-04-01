import SquaresPair from "./SquaresPair"

export default function board(props){

    return <>
        <div style={{display: "flex", justifyContent: "center"}}>
            <SquaresPair even={props.even}></SquaresPair>
            <SquaresPair even={props.even}></SquaresPair>
            <SquaresPair even={props.even}></SquaresPair>
            <SquaresPair even={props.even}></SquaresPair>

        </div>
    </>

}