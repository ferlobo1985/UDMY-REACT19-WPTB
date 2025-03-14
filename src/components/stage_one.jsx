import { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from "react-bootstrap";

import { MyContext } from '../context'

const Stage1 = () => {
    const textInput = useRef();
    const context = useContext(MyContext);
    
    const handleSubmit = (e) => {

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

            </Form>
        </>
    )
}

export default Stage1;