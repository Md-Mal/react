import './App.css';
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
function App() {
  return (
    <div className="p-2 d-flex flex-column align-items-center justify-content-center" style={{height: '100vh'}}>
  <LoginButton/>
  <LogoutButton/>
  <Profile/>
    </div>
  );
}

export default App;
