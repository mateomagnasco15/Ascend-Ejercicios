import UpdatedWrapper from "../withWrapper"

const Mundo = ({divVariable}) => {
    return divVariable("mundo")
}

export default UpdatedWrapper(Mundo)