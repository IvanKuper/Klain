import React, {
  ChangeEvent,
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../registerForms/hooks";
import { FormInputProps, Role, SignupProps } from "../registerForms/types";

const ResidentExtraInputs = ({
  roleSelected,
  formik,
  FormInput,
}: {
  roleSelected: string;
  formik: any;
  FormInput: any;
}) => {
  return (
    <React.Fragment>
      {roleSelected === Role.RESIDENT && (
        <React.Fragment>
          <div className="form-floating w-75 mb-3 mx-auto">
            <FormInput
              id="mitham"
              type="text"
              className="form-control"
              placeholder="Name..."
              name="mitham"
              value={formik.values.mitham}
            />
            {formik.touched.mitham && formik.errors.mitham ? (
              <p className="text-danger mt-2">
                <i className="fa-solid fa-circle-exclamation mx-1"></i>
                {formik.errors.mitham as any}
              </p>
            ) : null}
            <label htmlFor="floatingPassword">שם המתחם</label>
          </div>
          <div className="form-floating w-75 mb-3 mx-auto">
            <FormInput
              id="gush"
              type="text"
              className="form-control"
              placeholder="Name..."
              name="gush"
              value={formik.values.gush}
            />
            {formik.touched.gush && formik.errors.gush ? (
              <p className="text-danger mt-2">
                <i className="fa-solid fa-circle-exclamation mx-1"></i>
                {formik.errors.gush as any}
              </p>
            ) : null}
            <label htmlFor="floatingPassword">מספר גוש</label>
          </div>
          <div className="form-floating w-75 mb-3 mx-auto">
            <FormInput
              id="helka"
              type="text"
              className="form-control"
              placeholder="Name..."
              name="helka"
              value={formik.values.helka}
            />
            {formik.touched.helka && formik.errors.helka ? (
              <p className="text-danger mt-2">
                <i className="fa-solid fa-circle-exclamation mx-1"></i>
                {formik.errors.helka as any}
              </p>
            ) : null}
            <label htmlFor="floatingPassword">מספר חלקה</label>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const BusinessExtraInputs = ({
  roleSelected,
  formik,
  FormInput,
}: {
  roleSelected: string;
  formik: any;
  FormInput: any;
}) => {
  return (
    <React.Fragment>
      {roleSelected === Role.BUSSINESS && (
        <div className="form-floating w-75 mb-3 mx-auto">
          <FormInput
            id="bussinessName"
            type="text"
            className="form-control"
            placeholder="Name..."
            name="bussinessName"
            value={(formik.values as any).bussinessName}
          />
          {formik.touched.bussinessName && formik.errors.bussinessName ? (
            <p className="text-danger mt-2">
              <i className="fa-solid fa-circle-exclamation mx-1"></i>
              {formik.errors.bussinessName as any}
            </p>
          ) : null}
          <label htmlFor="floatingPassword">שם העסק</label>
        </div>
      )}
    </React.Fragment>
  );
};

const SpecialExtraInputs = ({
  roleSelected,
  formik,
  FormInput,
}: {
  roleSelected: string;
  formik: any;
  FormInput: any;
}) => {
  return (
    <React.Fragment>
      {roleSelected === Role.SPECIAL && (
        <React.Fragment>
          {/* <div className="form-floating w-75 mb-3 mx-auto">
            <FormInput
              id="special_phone"
              type="text"
              className="form-control"
              placeholder="special phone..."
              name="special_phone"
              value={(formik.values as any).special_phone}
            />
            {formik.touched.special_phone && formik.errors.special_phone ? (
              <p className="text-danger mt-2">
                <i className="fa-solid fa-circle-exclamation mx-1"></i>
                {formik.errors.special_phone as any}
              </p>
            ) : null}
            <label htmlFor="floatingPassword">טלפון מיוחד </label>
          </div> */}

          <div className="form-floating w-75 mb-3 mx-auto">
            <FormInput
              id="specialName"
              type="text"
              className="form-control"
              placeholder="special name..."
              name="specialName"
              value={(formik.values as any).specialName}
            />
            {formik.touched.specialName && formik.errors.specialName ? (
              <p className="text-danger mt-2">
                <i className="fa-solid fa-circle-exclamation mx-1"></i>
                {formik.errors.specialName as any}
              </p>
            ) : null}
            <label htmlFor="floatingPassword">שם מיוחד</label>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const BasicFormInputs = ({
  roleSelected,
  formik,
  FormInput,
}: {
  roleSelected: string;
  formik: any;
  FormInput: any;
}) => {
  return (
    <React.Fragment>
      <div className="form-floating w-75 mb-3 mx-auto">
        <FormInput
          id="name"
          type="text"
          className="form-control"
          placeholder="Name..."
          name="name"
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <p className="text-danger mt-2">
            <i className="fa-solid fa-circle-exclamation mx-1"></i>
            {formik.errors.name as any}
          </p>
        ) : null}
        <label htmlFor="floatingPassword">שם מלא</label>
      </div>

      <div className="form-floating mb-3 w-75 mx-auto">
        <FormInput
          id="email"
          type="email"
          className="form-control "
          placeholder="Email"
          name="email"
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-danger mt-2">
            <i className="fa-solid fa-circle-exclamation mx-1"></i>
            {formik.errors.email}
          </p>
        ) : null}
        <label htmlFor="floatingInput">דואר אלקטרוני</label>
      </div>
      <div className="form-floating mb-3 w-75 mx-auto">
        <FormInput
          id="password"
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-danger mt-2">
            <i className="fa-solid fa-circle-exclamation mx-1"></i>
            {formik.errors.password as any}
          </p>
        ) : null}
        <label htmlFor="floatingPassword">סיסמא</label>
      </div>
    </React.Fragment>
  );
};

const FormFooter = ({
  roleSelected,
  setRoleSelected,
  formik,
  FormInput,
}: {
  roleSelected: string;
  setRoleSelected: (role: Role) => void;
  formik: any;
  FormInput: any;
}) => {
  return (
    <React.Fragment>
      <div className="button mx-auto">
        <button
          disabled={!(formik.isValid && formik.dirty)}
          type="submit"
          className="btn btn-dark w-75  mt-1"
        >
          הרשמה
        </button>
      </div>
      <div className="form-check mx-auto mt-4">
        <FormInput
          type="radio"
          onChange={() => setRoleSelected(Role.RESIDENT)}
          id={Role.RESIDENT}
          name={"role"}
          value={Role.RESIDENT}
          title={Role.RESIDENT}
        />
        <label className="form-check-label mx-2" htmlFor="flexSwitchCheck">
          הרשמה כלקוח רגיל
        </label>
        <FormInput
          type="radio"
          value={Role.BUSSINESS}
          onChange={() => setRoleSelected(Role.BUSSINESS)}
          name={"role"}
          id={Role.BUSSINESS}
          title={Role.BUSSINESS}
        />

        <label className="form-check-label mx-2" htmlFor="flexSwitchCheck">
          הרשמה כלקוח עסקי
        </label>
        <FormInput
          type="radio"
          onChange={() => setRoleSelected(Role.SPECIAL)}
          id={Role.SPECIAL}
          name={"role"}
          value={Role.SPECIAL}
          title={Role.SPECIAL}
        />
        <label className="form-check-label mx-2" htmlFor="flexSwitchCheck">
          הרשמה כלקוח יזמי
        </label>
      </div>
      <p className="text-center mt-5">
        יש לך כבר משתמש?
        <Link className="link" to="/signin">
          לחץ כאן
        </Link>
      </p>
    </React.Fragment>
  );
};

const Signup: FunctionComponent<SignupProps> = () => {
  const { formik, setRoleSelected, roleSelected } = useRegister();
  const FormInput = useCallback(
    ({
      type,
      value,
      name,
      className,
      placeholder,
      onChange,
      title,
      id,
    }: FormInputProps) => (
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange ?? formik.handleChange}
        id={id}
        name={name}
        title={title}
        onBlur={formik.handleBlur}
      />
    ),
    []
  );

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* LEFT DIV */}
          <div className="leftDiv col-lg-6 col-sm-12">
            <img className="login" src="register.png" alt="" />
          </div>
          {/* RIGHT DIV */}
          <div className="rightDiv col-lg-6">
            <Link className="center" to="/">
              <img className="big-logo mx-auto mb-2" src="logo.png" alt="" />
            </Link>
            <h1 className="text-center"></h1>
            <h5 className="text-center"></h5>

            <form onSubmit={formik.handleSubmit}>
              <BasicFormInputs
                roleSelected={roleSelected}
                formik={formik}
                FormInput={FormInput}
              />
              <ResidentExtraInputs
                roleSelected={roleSelected}
                formik={formik}
                FormInput={FormInput}
              />
              <BusinessExtraInputs
                roleSelected={roleSelected}
                formik={formik}
                FormInput={FormInput}
              />

              <SpecialExtraInputs
                roleSelected={roleSelected}
                formik={formik}
                FormInput={FormInput}
              />

              <FormFooter
                setRoleSelected={setRoleSelected}
                roleSelected={roleSelected}
                formik={formik}
                FormInput={FormInput}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
