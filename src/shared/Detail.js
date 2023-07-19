import Button from '../Button';
import { useState, createContext, useContext } from "react";

function Detail(props) {
    const UserContext = createContext();
    const user = useContext(UserContext);
    console.log('user', user)
    console.log('props', props.detailArr);

    return(
        <>
            This is Student Details : 
           <div>
            {
                props.detailArr.map(elem=> {
                    return (<div>
                        Name: {elem.studenName} <br/>
                        Class: {elem.studenClass} <br/>
                        Section: {elem.studenSection}
                    </div>)
                })
            }
           </div>
        </>
    )
}

export default Detail;