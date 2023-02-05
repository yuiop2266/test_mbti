import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Test from "./pages/Test";
import APILogin from "./pages/APILogin";
import EmailLogin from "./pages/EmailLogin";
import Question from "./pages/Question";
import DogInfo from "./pages/DogInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<APILogin />} />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<EmailLogin />} />
          <Route path="/question" element={<Question />} />
          <Route path="/doginfo" element={<DogInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
