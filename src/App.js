import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ResultInputPage from "./ResultInputPage";
import Navbar from "./Navbar";
import ResultOutputPage from "./ResultOutputPage";
import SearchResult from "./SearchResult";
import AddResult from "./AddResult";
import FormSubject from "./FormSubject";
import SearchHome from "./SearchHome";


function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
        <div className="content">
          <Switch>
            <Route exact path ="/">
              <ResultInputPage />
            </Route>
            <Route path ="/result">
              <ResultOutputPage />
            </Route>
            <Route path ="/searchdb">
              <SearchResult />
            </Route>
            <Route path ="/addresult">
              <AddResult />
            </Route>
            <Route path ="/formsubject">
              <FormSubject />
            </Route>
            <Route path ="/searchhome">
              <SearchHome />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
