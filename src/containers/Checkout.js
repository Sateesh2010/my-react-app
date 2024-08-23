import { useEffect, useState } from "react";

function Checkout() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  let emailRef;

  useEffect(() => {
    if (emailRef) {
      emailRef.focus();
    }
  }, [emailRef]);
  const saveData = (event) => {
    event.preventDefault();
    console.log("form submission logice here", name, email);
  };

  return (
    <form
      onSubmit={(event) => {
        saveData(event);
      }}
    >
      {/* form inputs */}
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        ref={(r) => (emailRef = r)}
      />
      <button type="submit"> Submit</button>
    </form>
  );
}

export default Checkout;
