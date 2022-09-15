import UpdatedWrapper from "../withWrapper"

const Hola = ({divVariable}) => {
    return divVariable("hola")
}

export default UpdatedWrapper(Hola)