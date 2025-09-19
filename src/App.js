import Test from "./pages/test";
import Profile from "./pages/profile";
import { Routes, Route } from "react-router-dom";
import './app.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
