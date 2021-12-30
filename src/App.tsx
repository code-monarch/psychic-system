import './App.css';
import Login from './screens/Login';
import Dashboard, { DashboardUserInfo } from './screens/Dashboard';

function App() {
// TODO: Get from user session
const userInfo = {
  displayName: 'Olaide',
  avatarUrl: 'https://placekitten.com/32/32'
}

  return (
    <div className="App">
      {/* TODO: use Router to swap between Login screen and Dashboard screen
      <Login/> */}
      <Dashboard userInfo={userInfo}/>
    </div>
  );
}

export default App;
