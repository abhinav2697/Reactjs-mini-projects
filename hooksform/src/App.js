import './App.css';
import HookForm from './HookForm';
import IntegratingControlledInputs from './IntegratingControlledInputs';
import IntegratingHookForm from './IntegratingHookForm';
import IntegratingwithUIlibraries from './IntegratingwithUIlibraries';
import YupValidation from "./YupValidation";
import HandleErrors from './HandleErrors';

function App() {
  return (
    <div className="App">
      <HookForm />
      <IntegratingHookForm />
      <IntegratingwithUIlibraries />
      <YupValidation />
      <IntegratingControlledInputs />
      <HandleErrors />
   
    </div>
  );
}

export default App;
