import React from 'react'
import Head from 'next/head'
import { Typography } from '@material-ui/core';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Selos</title>
      </Head>

      <main >
        <h1 >
          CRUD Selooims
        </h1>
        <Typography style={{color : "#e3e3e3"}}>blalbalbalbalbla</Typography>
      </main>
    </div>
  )
}

export default Home