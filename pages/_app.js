import { ChakraProvider,CSSReset } from '@chakra-ui/react';
import theme from '../components/utils/chakra-ui/theme';
import Fonts from '../components/utils/chakra-ui/fonts';
import "../styles/index.css"

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <CSSReset />
    <Fonts />
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
