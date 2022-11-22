import { FunctionComponent, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { successMsg } from "../services/feedbackService";
import { getBiz, getUser } from "../services/userService";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const navigate = useNavigate();
  // Removing Roken when Log Out
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    successMsg("Logged Out Successfully");
    navigate("/");
  };

  // Checks if User Is Business
  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    setUser(getBiz());
  }, []);

  const isLogged = sessionStorage.getItem("token");

  return (
    <>
      {/* Nav Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a
            className="link"
            target="_blank"
            href="https://wa.me/+972545832537"
          >
            <i className="fa-brands fa-whatsapp fa-3x m-1"></i>
          </a>
          <div className="navbar-brand navbar-title m-1">
            <a href="/profile">
              <img className="logo" src="/logo.png" alt="" />
              <span className="bizName text-white">Klain</span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="row">
            <div
              className="offcanvas offcanvas-end"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  תפריט
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/contacts">
                      <span>צור קשר</span>
                    </NavLink>
                  </li>
                  {/* Business Visibile Links */}
                  {user ? (
                    <>
                      <li className="nav-item ">
                        <NavLink className="nav-link text-white" to="/new-card">
                          <span>הוספת איש מקצוע</span>
                        </NavLink>
                      </li>

                      <li className="nav-item ">
                        <NavLink className="nav-link text-white" to="/my-cards">
                          <span>כרטיס עסק שלי</span>
                        </NavLink>
                      </li>
                    </>
                  ) : null}
                  {/* LogeedIn Visible Links */}
                  {isLogged ? (
                    <>
                      <li className="nav-item ">
                        <NavLink className="nav-link text-white" to="/info">
                          <span>מידע ועדכונים</span>
                        </NavLink>
                      </li>
                      <li className="nav-item ">
                        <NavLink className="nav-link text-white" to="/simple">
                          <span>מושגים לדיור בשפה פשוטה</span>
                        </NavLink>
                      </li>
                      <li className="nav-item ">
                        <NavLink
                          className="nav-link text-white"
                          to="/professionals"
                        >
                          <span>כל אנשי המקצוע</span>
                        </NavLink>
                      </li>
                      <li className="nav-item ">
                        <NavLink className="nav-link text-white" to="/check">
                          <span>בדיקת היתכנות</span>
                        </NavLink>
                      </li>
                      <li className="nav-item ">
                        <NavLink className="nav-link text-white" to="/start">
                          <span>ממה מתחילים?</span>
                        </NavLink>
                      </li>
                      <li className="nav-item ">
                        <NavLink className="nav-link text-white" to="/about">
                          <span>מי אנחנו</span>
                        </NavLink>
                      </li>

                      <li className="nav-item ">
                        <NavLink className="nav-link text-white" to="/profile">
                          <span>אזור אישי</span>
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <button
                          onClick={handleLogout}
                          className="btn btn-dark mt-1"
                        >
                          <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                          יציאה
                        </button>
                      </li>
                    </>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
