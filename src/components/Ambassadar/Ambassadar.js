import classes from "./Ambassadar.module.css";
import Mobile from "./Mobile.svg";
import Form from "./Form/Form";

import { useState } from "react";

const Ambassadar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className={classes.ambaSection}>
      <div className={classes.ambassadar}>
        <div className={classes.headingBox}>
          <h3 className={classes.heading}>Karma 22 Ambassadar Program</h3>
          <p className={classes.para}>
            Leaders are born, if one have a strong spark in their heart. Here
            KARMA' 22 brings an opportunity to represent the college through "
            CALL FOR CAMPUS AMBASSADOR ". Initiatives took by some are followed
            by others. Make it happen without wasting your time !
          </p>

          <button className={classes.btn} onClick={() => setOpen(!open)}>
            Register Now !
          </button>
        </div>
        <div className={classes.imgBox}>
          <img className={classes.img} src={Mobile} alt="Ambassador" />
        </div>
      </div>

      {open && <Form open={open} onClick={() => setOpen(!open)} />}
    </section>
  );
};

export default Ambassadar;
  