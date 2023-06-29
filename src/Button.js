

const Button = (props) => {

    console.log(props.abc)

    return(
        <><br/>
        {props.abc === 'submit' ?
        <button type="" style={{background:'red'}}>{props.abc}</button> :
        <button type="" style={{background:'blue'}}>{props.abc}</button>}<br/>
        </>
    )
}

export default Button;
