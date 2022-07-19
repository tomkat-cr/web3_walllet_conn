import Head from 'next/head'
// import Image from 'next/image'

import { useWeb3React } from '@web3-react/core'
import { useCallback, useEffect } from 'react'
import { connector } from '../config/web3'

import styles from '../styles/Home.module.css'

export default function Home() {

  const { activate, active, deactivate, error, account, chainId } = useWeb3React()

  const connect = useCallback(() => {
    activate(connector)
    localStorage.setItem('previouslyConnected', true)
  }, [activate])

  const disconnect = () => {
    deactivate()
    localStorage.removeItem('previouslyConnected')
  }

  useEffect(() => {
    if (localStorage.getItem('previouslyConnected') === 'true') {
      connect()
    }
  }, [connect])

  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 Wallet Connector</title>
        <meta name="description" content="Web3 Wallet Connector" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Web3 Wallet Connector</h1>
      <div>
        {
          active ? <div>
              <p>
                You are connected to {chainId} network<br />
                Your account is {account}
              </p>
              <button onClick={disconnect}>Disconnect Wallet</button>
            </div>
            : <button onClick={connect}>Connect Wallet</button>

        }
      </div>
      {
        // typeof error !== 'undefined' && typeof error['message'] !== 'undefined' && error['message'].trim() !== '' &&
        error &&
        <div>
          <p>ERROR: {error.toString()}</p>
        </div>
      }
    </div>
  )
}
