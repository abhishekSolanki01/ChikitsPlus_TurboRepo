import AppBar from '@/componemt/appBar'
import '@/styles/globals.css'
import axios from 'axios'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { isUserLoadingState, userState } from 'stores'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <App2 Component={Component} pageProps={pageProps} />
    </RecoilRoot>
  )
}

const App2 = (props: any) => {
  const { Component, pageProps } = props;
  const userLoading = useRecoilValue(isUserLoadingState)
  if (userLoading && false) {
    return (
      <>
        <AppBar />
        <InitUser />
      </>
    )
  } else {
    return (
      <>
        <AppBar />
        <InitUser />
        <Component {...pageProps} />
      </>
    )
  }
}

const InitUser = () => {
  const [user, setUser] = useRecoilState(userState)

  useEffect(() => {
    init()
  }, [])

  const init = async () => {
    try {
      const userExist = await axios.get('/api/me', {
        headers: { "authorization": "Bearer " + localStorage.getItem('token') }
      })
      if (!userExist.data.error) {
        setUser({
          isLoading: false,
          userEmail: userExist.data.data.email
        })
      }
      console.log("userExist", userExist);
    } catch (error) {

    }
  }

  return <></>
}