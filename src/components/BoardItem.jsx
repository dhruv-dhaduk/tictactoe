import circle from "../res/svgs/circle.svg";
import cross from "../res/svgs/cross.svg";

function BoardItem({ itemState }) {

    return (
        <div className="p-3 border-2 border-white border-opacity-25">
            <img src={ itemState === 1 ? cross : itemState === 0 ? circle : null } alt="" />
        </div>

    );
}

export default BoardItem;