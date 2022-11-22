import { useFormik } from "formik";
import { useState } from "react";
import { formForRole, Role } from "./types";
import { signup } from "../services/userService";
import { User, BusinessUser } from "../interfaces/User";
import { errorMsg, successMsg } from "../services/feedbackService";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const [roleSelected, setRoleSelected] = useState<Role>(Role.RESIDENT);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: formForRole(roleSelected).initialValues,
    validationSchema: formForRole(roleSelected).scheme,
    onSubmit: (values) => {
      console.log({ values });

      const roles = Array.from(new Set(["user", roleSelected]));
      let user: User = {
        ...values,
        roles: roles,
      };
      console.log({ user });

      signup(user)
        .then((result) => {
          sessionStorage.setItem("token", result.data.token);
          successMsg("You Registered Successfully!");
          if (roleSelected == "bussiness") {
            navigate("/new-card");
          } else {
            navigate("/profile");
          }
        })
        .catch((err) => {
          errorMsg("Something went Wrong, Try Agian");
        });
    },
  });
  return { formik, roleSelected, setRoleSelected };
};
