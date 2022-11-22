import { FunctionComponent } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ContactsProps {}

const Contacts: FunctionComponent<ContactsProps> = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center mt-5 mb-4">
        צור קשר
        <br />
        <br />
        <i className="socials fab fa-facebook fa-2x px-2"></i>
        <i className="socials fab fa-instagram fa-2x px-2"></i>
        <i className="socials fab fa-twitter fa-2x px-2"></i>
        <i className="socials fas fa-envelope fa-2x px-2"></i>
      </h1>

      <div className="container mt-5">
        {/* <h2 className="mb-3">React Contact Form Component Example</h2> */}
        <form>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              שם
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              אימייל
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              הודעה
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger w-100" type="submit">
            שלח
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
