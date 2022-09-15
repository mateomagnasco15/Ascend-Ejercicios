import { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {

    const NewComponent = () => {
        const [count, setCount] = useState(0);
        
        const onClickOrHover = () => {
            setCount(count + 1)
        }
        return <OriginalComponent count={count} onClickOrHover={onClickOrHover}  />
    }
    return NewComponent
}

export default UpdatedComponent;