import "./withWrapper.css"

const UpdatedWrapper = (OriginalComponent) => {

    const NewComponent = () => {

        const divVariable = (mensaje) => {
            return <div className={mensaje === "hola" ? "redondo" : "cuadrado"}>{mensaje}</div>
        }

        return <OriginalComponent divVariable={divVariable} />
    }
    return NewComponent;
}

export default UpdatedWrapper;