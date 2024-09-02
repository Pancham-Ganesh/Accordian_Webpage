import React from 'react';
import { questions } from './api';
import "./accordion.css";
import MyAccordion from './MyAccordion';

const Accordion = () => {
    return (
        <>
            <section className="main-div">
                <p>React Interview Questions</p>
                <div className="question-container">
                    {questions.map((curr) => {
                        const { id } = curr;
                        return (
                            <div key={id}>
                                <MyAccordion {...curr} />
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default Accordion;
