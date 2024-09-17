import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import OnBoarding from './pages/OnBoarding'

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

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
