import './App.css';
import { UserProvider } from './component/ContextApi';
import ComponentA from './component/ComponentA';
import ParentComponent from './component/ParentComponent';
function App() {
  return (
    <div className="App">
      <h2>
Q1. Here is a scenario where the App component has username which it wants to pass to the component D as
 a prop without passing it through the intermediate components. Make use of Context API to perform this.</h2>
<UserProvider value="jai">
  <ComponentA/>
</UserProvider>
<h2>Q2. Make a class component named ParentComponent and inside componentDidMount start a timer that console.log a name every 2 seconds.
   Inside this ParentComponent there is a child functional component called ChildComponent.
   We don't want to render ChildComponent every time the ParentComponent renders. How will you do this?</h2>
   
   
   <ParentComponent />
    </div>
  );
}

export default App;
