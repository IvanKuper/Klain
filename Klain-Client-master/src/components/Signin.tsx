import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { signin } from "../services/userService";
import { User } from "../interfaces/User";
import { errorMsg, successMsg } from "../services/feedbackService";

interface SigninProps {}

const Signin: FunctionComponent<SigninProps> = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Email is Required")
        .min(6)
        .max(1024)
        .email(),
      password: yup.string().required("Password is Required").min(8).max(1024),
    }),
    onSubmit: (values: User) => {
      signin(values)
        .then((result) => {
          sessionStorage.setItem("token", result.data.token);
          successMsg("You Signed in Successfully!");
          navigate("/profile");
        })
        .catch((err) => {
          errorMsg("Something went Wrong, Try Agian");
        });
    },
  });
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* LEFT DIV */}
          <div className="leftDiv col-lg-6 col-sm-12">
            <img className="login" src="login.png" alt="" />
          </div>
          {/* RIGHT DIV */}
          <div className="rightDiv col-lg-6">
            <Link className="center" to="/">
              <img className="big-logo mx-auto mb-5" src="logo.png" alt="" />
            </Link>
            <h1 className="text-center"></h1>

            {/* DEMO USER ALERT */}
            {/* <div
              className="alert alert-success hidden mt-4 w-75 mx-auto"
              role="alert"
            >
              <div className="text-center">
                <div className="fw-bold">
                  <i className="fa-solid fa-circle-exclamation"></i> Demo Login
                </div>
                <div>Email: demo@bizcards-app.com | Password: adminadmin</div>
              </div>
            </div> */}
            {/* FORM */}
            <form onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-3 w-75 mx-auto">
                <input
                  id="email"
                  type="email"
                  className="form-control "
                  placeholder="Email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-danger mt-2">
                    <i className="fa-solid fa-circle-exclamation mx-1"></i>
                    {formik.errors.email}
                  </p>
                ) : null}
                <label htmlFor="floatingInput">???????? ????????????????</label>
              </div>
              <div className="form-floating mb-3 w-75 mx-auto">
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-danger mt-2">
                    <i className="fa-solid fa-circle-exclamation mx-1"></i>
                    {formik.errors.password}
                  </p>
                ) : null}
                <label htmlFor="floatingPassword">??????????</label>
              </div>
              <div className="button mx-auto">
                <button
                  disabled={!(formik.isValid && formik.dirty)}
                  type="submit"
                  className="btn btn-dark w-75  mt-1"
                >
                  ??????????
                </button>
              </div>

              <p className="text-center mt-4">
                ?????????? ???????
                <Link className="link" to="/signup">
                  ?????? ?????? ????????????
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
