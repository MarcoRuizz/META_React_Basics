// stateless commponnet
export function statelessComponent() {
  return (
    <div>
      <h1>A completely stateless component!</h1>
    </div>
  );
}

// stateful component
export function statefulComponent() {
  const [word, setWord] = useState("hello");
  return (
    <div>
      <h1>A state value: {word} </h1>
    </div>
  );
}
