import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import Allcards from "./components/Allcards";
import Newcard from "./components/Newcard";
import Mycards from "./components/Mycards";
import Editcard from "./components/Editcard";
import Profile from "./components/Profile";
import HomeHeb from "./components/HomeHeb";
import Contacts from "./components/Contacts";
import ContactForm from "./components/Contacts";
import Professionals from "./components/Professionals";
import Start from "./components/Start";
import Info from "./components/Info";
import Simple from "./components/Simple";
import Check from "./components/Check";
import ForSign from "./components/DocumentsTable";
import Documents from "./components/DocumentsTable";
import AllDocuments from "./components/AllDocuments";
import DocumentsTable from "./components/DocumentsTable";

function App() {
  return (
    <div className="App">
      <ToastContainer theme="dark" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homeHeb" element={<HomeHeb />} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="all-cards" element={<Allcards />} />
          <Route path="new-card" element={<Newcard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="professionals" element={<Professionals />} />
          <Route path="start" element={<Start />} />
          <Route path="info" element={<Info />} />
          <Route path="simple" element={<Simple />} />
          <Route path="check" element={<Check />} />
          <Route path="alldocuments" element={<AllDocuments />} />
          <Route
            path="documentstable"
            element={<DocumentsTable changed={false} />}
          />
          <Route path="my-cards">
            <Route index element={<Mycards />} />
            <Route path="edit/:id" element={<Editcard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
