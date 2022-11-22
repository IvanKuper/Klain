import { FunctionComponent } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Document } from "../interfaces/Document";
import { addDocument } from "../services/documentService";

interface NewDocumentProps {
  setIsChanged: Function;
}

const NewDocument: FunctionComponent<NewDocumentProps> = ({ setIsChanged }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      desc: "",
      // genre: "Action",
      // price: 0,
    },
    validationSchema: yup.object({
      name: yup.string().required().min(4),
      desc: yup.string().required().min(2),
    }),
    onSubmit: (values: Document, { resetForm }) => {
      addDocument(values)
        .then((res) => {
          console.log(res.data);
          alert("Document saved successfully");
          setIsChanged(true);
          resetForm();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <>
      <h4 className="">Add New Document</h4>
      <div className="main container m-3 p-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <input
              className="form-control mt-2"
              type="text"
              name="name"
              placeholder="Document Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p>{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="form-group mt-2">
            <input
              className="form-control"
              type="text"
              name="desc"
              placeholder="desc"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desc}
            />
            {formik.touched.desc && formik.errors.desc ? (
              <p>{formik.errors.desc}</p>
            ) : null}
          </div>

          <button className="btn btn-dark mt-2" type="submit">
            Add Document
          </button>
        </form>
      </div>
    </>
  );
};

export default NewDocument;
