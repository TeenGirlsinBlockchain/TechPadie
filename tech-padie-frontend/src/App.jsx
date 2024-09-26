import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import OnBoarding from "./pages/InitialOnBoarding";
import NextOnBoarding from "./pages/NextOnBoarding";
import RegistrationForm from './features/authentication/Signup';
import EmailVerification from './features/authentication/EmailVerification';
import Login from './features/authentication/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            {/* Form page parent container: FORM SHOWN DEPENDS ON THE REQUESTED PAGE i.e., signup, login, application form etc. */}
            <Route
              path="/"
              element={<p>Still working on HomePage comeback Later.</p>}
            />

            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<p>404 Not Found</p>} />
            <Route path="onboarding" element={<OnBoarding />} />
            <Route path="/next" element={<NextOnBoarding />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/email-verification" element={<EmailVerification />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
