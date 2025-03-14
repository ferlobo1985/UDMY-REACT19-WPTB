import { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = (props) => {
    const [stage,setStage] = useState(1);
    const [players,setPlayer] = useState([]);
    const [result,setResult] = useState('')

    const addPlayerHandler = (name) => {
        console.log(players)
        setPlayer(prevState=>([
            ...prevState,
            name
        ]))
    }


    return(
        <>
            <MyContext.Provider value={{
                // STATE
                stage:stage,
                players:players,
                result:result,
                //METHODS
                addPlayer:addPlayerHandler
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

