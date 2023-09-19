
import "./App.css";
import { createStore } from "redux";
import reducer from "./Application/Redux/index";
import { Provider} from "react-redux";
import Main from "./View/Main";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer);

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <Router>
                    <Main />
                </Router>
            </div>
        </Provider>
    );
}

export default App;
