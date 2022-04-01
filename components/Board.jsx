export default function board(props){
//

    return <>
        <div style={{display: "flex", justifyContent: "center"}}>
        
            <div style={{backgroundColor: props.par ? "#000": "#FFF", width: '70px', height: '70px'}}></div>
            <div style={{backgroundColor: props.par ? "#FFF": "#000", width: '70px', height: '70px'}}></div>

            <div style={{backgroundColor: props.par ? "#000": "#FFF", width: '70px', height: '70px'}}></div>
            <div style={{backgroundColor: props.par ? "#FFF": "#000", width: '70px', height: '70px'}}></div>

            <div style={{backgroundColor: props.par ? "#000": "#FFF", width: '70px', height: '70px'}}></div>
            <div style={{backgroundColor: props.par ? "#FFF": "#000", width: '70px', height: '70px'}}></div>

            <div style={{backgroundColor: props.par ? "#000": "#FFF", width: '70px', height: '70px'}}></div>
            <div style={{backgroundColor: props.par ? "#FFF": "#000", width: '70px', height: '70px'}}></div>

     </div>
    </>

}