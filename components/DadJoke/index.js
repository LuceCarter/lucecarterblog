import DadJokeStyles from "@styles/DadJoke.module.css";
import { useEffect, useState} from "react";


export default function DadJoke() {

    const [joke, setJoke] = useState('');

    useEffect(async () => {
      const dadJoke = await getDadJoke();
      setJoke(dadJoke);
    }, []);

    return (
        <div className={DadJokeStyles.dadJoke}>          
            <h3>
                {joke}    
            </h3>
        </div>
    );
}

async function getDadJoke() {
    var dadJoke = "";
    console.log("Fetching a Dad joke... ");
  
    const myHeaders = new Headers();
    myHeaders.append("Accept", "text/plain");
    myHeaders.append("User-Agent", "LuceCarterBlog");
    myHeaders.append(
      "Cookie",
      "__cfduid=d0222b48113a0cf0066ef0a9dd6572a2e1598302507"
    );
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
   await fetch("https://icanhazdadjoke.com/", requestOptions)
      .then((response) => response.text())
      .then((result) => {       
        dadJoke = result;
      })
      .catch((error) => console.log("error", error));     
    
      return dadJoke;
  }
  