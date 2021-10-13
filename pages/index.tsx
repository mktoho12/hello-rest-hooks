import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import breedList, { Breeds } from '../endpoints/DogBreed'
import dogImageRandom, { Dog } from '../endpoints/Dog'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [breeds, setBreeds] = useState<Breeds>([])
  const [breed, setBreed] = useState('')
  const [dog, setDog] = useState<Dog>('')

  useEffect(() => {
    breedList().then(bs => {
      setBreeds(bs)
      setBreed('pembroke')
    })
  }, [])

  useEffect(() => {
    if (breed) dogImageRandom(breed).then(d => setDog(d))
  }, [breed])
  
  return (
    <>
      <Head>
        <title>Try using Rest Hooks</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Try using <a href="https://resthooks.io/">Rest Hooks</a>
        </h1>

        <h2>Select breed</h2>
        <select onChange={e => setBreed(e.target.value)} value={breed}>
          <option value=""></option>
          {breeds.map(breed => <option key={breed}>{breed}</option>)}
        </select>

        <div style={{width: 400, height: 300, position: 'relative', marginTop: '1rem'}}>
          {dog ? <Image src={dog} layout="fill" objectFit="cover" alt="dog"/> : undefined}
        </div>

        <h2>Dog API</h2>
        <div><a href="https://dog.ceo/dog-api/">https://dog.ceo/dog-api/</a></div>
      </main>
    </>
  )
}

export default Home
