import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import '../styles/slider.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
    
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App