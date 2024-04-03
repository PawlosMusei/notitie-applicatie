import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddNote from "./pages/AddNote";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/frontend/src/pages/AddNote.js"
              element={<AddNote />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
