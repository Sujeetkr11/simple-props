import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className='App'>
      <ParentComponent />
      <UserCard name="Guru" age={28} occupation="Engineer" />
    </div>
  );
}

export default App;
