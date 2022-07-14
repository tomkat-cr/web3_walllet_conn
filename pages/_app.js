import '../styles/globals.css'
import { connector, getLibrary } from '../config/index'
import { Web3ReactProvider } from '@web3-react/core'

function MyApp({ Component, pageProps }) {
  return
  <Web3ReactProvider getLibrary={getLibrary}>
    <Component {...pageProps} />
  </Web3ReactProvider>
}

export default MyApp
