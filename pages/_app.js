import { ChakraProvider,CSSReset } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import '../universalSass.scss';
import theme from '../helpers/theme';
import Fonts from '../helpers/fonts';


function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <CSSReset />
    <Fonts/>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </ChakraProvider>
}

export default MyApp
