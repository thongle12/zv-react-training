import "./App.css";
import SignIn from "./pages/SignIn";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Common from "./pages/Common";
import Home from "./pages/Home";
import Users from "./components/Users";
import PrivateRoute from "./route";
import MyInfo from "./components/MyInfo";
import FilteredUser from "./components/Users/FilteredUser";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={SignIn} />
      <PrivateRoute>
        <Common>
          <Switch>
            <Route exact path="/app" component={Home} />
            <Route path="/app/users">
              <Users>
                <Switch>
                  <Route exact path="/app/users/:idParam" component={FilteredUser} />
                  <Redirect to="/app/users"/>
                </Switch>
              </Users>
            </Route>
            <Route exact path="/app/my-info" component={MyInfo} />
            <Redirect to="/app" />
          </Switch>
        </Common>
      </PrivateRoute>
    </BrowserRouter>
  );
}


export default App;



// function PrivateRoute({ component: Component, layout: Layout, ...rest }) {
//   const token = useSelector(state => state.auth.token)
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//        ( token  ? (
//         <Layout {...props}>
//           <Component {...props} />
//         </Layout>
//       ) : (
//         <Redirect to="/login" />
//       ))
//       }
//     />
//   );
// }

// function RouteWrapper({ component: Componnet, layout: Layout, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => (
//         <Layout {...props}>
//           <Componnet {...props} />
//         </Layout>
//       )}
//     />
//   );
// }