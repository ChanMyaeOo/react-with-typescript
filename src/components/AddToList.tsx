import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
    person: Props["person"];
    setPerson: React.Dispatch<React.SetStateAction<Props["person"]>>;
}

const AddToList: React.FC<IProps> = ({ person, setPerson }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleClick = (): void => {
        if (!input.name || !input.age || !input.url) {
            return;
        }

        setPerson([
            ...person,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note,
            },
        ]);

        setInput({
            name: "",
            age: "",
            url: "",
            note: "",
        });
    };

    return (
        <div className="AddToList">
            <input
                type="text"
                className="AddToList-input"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={input.name}
            />
            <input
                type="text"
                className="AddToList-input"
                placeholder="Age"
                name="age"
                onChange={handleChange}
                value={input.age}
            />
            <input
                type="text"
                className="AddToList-input"
                placeholder="Image Url"
                name="url"
                onChange={handleChange}
                value={input.url}
            />
            <textarea
                className="AddToList-input"
                placeholder="Note"
                name="note"
                value={input.note}
                onChange={handleChange}
            />

            <button className="AddToList-btn" onClick={handleClick}>
                Add to List
            </button>
        </div>
    );
};

export default AddToList;
