import ScrollIndicator from "./ScrollIndicator";

function App() {
  return (
    <div className="App">
      <ScrollIndicator url={ 'https://dummyjson.com/products?limt=100'} />
    </div>
  );
}

export default App;
