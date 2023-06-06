import logo from './logo.svg';
import Massage from './comps/message'
import './App.css';
import Counter from './comps/counter'
import InputVal from './comps/inputVal'

function App() {
  return (
    <div className='container'>
      <h1 className='text-danger'>React</h1>
      <Massage txt="first 111111" />

      <Massage txt="last 222222" />
      <Counter />
      <InputVal />
    </div>
  );
}

export default App;
