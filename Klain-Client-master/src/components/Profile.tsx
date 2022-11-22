import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { errorMsg } from "../services/feedbackService";
import { getUser } from "../services/userService";
import Timeline from "../Timeline";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const [userProfile, setUserProfile] = useState<any>({
    id: "",
    name: "",
    email: "",
    roles: ["user"],
    mitham: "",
    gush: "",
    helka: "",
  });
  useEffect(() => {
    getUser()
      .then((result) => {
        setUserProfile(result.data);
      })
      .catch((err) => {
        errorMsg("Something went Wrong, Try Agian");
      });
  }, []);
  return (
    <>
      <Navbar />

      <h1 className="text-center mt-5 mb-4">
        ברוכים הבאים: {userProfile.name}
      </h1>
      <h5 className="text-center mt-5 mb-4">שם המתחם: {userProfile.mitham}</h5>
      <h5 className="text-center mt-5 mb-4">גוש: {userProfile.gush}</h5>
      <h5 className="text-center mt-5 mb-4">חלקה: {userProfile.helka}</h5>
      <br />
      <Timeline />
      <div className="user-card mt-3">
        <div className="containerDiv card">
          {/* <img
            src="banner.jpg"
            alt="cookies"
            className="hero-image img-fluid"
          /> */}

          <div className="information ">
            {/* <img src="" alt="" className="avatar" /> */}
            {/* <span className="mb-4">Currently Signed In As:</span> */}
            {/* <div className="name mb-3 ">{userProfile.name}</div> */}
            <div className="mb-2 mt-2">
              <strong>סוג משתמש: </strong>
              {userProfile.roles ? (
                <span style={{ color: "green" }}>
                  משתמש עסקי <i className="fa-solid fa-check"></i>
                </span>
              ) : (
                <span>משתמש רגיל </span>
              )}
              <div className="d-block m-1 p-1">
                <Link to="/alldocuments">
                  <button className="btn btn-danger m-1">מסמכים לחתימה</button>
                </Link>
                <Link to="/alldocuments">
                  <button className="btn btn-success m-1">
                    מסמכים חתומים + פרוטוקולים
                  </button>
                </Link>
                <Link to="/professionals">
                  <button className="btn btn-dark m-1">בחירת אנשי מקצוע</button>
                </Link>
                <Link to="/professionals">
                  <button className="btn btn-secondary m-1">
                    שאל שאלה את איש המקצוע
                  </button>
                </Link>
                <a href="https://zoom.com" target="_blank">
                  <button className="btn btn-primary m-1">
                    כנסיה לזום + הקלטה
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
