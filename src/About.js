import Detail from './shared/Detail';
import { useState, createContext, useContext } from "react";

function About() {


    let myArr = [
        {
         studenName: "jack",
         studenClass: 6,
         studenSection: "a"
        },
        {
         studenName: "tom",
         studenClass: 6,
         studenSection: "a"
        },
        {
         studenName: "tom 1",
         studenClass: 6,
         studenSection: "a"
        },
        {
         studenName: "tom 2",
         studenClass: 6,
         studenSection: "a"
        }
    ];

    // const [val, setVal ]= useState(1);
    // https://dummy.restapiexample.com/api/v1/employees

    return (
        <>
            <br />
            <h1>
                About

                <Detail detailArr={myArr} />
            </h1>
        </>
    )
}

export default About;