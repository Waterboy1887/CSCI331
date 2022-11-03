import Counter from './components/Counter';
import GitHub from './components/GitHub';

function App() {
  return (
    <div>
      <h1>Hello, Node.js!</h1>
      <h2>Connor Carlson - j79k878</h2>
      <p>Running node server on port 3016</p><hr />
      <Counter incBy={1}/><hr />
      <Counter incBy={5}/><hr />
      <GitHub /><hr />
    </div>
  );
}

export default App;
