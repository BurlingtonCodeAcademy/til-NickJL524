//imports
import React from "react";
import { useState, useEffect } from "react";

//facts page
export default function Facts() {
  const Facts = () => {
    const [loadFacts, setLoadFacts] = useState(true);
    const [FactsArray, setFactsArray] = useState([]);
    useEffect(() => {
      if (loadFacts) {
        fetch("/dashboard")
          .then((res) => res.json())
          .then((list) => {
            setFactsArray(list);
          });
        setLoadFacts(false);
      }
    });
    return (
      <div>
        <h1>This is the Facts Page</h1>
        <h3>{FactsArray}</h3>
      </div>
    );
  };

  return <div></div>;
}
