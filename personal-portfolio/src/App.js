import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Introduction/>
      <Skills/>
      <Projects/>
      <Interests/>
    </div>
  );
}

export default App;
