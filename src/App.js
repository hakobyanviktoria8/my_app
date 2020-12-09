import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Home} from "./Components/Home";
import {Movies} from "./Components/Movies";
import {Series} from "./Components/Series";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>

                    <Link to="/series">
                            Series
                    </Link>

                    <Link to="/movies">Movies</Link>
                </nav>

                <Switch>
                    <Route path="/series">
                        <Series />
                    </Route>
                    <Route path="/movies">
                        <Movies />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
