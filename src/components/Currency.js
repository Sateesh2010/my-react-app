import { useDispatch } from "react-redux";
import { changeCurrency } from "../store/slices/currencySlice";

function Currency() {
    // every action must be  dispatch
  const dispatch = useDispatch();

  return (
    <select
      onChange={(ev) => {
        console.log("Currency changed to: ", ev.target.value); // For demonstration purposes, logs the new currency to the console.
        dispatch(changeCurrency(ev.target.value));
      }}
    >
      <option> INR</option>
      <option> USD</option>
      <option> CAD</option>
      <option> GDB</option>
      <option> EUR</option>
    </select>
  );
}
export default Currency;
