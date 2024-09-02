import React, { useState } from 'react';

const MyAccordion = ({ question, answer }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="main-heading">
                <span onClick={() => setShow(!show)}>{show? "➖" : "➕"}</span>
                <h3>{question}</h3>
            </div>
            {
                show && <p className='answers'>{answer}</p>
            }
            
        </>
    );
}

export default MyAccordion;
