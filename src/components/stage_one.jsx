import { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from "react-bootstrap";

import { MyContext } from '../context'

const Stage1 = () => {
    const textInput = useRef();
    const context = useContext(MyContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;

        /// VALIDATION
        context.addPlayer(value);
        textInput.current.value = '';
        console.log(value)
    } 

    return(
        <>
            <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Add player name"
                        name="player"
                        ref={textInput}
                    />
                </Form.Group>

                {/* ERRORS */}

                <Button className="miami" variant="primary" type="submit">
                    Add Player
                </Button>
                { context.players && context.players.length > 0 ?
                <>
                    <hr/>
                    <div>
                        <ul className="list-group">
                            { context.players.map((player,idx)=>(
                                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action">
                                    {player}
                                    <span
                                        className="badge badge-danger"
                                    >
                                        X
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div
                        className="action_button"
                    >
                        NEXT
                    </div>
                </>
                :null}
            </Form>
        </>
    )
}

export default Stage1;