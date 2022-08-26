import { useState, useEffect, useRef } from "react";
import Card from "./components/Card";

function App() {
    const [cardsData, setCardsData] = useState([
        {
            title: "Picasso",
            content: "Peintre XXème siècle",
            id: 1,
        },
        {
            title: "Van Gogh",
            content: "Peintre XIXème siècle",
            id: 2,
        },
    ]);

    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        console.log(btnRef);
        const handleResize = (e: Event) => {
            console.log("RESIZED", e);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="App">
            {cardsData.map((item) => (
                <Card key={item.id} title={item.title} content={item.content} />
            ))}
            {/* <Card title={"la carte"} content={"Le contenu"} /> */}
            <button ref={btnRef}>Submit</button>
        </div>
    );
}

export default App;
