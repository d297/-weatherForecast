import {Input} from './Input';
import {Card} from './Card';
import './App.css';

function App() {
  return (
    <div className="Main">
       <Input/>
      <div className='CardList'>
       
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
