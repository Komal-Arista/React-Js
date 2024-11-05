import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
    
  };

  const closeAlert = () => {
    setAlert(null);
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us"></Navbar>
      <Alert alert={alert} closeAlert={closeAlert} key={alert ? alert.msg : "default"} />
      <div className="container my-3">
        <Routes>
          <Route
              exact path="/"
              element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} />}
            />
          <Route exact path="/about" element={<About aboutText="About Us" />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
