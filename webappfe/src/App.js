// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorListPage from './Pages/ColorListPage';
import ColorEditPage from './Pages/ColorEditPage'; // Import ColorEditPage component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Wrap Route components with Routes */}
          <Route path="/color-list" element={<ColorListPage />} /> {/* Use 'element' prop to specify component */}
          <Route path="/edit/:id" element={<ColorEditPage />} /> {/* Use 'element' prop to specify component */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
