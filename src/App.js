// import logo from './logo.svg';
import './App.css';
import data from './data.json';
import Statistics from './components/Statistics/Statistics.jsx';
import friends from './friends.json';
import FriendList from './components/Friendlist/FriendList.jsx';

function App() {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
