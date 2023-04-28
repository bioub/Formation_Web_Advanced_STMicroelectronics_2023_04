import Clock from './Clock';
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
    </div>
  );
}

export default App;
