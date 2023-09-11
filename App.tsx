import MessagesDisplay from "./components/MessagesDisplay";
import CodeDisplay from "./components/CodeDisplay";

const App = () => {
  return (
    <div className="App">
      <MessagesDisplay/>
      <input/>
      <CodeDisplay/>
      <div className="button-container">
        <button id="get-query">Get Query!</button>
        <button id="clear-chat">Clear Chat</button>
    </div>
    </div>
  );
}

export default App;
