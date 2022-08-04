import './App.css';
import Nav from '../Nav/Nav'

function App() {
  return (
    <main className='landing'>
    <div className="App">
      <Nav/>
    </div>
    <section className='landing-photo'>

    </section>
    <section className='landing-projects'>
      <section className='landing-projects-content'>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </h1>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <button className='landing-projects-button'>
        PROJECTS
      </button>
    </section>
    <section className='landing-photo'>

    </section>
    <section className='landing-services'>

    </section>
    </main>
    
  );
}

export default App;
