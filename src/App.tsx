import React from "react";
import { useState } from "react";


export const App = () => {
  const [value, setValue] = useState(10)
  const increment = (value: any) => {
   setValue (value => value +1 )
  }
  const dicrement = (value: any) => {
    setValue (value => value - 1 )
   }
  return (
    <div>
      Hello world{value}
      <button onClick={increment}>increment</button>
      <button onClick={dicrement}>increment</button>

    </div>
  )
}
