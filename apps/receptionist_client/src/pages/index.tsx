import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, Signup } from 'ui'

import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Signup title={"Signup to ChiktsaPlus"} onClick={async(email, password) => {
        let res = await axios.post('api/signup', {email, password});
        localStorage.setItem("token", res.data.token)
      }}/>
    </>
  )
}
