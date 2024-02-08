import React, { useState } from 'react';
import './newpop.css';
const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [enrollment, setEnrollment] = useState('');
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const submitForm = () => {
    if (name.trim() !== "" && contact.trim() !== "" && enrollment.trim() !== "" && email.trim() !== "") {
      setShowPopup(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const hidePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <h2 className='header'>Registration Form</h2>
      <form>
        <label htmlFor="name"><b>Full Name</b></label>
        <input type="text" id="name" name="name" required placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="contact"><b>Contact Number</b></label>
        <input type="tel" id="contact" name="contact" required placeholder="Enter your Contact Number" value={contact} onChange={(e) => setContact(e.target.value)} />

        <label htmlFor="enrollment"><b>Enrollment Number</b></label>
        <input type="text" id="enrollment" name="enrollment" required placeholder="Enter your Enrollment Number" value={enrollment} onChange={(e) => setEnrollment(e.target.value)} />

        <label htmlFor="email"><b>Email Address</b></label>
        <input type="email" id="email" name="email" required placeholder="Enter your Email address" value={email} onChange={(e) => setEmail(e.target.value)} />

        <button type="button" onClick={submitForm}>Submit</button>
      </form>

      {showPopup && (
        <div className="popup">
          <p>Registration Successful!! See you there.</p>
          <button onClick={hidePopup}>Close</button>
        </div>
      )}

      {showPopup && <div className="overlay"></div>}
    </div>
  );
};

export default RegistrationForm;
