import UpdatedComponent from "../withCounter";

const ClickCounter = ({count, onClickOrHover}) => {

    return <button onClick={onClickOrHover}>Clicked {count} times !</button>
}

export default UpdatedComponent(ClickCounter);