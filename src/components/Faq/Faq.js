import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
  {
    question: "How can i participate in Spectrum'24?",
    answer:
      "All can participate by booking tickets through our portal, and tickets closes on 1 day prior to the event dates (29 feb, 1,2 feb) of Spectrum'24",
  },
  {
    question: "What are the dates of Spectrum'24?",
    answer: "February 29 and march 1,2. Events will happen from 9:00 am to 10:00 pm",
  },
  {
    question: "What is the entry fees for Spectrum'24?",
    answer: "The entry for Spectrum'24 is based on the type of event you are participating in.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  return (
    <section className={classes.faqSection}>
      <div className={classes.heading}>FAQ</div>
      <div className={classes.faq}>
        {questions.map((ques, i) => {
          return (
            <div className={classes.single} onClick={() => toggle(i)}>
              <div className={classes.question}>{ques.question}</div>
              <div
                className={`${
                  clicked === i ? classes.answer : classes.noAnswer
                }`}
              >
                {ques.answer}
              </div>
              <span className={classes.btn}>+</span>
            </div>
          );
        })}

        {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
      </div>
    </section>
  );
};

export default Faq;
