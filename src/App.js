import './App.css';
import Header from './components/header/header.component';
import Home from './components/home/home.component';
import Navigation from './components/navigation/navigation.component';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Header/>
        <Home/>
    </div>
  );
}

export default App;
