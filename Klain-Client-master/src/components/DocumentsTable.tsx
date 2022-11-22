import { FunctionComponent, useEffect, useState } from "react";
import { Document } from "../interfaces/Document";
import { getDocument } from "../services/documentService";

interface DocumentsTableProps {
  changed: boolean;
}

const DocumentsTable: FunctionComponent<DocumentsTableProps> = ({
  changed,
}) => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    getDocument()
      .then((result) => setDocuments(result.data))
      .catch((err) => console.log(err));
  }, [changed]);

  return (
    <>
      <h4>Documents List</h4>
      {documents.length > 0 ? (
        <div className="container m-3 p-3">
          <table style={{ margin: "auto" }} className="table table-striped">
            <thead>
              <tr
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tfoot>
              {documents.map((document: Document) => (
                <tr key={document.id}>
                  <td>{document.id}</td>
                  <td>{document.name}</td>
                  <td>{document.desc}</td>
                  <td>
                    <i
                      style={{ color: "green" }}
                      className="fa-solid fa-edit"
                    ></i>
                  </td>
                  <td>
                    <i
                      style={{ color: "red" }}
                      className="fa-solid fa-trash"
                    ></i>
                  </td>
                </tr>
              ))}
            </tfoot>
          </table>
          <p id="p-1"></p>
        </div>
      ) : (
        <div>No documents</div>
      )}
    </>
  );
};

export default DocumentsTable;
