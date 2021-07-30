/* eslint-disable prettier/prettier */
import { Typography } from '@material-ui/core'
// import Products from './feature/products/index'
import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import { Person } from 'schema-dts'
import React from 'react'
import { JsonLd } from 'react-schemaorg'

interface Products {
    id: number
    title: string
    author: string
  }

export const getStaticPaths: GetStaticPaths = async () => {
    const {data} = await axios.get<Products[]>('http://localhost:8000/products?_limit=3')
    const paths = data.map(p => {
      return {
        params: {
          id: String(p.id)
        }
      }
    });
  
    return { paths, 
    fallback: 'blocking' } 
  } 
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data } = await axios.get<Products[]>(`http://localhost:8000/products/${params.id}`)
    console.log(data)
    return { props: { data } }
  }
  
  
  const Details = ({data}:{data : Products}): JSX.Element => {
    const products = 
        <div key={data.id}>
              <JsonLd<Person>
          item={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: data.title,
            knowsAbout: ["Compilers", "Computer Science"],
          }}
          />
          <li>{data.id}</li>
          <li>{data.title}</li>
        </div>
      

    return (
      <main>
        <h1>POC google tag manager</h1>
        <Typography style={{ color: '#e3e3e3' }}>blalbalbalbalbla</Typography>
        <ul>{products}</ul>
      </main>
    )
  }
  
  export default Details;