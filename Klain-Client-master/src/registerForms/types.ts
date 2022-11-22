import * as yup from "yup";
import { OptionalObjectSchema } from "yup/lib/object";
import { User, BusinessUser } from "../interfaces/User";

// for types of clients create different schemes
type RoleForm = {
  initialValues: User;
  scheme: OptionalObjectSchema<any>;
};

enum Role {
  RESIDENT = "resident",
  BUSSINESS = "bussiness",
  SPECIAL = "special",
}

const FormInitialValuesResidentUser = {
  name: "",
  email: "",
  password: "",
  mitham: "",
  gush: "",
  helka: "",
};

const FormInitialValuesBussiness = {
  name: "",
  email: "",
  password: "",
  bussinessName: "",
};

const FormInitialValuesSpecialUser = {
  name: "",
  email: "",
  password: "",
  specialName: "",
  // special_phone: 0,
};

const FormSchemeResidentUser = yup.object({
  name: yup.string().required().min(2),
  email: yup.string().required().min(6).max(1024).email(),
  password: yup.string().required().min(8).max(1024),
  mitham: yup.string().required(),
  gush: yup.string().required(),
  helka: yup.string().required(),
});

const FormSchemeBussinessUser = yup.object({
  name: yup.string().required().min(2),
  email: yup.string().required().min(6).max(1024).email(),
  password: yup.string().required().min(8).max(1024),
  bussinessName: yup.string().required(),
});
const FormSchemeSpecialUser = yup.object({
  name: yup.string().required().min(2),
  email: yup.string().required().min(6).max(1024).email(),
  password: yup.string().required().min(8).max(1024),
  specialName: yup.string().required(),
  // special_phone: yup.number().required(),
});

const registerForms = {
  resident: {
    initialValues: FormInitialValuesResidentUser,
    scheme: FormSchemeResidentUser,
  } as RoleForm,

  bussiness: {
    initialValues: FormInitialValuesBussiness,
    scheme: FormSchemeBussinessUser,
  } as RoleForm,

  special: {
    initialValues: FormInitialValuesSpecialUser,
    scheme: FormSchemeSpecialUser,
  } as RoleForm,
};

interface SignupProps {}

type FormInputProps = {
  type: string;
  value?: string;
  className?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  name?: string;
  title?: string;
  id?: string;
};

const formForRole = (role: Role) => {
  return registerForms[role];
};

export { formForRole, RoleForm, SignupProps, FormInputProps, Role };
