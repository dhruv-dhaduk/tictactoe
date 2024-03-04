import BoardItem from "./BoardItem";
import { useState } from "react";

function Board() {

    const [board, setBoard] = useState(Array(9).fill(1).map((i) => ( Math.random() < 0.5 ? 0 : 1 )));

    return (
        <div className="w-full h-full p-5">

            <div className="max-w-full max-h-full m-auto aspect-square grid grid-cols-3 overflow-hidden bg-white bg-opacity-10 backdrop-blur-md border-2 border-white border-opacity-25 rounded-2xl"> 
                
                { board.map((value, i) => {
                    return <BoardItem key={i} itemState={value} />
                }) }

            </div>

        </div>
    );

}

export default Board;