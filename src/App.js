import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const URL = "https://api.thedogapi.com/v1/images/search";

function App() {
  const [image, setImage] = useState("");
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const dogs = response.data[0].url;
        setImage(dogs);
        console.log(dogs);
       
      })
        
  }, []);

  return (
    <div>
      <h1>Api for random dog pictures</h1>
      <img src={image} />
      <h2>Refresh the page to get a new image.</h2>
    </div>
  );
}
export default App;
