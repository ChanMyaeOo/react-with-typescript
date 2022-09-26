import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ person }) => {
    const renderList = (): JSX.Element[] => {
        return person.map((p) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img src={p.url} alt="" className="List-img" />
                        <h2>{p.name}</h2>
                    </div>

                    <p>{p.age} years old</p>

                    <p className="List-note">{p.note}</p>
                </li>
            );
        });
    };
    return <ul>{renderList()}</ul>;
};

export default List;
