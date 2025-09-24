import Test from "./pages/test";
import Tests from "./pages/tests";
import Profile from "./pages/profile";
import HomePage from "./pages/homePage";
import { Routes, Route } from "react-router-dom";
import './app.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
