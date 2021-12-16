import { Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore, { Pagination, Navigation } from 'swiper'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

SwiperCore.use([Pagination, Navigation])

interface continent {
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

export function Slide() {
  const [continents, setContinents] = useState<continent[]>([])

  useEffect(() => {
    api.get('/continents').then(response => setContinents(response.data))
  }, [])

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      className="mySwiper"
    >
      {continents.map(continent => (
        <SwiperSlide key={continent.id}>
          <Link href={`/continent/${continent.id}`} passHref>
            <ChakraLink
              _hover={{
                textDecoration: 'none'
              }}
            >
              <Flex
                maxW="1240px"
                h="450px"
                bgImage={continent.image}
                bgRepeat="no-repeat"
                bgSize="cover"
                direction="column"
              >
                <Heading
                  fontWeight="bold"
                  fontSize="5xl"
                  lineHeight="4.5rem"
                  textAlign="center"
                  color="light.100"
                  mt="180"
                >
                  {continent.title}
                </Heading>
                <Text
                  fontWeight="bold"
                  fontSize="2xl"
                  lineHeight="9"
                  textAlign="center"
                  color="light.200"
                >
                  {continent.subtitle}
                </Text>
              </Flex>
            </ChakraLink>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
