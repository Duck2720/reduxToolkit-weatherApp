import { Route, Routes } from "react-router-dom";
import Page from "./layouts/Page";
import Today from "./component/today/Today";
import Week from "./component/week/Week";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/" element={<Today />} />
          <Route path="/week" element={<Week />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
