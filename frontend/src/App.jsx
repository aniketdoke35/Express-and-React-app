import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Express and React app || FullStack</h1>
      <p>JOKES: {jokes.length}</p>

      <div>
        {jokes.map((joke, index) => (
          <div key={joke.id || index}>
            <h3>{joke.id}</h3>  
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
        };
      </div>
    </>
  );
}

export default App;
