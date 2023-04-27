import Clock from './Clock';
import Counter from './Counter';
import Hello from './Hello';
import MyForm from './MyForm';

function App() {

  return (
    <div className="App">
      <Hello />
      <Hello name="Romain" age={123} isActive /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Clock onNowUpdate={(now) => { /*console.log(now);*/ }} />
      <Counter />
      <MyForm />
    </div>
  );
}

export default App;
