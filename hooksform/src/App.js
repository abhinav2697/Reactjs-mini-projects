import './App.css';
import HookForm from './HookForm';
import IntegratingControlledInputs from './IntegratingControlledInputs';
import IntegratingHookForm from './IntegratingHookForm';
import IntegratingwithUIlibraries from './IntegratingwithUIlibraries';
import YupValidation from "./YupValidation";
import HandleErrors from './HandleErrors';
import UseWatch from './UseWatch';
import UseFieldArray from './UseFieldArray';

function App() {
  return (
    <div className="App">
      <HookForm />
      <IntegratingHookForm />
      <IntegratingwithUIlibraries />
      <YupValidation />
      <IntegratingControlledInputs />
      <HandleErrors />
      <UseWatch />
      <UseFieldArray />
   
    </div>
  );
}

export default App;
