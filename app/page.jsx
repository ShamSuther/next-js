"use client";
import { useState, useReducer } from "react";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { likes: state.likes + 1 };

    default:
      return { likes: 0 };
  }
}

export default function HomePage() {
  const names = ["Ada Lovelace", "Cooper Howard", "Margaret Hamilton"];
  // const [likes, setLikes] = useState(0);
  const [state, dispatch] = useReducer(reducer, { likes: 0 });

  function handleClick() {
    dispatch({
      type: "increment",
    });
  }

  function handleDClick() {
    dispatch({
      type: "decrement",
    });
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick} onDoubleClick={handleDClick}>Like ({state.likes})</button>
    </div>
  );
}
