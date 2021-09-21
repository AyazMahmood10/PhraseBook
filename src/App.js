import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container } from "@material-ui/core";
import Header from "./components/Header/Header"
import Definitions from "./components/Definitions/Definitions";
import { MaterialUISwitch } from "./components/MaterialUISwitch/MaterialUISwitch";
import './App.css';

function App() {

  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [lightMode, setLightMode] = useState(false)


  const dictionaryAPI = async () => {
    try {
      const dictionaryData = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      )
      setMeanings(dictionaryData.data);
    }
    catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    dictionaryAPI();
    //eslint-disable-next-line
  }, [word,category]);


  return (
    <div
      className="App"
      style={{ height: "100vh", 
               backgroundColor: lightMode ? "#181e2b":"#fff", 
               color: lightMode? "white" : "black",
               transition: "all 0.5s linear" }}
    >
      <Container 
          maxWidth="md"
          style={{ display:"flex", flexDirection:"column", height:"100vh", justifyContent:"space-evenly"}}
      >
        <div
          style={{position:"absolute", top:0, right:15, paddingTop:10 }}
        >
          <MaterialUISwitch
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)} 
          />
        </div>
        <Header 
          category={category} 
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          lightMode={lightMode}
          setMeanings={setMeanings}
        />
        {meanings && (<Definitions
          word={word}
          meanings={meanings}
          category={category}
          lightMode={lightMode}
        /> 
      )}
      </Container>
    </div>
  );
}

export default App;
