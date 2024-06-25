import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import UserCard from './components/UserCard';

function App() {
  const person = {
    name:"Guru",
    age:28,
    occupation:"Engineer"
  }
  return (
    <div className='App'>
      <ParentComponent />
      <UserCard name={person.name} age={person.age} occupation={person.occupation} />
    </div>
  );
}

export default App;
