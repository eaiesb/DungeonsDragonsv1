import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Dungeons from "./Components/DungeonsData/Dungeons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dungeons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
