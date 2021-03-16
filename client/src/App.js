//imports
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./styles/App.css";

//components imports
import Post from "./components/Post";
import Facts from "./components/Facts";

//webpage layout
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/Facts"} components={Facts} />
        <Route path={"/Post"} component={Post} />
        <Route
          exact
          path="/"
          component={(props) => {
            return (
              <div>
                <h1>Today I Learned:</h1>
                <form action="/login" method="POST">
                  <label>
                    Title: <input name="title" type="text" />
                  </label>
                  <label>
                    Content: <input name="content" type="text" />
                  </label>
                  <label>
                    Author: <input name="author" type="text" />
                  </label>
                  <label>
                    Topic: <input name="topic" type="text" />
                  </label>
                </form>
              </div>
            );
          }}
        />
        <Route
          path="/dashboard"
          component={(props) => {
            return <h1>Trying to learn!</h1>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
