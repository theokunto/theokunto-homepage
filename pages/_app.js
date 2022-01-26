import { ChakraProvider } from "@chakra-ui/provider";
import Layout from '../components/layouts/main';
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "../redux";

const Website = ({ Component, pageProps, router}) => {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme} >
                <Fonts />
                <Layout router={router} >
                    <AnimatePresence exitBeforeEnter initial={true}>
                        <Component {...pageProps} key={router.route}/>
                    </AnimatePresence>
                </Layout>
            </ChakraProvider>
        </Provider>
        
    )
}

export default Website