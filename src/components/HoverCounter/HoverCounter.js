import UpdatedComponent from "../withCounter"

const HoverCounter = ({count, onClickOrHover}) => {

    return <h1 onMouseOver={onClickOrHover}>Hovered {count} times !</h1>
}

export default UpdatedComponent(HoverCounter);