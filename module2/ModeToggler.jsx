function ModeToggler() {
  const darkModeOn = true;
  const darkMode = <h1>Dark Mode</h1>;
  const lightMode = <h1>Light Mode</h1>;

  function handleClick() {
    darkModeOn = !darkModeOn;

    darkModeOn ? "Dark Mode on" : "Light Mode on";
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}

      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ModeToggler;
