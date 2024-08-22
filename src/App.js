// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <center>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login by default */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
    </center>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

// export default App;
