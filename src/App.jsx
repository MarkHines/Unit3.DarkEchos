import { episodeList } from "./data"; // this grabs the data to use
import { useState } from "react";   // so you can use a state to store

export default function App() {
  // TODO
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  const RenderDetails = () => {
    if(!selectedEpisode) {
      return (
        <section id="details">
          <p>Please select an episode</p>
        </section>
      );
    }

    return (
      <section id="details">
        <h1>Episode {selectedEpisode.id}</h1>
        <h2>{selectedEpisode.title}</h2>
        <p>{selectedEpisode.description}</p>
        <button>Watch Now</button>
      </section>
    );
  }


  const RenderEpisodes = () => {
    return (
      <section id="episodes">
        <ul id="episodes">

          {/* Using .map() creates a new array based on the function you give 
          You have to use () after the => or use return inside the {}  
          Using key = {variable.id} allows you to set an id to li */}

          {episodes.map((episode) => (
            // console.log(episode.title);
            <li key= {episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    )
    
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
        <h2>Episodes</h2>
        <main>
          <RenderEpisodes />
          <RenderDetails />
        </main>
      </header>
    </>
  )
}

//console.log(episodeList)