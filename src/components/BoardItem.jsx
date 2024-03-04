import circle from "../res/svgs/circle.svg";
import cross from "../res/svgs/cross.svg";

function BoardItem({ itemState }) {
    let icon = null;
    if (itemState === 1)
        icon = cross;
    else if (itemState === 0)
        icon = circle;

    return (
        <div className="p-3 border-2 border-white border-opacity-25">
            <img src={icon} alt="" />
        </div>

    );
}

export default BoardItem;