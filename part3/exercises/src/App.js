import './App.css';
import MyProjects from './components/Projects';
import HobbyIntroduction from './components/Introduction';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Skateboarding</h1>
      <HobbyIntroduction />
      <MyProjects />
    </div>
  );
}

export default App;
