import "./styles.css";

export default function App() {
  const handleOnChange = (e) => {
    //checking what the input is giving to me, in this case
    //we have an event and I will call it "e"
    const selectedValue = new Date(e.target.value); // the event return
    const today = new Date(); //getting the today's date
    const diffTime = Math.abs(selectedValue - today); //calculating diff between selected and today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays + " days");
    console.log(selectedValue);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="date" onChange={handleOnChange}></input>
    </div>
  );
}
