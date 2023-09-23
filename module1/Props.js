// you can use props in functional component to pass data from one commponent to another
// arguments are passed as JSX syntax (HTML attributes)

import React from "react";

export function App(props) {
  return <h1>{props.tittle}</h1>;
}
