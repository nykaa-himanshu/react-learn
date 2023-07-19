
import Button from './Button';
import Detail from './shared/Detail';
import React from 'react';

import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
const UserContext = createContext()

function Home() {
    const [user, setUser] = useState("Jesse Hall");

    const [fname, setFname] = React.useState('Temp');

    const [myArr, setMyArr] = React.useState([
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
    ]);


    React.useEffect(()=> {

        console.log(fname);

        return () => {
            console.log('unmount')
        };

    },[]);




    return (
        <>
            <input value={fname} onChange={(e)=> setFname(e.target.value)} />
            {fname}
            {user}
            <UserContext.Provider value={user}>
            <Detail detailArr={myArr} />
            </UserContext.Provider>
            {/* Home */}
            {/* <Button abc={temp}></Button>
            <Button abc={temp1}></Button> */}
        </>
    )
}

export default Home;