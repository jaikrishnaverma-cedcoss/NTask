import './App.css';
import { UserProvider } from './component/ContextApi';
import ComponentA from './component/ComponentA';
function App() {
  return (
    <div className="App">
      <h1>
Q1. Here is a scenario where the App component has username which it wants to pass to the component D as
 a prop without passing it through the intermediate components. Make use of Context API to perform this.</h1>
<UserProvider value="jai">
  <ComponentA/>
</UserProvider>

    </div>
  );
}

export default App;
