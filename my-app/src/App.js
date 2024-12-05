// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;











import React, { useState } from 'react'; 
import { ThemeProvider } from './context/ThemeContext'; 
import UserList from './components/UserList'; 
import SearchBar from './components/SearchBar'; 
import ThemeToggle from './components/ThemeToggle'; 
import './App.css'; 

const App = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for managing search input

  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <UserList searchQuery={searchQuery} onSelectUser={() => {}} /> {/* Updated UserList to remove modal logic */}
      </div>
    </ThemeProvider>
  );
};

export default App;

