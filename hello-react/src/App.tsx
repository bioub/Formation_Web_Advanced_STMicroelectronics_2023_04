import Clock from './Clock';
import Hello from './Hello';

function App() {

  return (
    <div className="App">
      <Hello />
      <Hello name="Romain" age={123} isActive /> {/* React.createElement(Hello, { name: 'Toto' }) */}
      <Clock onNowUpdate={(now) => { console.log(now); }} />
    </div>
  );
}

export default App;
