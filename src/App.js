import "./index.css";
import Anomalie from "./components/Anomalie";
import Artist from "./components/Artist";
import Concept from "./components/Concept";
import Introduction from "./components/Introduction";
import Links from "./components/Links";
import OurStory from "./components/OurStory";
import Outside from "./components/Outside";
import Performance from "./components/Performance";
import Record from "./components/Record";
import Resident from "./components/Resident";
import Synopsis from "./components/Synopsis";

import Home from "./components/Home";

function App() {
    return (
        <div className="w-screen h-screen bg-black flex flex-col overflow-x-hidden">
            <div><Home/></div>
            <div className="bg-zinc-800" id="intro">
                <Introduction />
            </div>
            <div className=" bg-zinc-800" id="story">
                <OurStory />
            </div>
            <div className="bg-zinc-800" id="anomalie">
                <Anomalie />
            </div>
            <div className="bg-zinc-800" id="concept">
                <Concept />
            </div>
            <div className="bg-zinc-800" id="artist">
                <Artist />
            </div>
            <div className="bg-zinc-800" id="outside2">
                <Outside />
            </div>
            <div className="bg-zinc-800" id="resident">
                <Resident />
            </div>
            <div className="bg-zinc-800">
                <Performance />
            </div>
            <div className="bg-zinc-800">
                <Record />
            </div>
            <div className="bg-zinc-800">
                <Synopsis />
            </div>
            <div className="bg-zinc-800">
                <Links />
            </div>
        </div>
    );
}

export default App;
