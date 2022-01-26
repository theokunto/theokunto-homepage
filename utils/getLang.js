import { useSelector } from "react-redux"

const GetLang =  () => {
    const { lang } = useSelector((state)=>state.changeLangReducer)
    return lang
}

export default GetLang