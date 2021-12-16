import {
  Flex,
  Box,
  Heading,
  Text,
  HStack,
  SimpleGrid,
  Avatar,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader
} from '@chakra-ui/react'
import { Header } from '../../components/Header'

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

      <Box
        w="100%"
        h="31.25rem"
        bgImage={continent.image2}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Box maxW="72.5rem" h="inherit" m="auto">
          <Heading
            as="h1"
            fontWeight="semibold"
            fontSize="5xl"
            lineHeight="4.5rem"
            color="light.100"
            mt="23.0625rem"
          >
            {continent.title}
          </Heading>
        </Box>
      </Box>

      <Box w="100%">
        <Flex
          maxW="72.5rem"
          m="auto"
          mt={20}
          direction="row"
          justifyContent="space-between"
        >
          <Box maxW="37.5rem">
            <Text
              fontSize="2xl"
              lineHeight={9}
              color="dark.500"
              textAlign="justify"
            >
              {continent.bio}
            </Text>
          </Box>

          <HStack spacing="2.625rem">
            <Box>
              <Text
                as="strong"
                fontWeight="semibold"
                fontSize="5xl"
                lineHeight="4.5rem"
                display="block"
                textAlign="center"
                color="yellow.900"
              >
                {continent.countries}
              </Text>
              <Text
                fontWeight="semibold"
                fontSize="2xl"
                lineHeight={9}
                textAlign="center"
                color="dark.500"
              >
                países
              </Text>
            </Box>

            <Box>
              <Text
                as="strong"
                fontWeight="semibold"
                fontSize="5xl"
                lineHeight="4.5rem"
                display="block"
                textAlign="center"
                color="yellow.900"
              >
                {continent.languages}
              </Text>
              <Text
                fontWeight="semibold"
                fontSize="2xl"
                lineHeight={9}
                textAlign="center"
                color="dark.500"
              >
                línguas
              </Text>
            </Box>

            <Box>
              <Text
                as="strong"
                fontWeight="semibold"
                fontSize="5xl"
                lineHeight="4.5rem"
                display="block"
                textAlign="center"
                color="yellow.900"
              >
                {continent.cities.length}
              </Text>
              <Flex>
                <Text
                  fontWeight="semibold"
                  fontSize="2xl"
                  lineHeight={9}
                  textAlign="center"
                  color="dark.500"
                >
                  cidades +100
                </Text>

                <Popover>
                  <PopoverTrigger>
                    <Image ml="0.3125rem" src="/Info.svg" />
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader fontWeight="bold" color="dark.500">
                      Cidades +100
                    </PopoverHeader>
                    <PopoverBody color="dark.500">
                      São as cidades que esse continente possui que estão entre
                      as 100 cidades mais visitadas do mundo.
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
            </Box>
          </HStack>
        </Flex>
      </Box>

      <Box w="100%" mt={20} mb="2.1875rem">
        <Flex maxW="72.5rem" m="auto" direction="column">
          <Heading
            as="h3"
            fontWeight="medium"
            fontSize="4xl"
            lineHeight="3.375rem"
            color="dark.500"
          >
            Cidades +100
          </Heading>

          <SimpleGrid mt={10} w="100%" gap="2.8125rem" minChildWidth="256px">
            {continent.cities.map(city => (
              <Box
                maxW="2xs"
                h="17.4375rem"
                bgColor="light.50"
                border="1px solid rgba(255, 186, 8, 0.5)"
                borderRadius="4px"
              >
                <Box
                  w="100%"
                  h="10.8125rem"
                  bgImage={city.image}
                  bgSize="cover"
                  borderRadius="4px 4px 0 0"
                ></Box>

                <Box w="100%" p="18px 24px 25px">
                  <Flex
                    maxW="13rem"
                    m="auto"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <Text
                        as="strong"
                        fontWeight="semibold"
                        fontSize="xl"
                        lineHeight="1.5625rem"
                        color="dark.500"
                      >
                        {city.name}
                      </Text>
                      <Text
                        fontWeight="medium"
                        fontSize="md"
                        lineHeight="tall"
                        color="dark.300"
                        mt=".75rem"
                      >
                        {city.countre}
                      </Text>
                    </Box>
                    <Avatar
                      src={city.countreFlag}
                      name="Reino Unido"
                      size="sm"
                    />
                  </Flex>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
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

  const response = await api.get(`/continents/${id}`)

  const continent = response.data

  return {
    props: {
      continent
    },
    revalidate: 60 * 30 // 30 minutes
  }
}
