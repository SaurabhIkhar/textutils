import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";

// import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#151e39fc";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route  path="/about" element={<About/>}>
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          </Route>
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>
    {/* </Router>   */}
    </>
  );
}

export default App;
