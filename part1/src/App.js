import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Michael'/>
      <Hello name='Daniel' age={30 + 14}/>
      <Hello />
      <Hello />
    </div>
  )
}

export default App;
