import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import I18n from "../utils/i18n";
import { useState } from "react";

const LanguageToggleButton = () =>{
    const [lang, setLang] = useState("id")

    function changeLangHelper(){
        switch (lang) {
            case "en":
                I18n.changeLanguage("id")
                setLang("id")
                
                break;
            case "id":
                I18n.changeLanguage("en")
                setLang("en")
                
                break;
        
            default:
                break;
        }
    }

    function changeLangDispHelper(){
        let dispWord = <span>en</span>
        switch (lang) {
            case "en":
                dispWord= <span>id</span>
                break;
            case "id":
                dispWord= <span>en</span>
                break;
        
            default:
                dispWord = <span>en</span>
                break;
        }
        return dispWord
    }

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div 
                style={{display: 'inline-block', marginRight: 4,}}
                key={useColorModeValue('light','dark')}
                initial={{y: 0,opacity:0}}
                animate={{y: 0, opacity:1}}
                exit={{y: 0, opacity:0}}
                transition={{ duration: 0.2}}
                
            >
                <IconButton aria-label="toggle-language"
                    variant="none"
                    style={{boxShadow:'none'}}
                    icon={changeLangDispHelper()}
                    onClick={()=>changeLangHelper()}
                    />
            </motion.div>
        </AnimatePresence>
    )
}

export default  LanguageToggleButton