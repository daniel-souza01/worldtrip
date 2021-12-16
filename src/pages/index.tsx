import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  SimpleGrid,
  Divider
} from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Slide } from '../components/Slide'

import Head from 'next/head'

import { GetStaticProps } from 'next'
import { api } from '../services/api'
import { useEffect } from 'react'

export default function Home() {
  return (
    <Flex direction="column">
      <Head>
        <title>Home | worldtrip</title>
      </Head>

      <Header />

      <Box w="100%" h="20.9375rem" bgImage="banner.svg" bgSize="cover">
        <Flex maxW="72.5rem" h="inherit" m="auto" justify="space-between">
          <Box mt="20" mb="4.375rem" maxW="32.75rem">
            <Heading
              as="h1"
              fontWeight="medium"
              fontSize="4xl"
              lineHeight="3.375rem"
              color="light.100"
            >
              5 Continentes,
            </Heading>

            <Heading
              as="h1"
              fontWeight="medium"
              fontSize="4xl"
              lineHeight="3.375rem"
              color="light.100"
            >
              infinitas possibilidades.
            </Heading>

            <Text fontSize="xl" lineHeight="1.875rem" color="light.200" mt="5">
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Box mt="4.75rem">
            <Image src="airplane.svg" alt="airplane" />
          </Box>
        </Flex>
      </Box>

      <Box w="100%">
        <SimpleGrid
          maxW="72.5rem"
          m="auto"
          mt="7.125rem"
          mb="20"
          flex="1"
          gap="20"
          minChildWidth="158px"
          align="flex-start"
          alignItems="center"
        >
          <Box>
            <Image
              src="/travel_types/vida-noturna.svg"
              alt="vida noturna"
              m="auto"
            />
            <Text
              fontWeight="semibold"
              fontSize="2xl"
              lineHeight="2.25rem"
              textAlign="center"
              color="dark.500"
              mt="6"
            >
              vida noturna
            </Text>
          </Box>

          <Box>
            <Image src="/travel_types/praia.svg" alt="praia" m="auto" />
            <Text
              fontWeight="semibold"
              fontSize="2xl"
              lineHeight="2.25rem"
              textAlign="center"
              color="dark.500"
              mt="6"
            >
              praia
            </Text>
          </Box>

          <Box>
            <Image src="/travel_types/moderno.svg" alt="moderno" m="auto" />
            <Text
              fontWeight="semibold"
              fontSize="2xl"
              lineHeight="2.25rem"
              textAlign="center"
              color="dark.500"
              mt="6"
            >
              moderno
            </Text>
          </Box>

          <Box>
            <Image src="/travel_types/classico.svg" alt="clássico" m="auto" />
            <Text
              fontWeight="semibold"
              fontSize="2xl"
              lineHeight="2.25rem"
              textAlign="center"
              color="dark.500"
              mt="1.946rem"
            >
              clássico
            </Text>
          </Box>

          <Box>
            <Image src="/travel_types/mais.svg" alt="e mais..." m="auto" />
            <Text
              fontWeight="semibold"
              fontSize="2xl"
              lineHeight="2.25rem"
              textAlign="center"
              color="dark.500"
              mt="6"
            >
              e mais...
            </Text>
          </Box>
        </SimpleGrid>

        <Divider
          borderColor="dark.500"
          border="2px,solid"
          margin="auto"
          w="5.625rem"
        />
      </Box>

      <Box maxW="52.4375rem" m="auto" mt="3.25rem">
        <Heading
          as="h2"
          fontWeight="medium"
          fontSize="4xl"
          lineHeight="3.375rem"
          textAlign="center"
          color="dark.500"
        >
          Vamos nessa?
        </Heading>
        <Heading
          as="h2"
          fontWeight="medium"
          fontSize="4xl"
          lineHeight="3.375rem"
          textAlign="center"
          color="dark.500"
        >
          Então escolha seu continente
        </Heading>
      </Box>

      <Box maxW="1240px" h="450px" m="auto" mt="52px" mb="40px">
        <Slide />
      </Box>
    </Flex>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   // const continentsResponse = await api
//   //   .get('trasactions')
//   //   .then(response => console.log(response.data))

//   return {
//     props: {
//       // continentsResponse
//     },
//     revalidate: 60 * 30 // 30 minutes
//   }
// }
