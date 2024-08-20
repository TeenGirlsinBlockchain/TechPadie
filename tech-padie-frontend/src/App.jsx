import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

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

            <Route path="login" element={<Login />} />
            <Route path="*" element={<p>404 Not Found</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
