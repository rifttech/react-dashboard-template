import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">User</Link>
            <ul>
              <li>
                <Link to="/users/1">User 1</Link>
              </li>
              <li>
                <Link to="/users/2">User 2</Link>
              </li>
              <li>
                <Link to="/users/3">User 3</Link>
              </li>
            </ul>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route path="/users/:id">
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
function UserList() {
  return (
    <div>
      <h2>Users</h2>
    </div>
  );
}
function UserProfile() {
  let { id } = useParams();
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>User Profile {id}</h2>
      <ul>
        <li>
          <Link to={`${url}/settings`}> Go to Settings </Link>
        </li>
        <li>
          <Link to={`${url}/notifications`}> Go to Notifications </Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <General />
        </Route>
        <Route path={`${path}/settings`}>
          <Settings />
        </Route>
        <Route path={`${path}/notifications`}>
          <Nofifications />
        </Route>
      </Switch>
    </div>
  );
}

function General() {
  return (
    <div>
      <h4>General</h4>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h4>Settings</h4>
    </div>
  );
}

function Nofifications() {
  return (
    <div>
      <h4>Nofifications</h4>
    </div>
  );
}
