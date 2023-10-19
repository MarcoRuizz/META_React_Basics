/*
    Hooks can solve the problem of unnecessary code reuse across components.
        * useState: manage the state within a component
    Readablity and simplicity
*/

import { useState } from "react";

// [0] creates a state variable with an initial value
// [1] creates a function to update the state variable
const [showMenu, setShowMenu] = useState(false);
setShowMenu(true);

// example 2
export function InputComponent() {
  const [inputText, setText] = useState("hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={() => setText("hello")}>Reset</button>
    </>
  );
}

// example 3
export function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "Luke",
    lastName: "Jones",
    email: "lukeJones@sculpture.com",
  });

  return (
    <>
      <label>
        First name:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value, // its going to change form.firstName only
            });
          }}
        />
      </label>
      <label>
        Last name:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({
              ...form,
              lastName: e.target.value, // its going to change form.lastName only
            });
          }}
        />
      </label>
      <label>
        Email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value, // its going to change form.email only
            });
          }}
        />
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}

// useRef

export function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
