import { Flex, Box, Heading } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'
import { TravelTypes } from '../components/TravelTypes'
import { Slide } from '../components/Slide'

import Head from 'next/head'

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Header />

      <HomeBanner />

      <TravelTypes />

      <Box maxW={['18.5625rem', '52.4375rem']} m="auto" mt={['6', '3.25rem']}>
        <Heading
          as="h2"
          fontWeight="medium"
          fontSize={['xl', '4xl']}
          lineHeight={['1.875rem', '3.375rem']}
          textAlign="center"
          color="dark.500"
        >
          Vamos nessa?
        </Heading>
        <Heading
          as="h2"
          fontWeight="medium"
          fontSize={['xl', '4xl']}
          lineHeight={['1.875rem', '3.375rem']}
          textAlign="center"
          color="dark.500"
        >
          Então escolha seu continente
        </Heading>
      </Box>

      <Box
        maxW={['100%', '86%']}
        h={['15.625rem', '28.125rem']}
        m="auto"
        mt={['5', '52px']}
        mb={['10', '40px']}
      >
        <Slide />
      </Box>
    </Flex>
  )
}
