import BoardItem from "./BoardItem";

function Board() {

    return (
        <div className="w-full h-full p-5">

            <div className="max-w-full max-h-full m-auto aspect-square grid grid-cols-3 overflow-hidden bg-white bg-opacity-10 backdrop-blur-md border-2 border-white border-opacity-25 rounded-2xl"> 
                
                <BoardItem itemState={0} />
                <BoardItem itemState={1} />
                <BoardItem itemState={0} />
                <BoardItem itemState={1} />
                <BoardItem itemState={0} />
                <BoardItem itemState={0} />
                <BoardItem itemState={0} />
                <BoardItem itemState={1} />
                <BoardItem itemState={1} />

            </div>

        </div>
    );

}

export default Board;