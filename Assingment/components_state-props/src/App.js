import logo from './logo.svg';
import './App.css';
import Subscription from './components/Subscription';
import Props from './components/Props';

const name = "My_Web_Props"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Subscription />

        <Props />
        <Props webnme={name} />
      </header>
    </div>
  );
}

export default App;




//  jsx - javaScrit xml  no use react ma html na code lakhva use thay 6e...
// event - preventDefault no use html na event ne stop krva mate use tahy 6e... 
// kyyo aevo data 6e jeni under current event male  - onkeyup aetlejya pn key pree krvi tyare j te print thay jai
