import { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = (props) => {
    const [stage,setStage] = useState(1);
    const [players,setPlayers] = useState([]);
    const [result,setResult] = useState('')

    const addPlayerHandler = (name) => {
        console.log(players)
        setPlayers(prevState=>([
            ...prevState,
            name
        ]))
    }


    const removePlayerHandler = (idx) => {
        let newArray = [...players];
        newArray.splice(idx,1)
        setPlayers(newArray);
    }


    return(
        <>
            <MyContext.Provider value={{
                // STATE
                stage:stage,
                players:players,
                result:result,
                //METHODS
                addPlayer:addPlayerHandler,
                removePlayer:removePlayerHandler
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

