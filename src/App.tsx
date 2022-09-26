import { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List";

export interface IState {
    person: {
        name: string;
        age: number;
        url: string;
        note?: string;
    }[];
}

function App() {
    const [person, setPerson] = useState<IState["person"]>([
        {
            name: "Jennifer",
            age: 37,
            url: "https://i.scdn.co/image/ab6761610000e5eb034096771c29283912a65044",
            note: "Special Guest",
        },
    ]);

    return (
        <div className="App">
            <h1 style={{ margin: "20px" }}>Invited Person to the Party</h1>
            <List person={person} />
            <AddToList person={person} setPerson={setPerson} />
        </div>
    );
}

export default App;
