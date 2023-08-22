import './App.css';
import Header from './compo/Header'
import Sidebar from './compo/sidebar/Sidebar';
import Feed from './compo/feed-main/Feed.jsx';
import Login from './compo/Login/Login';
import { useStateValue } from './provider/stateProvider';
import MusicPlayer from './sound/MusicPlayer';

function App() {

const [{ user }, dispatch] = useStateValue();




  return (
    <div className="app">
{!user ? (
  <>
  <Login/>
  </>
):
(<>

    {/* HEADER */}
      <Header/>


<div className="app-body">

{/* SIDEBAR */}
<Sidebar/>

{/* FEED MEANS MAIN PART OF FACEBOOK */}
<Feed/>
</div>
</>)
}










    </div>
  );
}

export default App;
