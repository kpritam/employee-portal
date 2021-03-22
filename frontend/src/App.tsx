import React from 'react';
import EmployeeDetailsForm from './components/EmployeeDetailsForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import EmployeeDetails from './components/EmployeeDetails';

function App(): JSX.Element {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex space-x-4">
                <div className="sm:block sm:ml-6">
                  <NavLink
                    exact={true}
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-white-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/details"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-white-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    View
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/details">
            <EmployeeDetails />
          </Route>
          <Route path="/">
            <EmployeeDetailsForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
