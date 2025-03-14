import { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = (props) => {
    const [stage,setStage] = useState(1);
    const [players,setPlayer] = useState([]);
    const [result,setResult] = useState('')


    return(
        <>
            <MyContext.Provider value={{
                // STATE
                stage:stage,
                players:players,
                result:result
                //METHODS
            }}>
                {props.children}
            </MyContext.Provider>
        </>
    )
}

export {
    MyContext,
    MyProvider
}

