
import Automation from "../components/Automation";
import Journey from "../components/Journey";
import RankedContent from "../components/Rankedcontent";
import { Routes, Route } from "react-router-dom"
import Hero from "./Hero";


const Home = () => {
    return (

        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/ranked" element={<RankedContent />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/auto" element={<Automation />} />
        </Routes>

    )
}

export default Home