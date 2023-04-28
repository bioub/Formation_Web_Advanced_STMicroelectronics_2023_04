import Clock from './Clock';
import ClockWidget from './ClockWidget';
import Counter from './Counter';
import Hello from './Hello';
import MyForm from './MyForm';

function App() {

  return (
    <div className="App">
      <Hello />
      <Hello name="Romain" age={123} isActive /> {/* React.createElement(Hello, { name: 'Toto', age: 123, isActive: true }) */}
      <Clock />
      <Counter />
      <MyForm />
      <ClockWidget />
    </div>
  );
}

export default App;
