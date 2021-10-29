import { useState, useEffect } from "react";
import axios from "axios";
import Counters from "./Counters";

const Home = () => {
    const [counters, setCounters] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/counters')
          .then(axiosResp => {
            setCounters(axiosResp.data)
          })
      }, [])

    return (
        <div className="home">
            <h1>Welcome to your Dashboard</h1>
            { counters && <Counters counters={counters} />}
        </div>
    )
}
 
export default Home;