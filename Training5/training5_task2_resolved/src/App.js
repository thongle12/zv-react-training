import "./App.css";
import SignIn from "./pages/SignIn";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Common from "./pages/Common";
import Home from "./pages/Home";
import Users from "./components/Users";
import PrivateRoute from "./route";
import MyInfo from "./components/MyInfo";
import UserParam from "./components/Users/UserParam";

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
                  <Route exact path="/app/users/:id" component={UserParam} />
                  <Redirect to="/app/users" />
                </Switch>
              </Users>
            </Route>
            <Route exact path="/app/my-info" component={MyInfo} />
            <Redirect to="/app" />
          </Switch>
        </Common>
      </PrivateRoute>

      {/* <PrivateRoute exact path="/app" layout={Common} component={Home} />
      <PrivateRoute exact path="/app/users" layout={Common} component={Users} /> */}
      {/* <PrivateRoute exact path="/app/users/:id" layout={Common} component={UserDetail}/> */}
    </BrowserRouter>
  );
}

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

export default App;
