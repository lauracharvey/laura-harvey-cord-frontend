import { useState, useEffect } from "react";

const Counters = ({ counters }) => {
    const [widths, setWidths] = useState({})
    const [opacity, setOpacity] = useState()

    useEffect(() => {
        setWidths(
            counters.map(counter => {
                return counter.percentage
            })
        )
    }, [counters])

	setTimeout(() => {
		const opacity = 1
		setOpacity(opacity);
	}, 300);

    return <div className="counter-card-outer">
        <h2>Favourite Ice Cream Flavours</h2>
    {counters.map((counter, index) => {
          return <div key={index}>
                    <div className="counter-title">
                        <p>{counter.name}</p>
                    </div>
                    <div className="counter-bar-outer">
                        <div 
                            className="counter-bar-inner" 
                            style={{
                                opacity: opacity,
                                width: `${widths[index]}%`
                            }}
                        >
                            <div className="counter-bar-number">
                                <p>{counter.number} <span>votes</span></p>
                            </div>
                            <div className="counter-bar-image">
                                <img alt="ice cream icon" src={counter.image}/>
                            </div>
                        </div> 
                        <div className="counter-bar-percentage">{counter.percentage}%</div>
                    </div>
                </div>
            })}
    </div>  
}
 
export default Counters