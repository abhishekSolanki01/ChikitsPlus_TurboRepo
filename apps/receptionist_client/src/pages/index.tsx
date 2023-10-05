import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, Signup } from 'ui'

import axios from 'axios'
import { useRecoilValue } from 'recoil'
import { isUserLoadingState, userEmailState } from 'stores'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const isUserLoading = useRecoilValue(isUserLoadingState)
  const userEmail = useRecoilValue(userEmailState)

  return (
    <>
    {
      !isUserLoading ? 
      <p>Wellecome to site</p> 
      : 
      <Signup title={"Signup to ChiktsaPlus"} onClick={async (
        email,
        password,
        firstName,
        lastName,
        gender,
        dob,
        contactNumber,
        address,
        userName) => {   

        let res = await axios.post('api/signup', {
          email,
          password,
          firstName,
          lastName,
          gender,
          dob,
          contactNumber,
          address,
          userName
        });        
        localStorage.setItem("token", res.data.data.token)
      }} />
    }
    </>
  )
}
