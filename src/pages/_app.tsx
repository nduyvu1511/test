import '../styles/global.css'

import { persistor, store } from '@/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { SWRConfig } from 'swr'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SWRConfig value={{ revalidateOnFocus: false, shouldRetryOnError: false }}>
        <Component {...pageProps} />
      </SWRConfig>
    </PersistGate>
  </Provider>
)

export default MyApp
