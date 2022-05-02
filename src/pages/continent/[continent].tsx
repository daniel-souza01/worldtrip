import { Flex } from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { ContinentBanner } from '../../components/ContinentBanner'
import { ContinentInfo } from '../../components/ContinentInfo'
import { Cities } from '../../components/Cities'

import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { api } from '../../services/api'

interface ContinentProps {
  continent: {
    id: string
    title: string
    subtitle: string
    image: string
    image2: string
    bio: string
    countries: number
    languages: number
    cities: {
      image: string
      name: string
      countre: string
      countreFlag: string
    }[]
  }
}

export default function Continet({ continent }: ContinentProps) {
  return (
    <Flex direction="column">
      <Head>
        <title>{continent.title} | worldtrip</title>
      </Head>

      <Header />

      <ContinentBanner bgImage={continent.image2} title={continent.title} />

      <ContinentInfo
        bio={continent.bio}
        countries={continent.countries}
        languages={continent.languages}
        citiesLength={continent.cities.length}
      />

      <Cities cities={continent.cities} />
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent: id } = params

  const { data } = await api.get('/api/continents')

  const continent = data.find(continent => continent.id === id)

  return {
    props: {
      continent
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
