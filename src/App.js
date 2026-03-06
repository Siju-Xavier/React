import logo from './logo.svg';
import './App.css';
import Controls from './Controls';
import UserList from './UserList';
import Footer from './Footer';

function App() {
  const currentYear = new Date();
  const isLoggedIn = true;
  function MyComponent({ isLoggedIn }) {
    return isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in.</p>;
  }

  
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{`${currentYear.getFullYear()}`}</p>
      <MyComponent isLoggedIn={isLoggedIn} />      
      {isLoggedIn && (
        <>
          <section>
            <Controls />
          </section>
          <section>
            <h2>User List</h2>
            <UserList />
          </section>
          <Footer />
        </>
      )}
    </div>
  )
}

export default App;