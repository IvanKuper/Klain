import { FunctionComponent, useState } from "react";
import Documents from "./DocumentsTable";
import Navbar from "./Navbar";
import NewDocument from "./NewDocument";

interface AllDocumentsProps {}

const AllDocuments: FunctionComponent<AllDocumentsProps> = () => {
  const [isChanged, setIsChanged] = useState(false);

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <NewDocument setIsChanged={setIsChanged} />
          </div>
          <div className="col-lg-9">
            <Documents changed={isChanged} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDocuments;
