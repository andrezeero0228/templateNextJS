/* eslint-disable prettier/prettier */
import { Typography } from '@material-ui/core'
// import Products from './feature/products/index'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { Person } from 'schema-dts'
import React from 'react'
import { JsonLd } from 'react-schemaorg'

interface Products {
  id: number
  title: string
  author: string
}

const Home = ({data}:{data : Products[]}): JSX.Element => {
  const products = data.map(p => {
    return (
      <div key={p.id}>
            <JsonLd<Person>
        item={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: p.title,
          knowsAbout: ["Compilers", "Computer Science"],
        }}
        />
        <li>{p.id}</li>
        <li>{p.title}</li>
      </div>
    )
  })
  return (
    <main>
      <h1>POC google tag manager</h1>
      <Typography style={{ color: '#e3e3e3' }}>blalbalbalbalbla</Typography>
      <ul>{products}</ul>
    </main>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<Products[]>('http://localhost:8000/products')
  console.log(data)
  return { props: { data }, revalidate: 10 }
}

// export const getStaticProps: GetStaticProps = async () => {
//   const { data } = await axios.get<Products[]>('http://localhost:8000/products')
//   console.log(data)
//   return { props: { data } }
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await axios.get<Products[]>('http://localhost:8000/products')
//   console.log(data)
//   return { props: { data } }
// }

//todo SSR, Static generation e Incremental generation, getStaticPaths

//useEffect falhou
//static generation deu certo
// incremental deu certo
// server side rendering deu certo