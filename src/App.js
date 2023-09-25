import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState (null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() =>{
      setAlert(null);
    }, 2000);
  }


  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    console.log(cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#051d40";
      document.title = "Textutils - Dark Mode";
      showAlert("dark mode has been enabled.", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("light mode has been enabled.", "success");    
    }
  };

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
  }

  

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert  alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm showAlert={showAlert} 
                  heading="Enter your text to analyze below"
                  mode={mode}
                />
              }
            />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;