import { Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation])

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { api } from '../services/api'

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
    api.get('/api/continents').then(response => setContinents(response.data))
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
                maxW="100%"
                h={['15.625rem', '28.125rem']}
                bgImage={continent.image}
                bgRepeat="no-repeat"
                bgSize="cover"
                direction="column"
              >
                <Heading
                  fontWeight="bold"
                  fontSize={['2xl', '5xl']}
                  lineHeight={['9', '4.5rem']}
                  textAlign="center"
                  color="light.100"
                  mt={['6.875rem', '11.25rem']}
                >
                  {continent.title}
                </Heading>
                <Text
                  fontWeight="bold"
                  fontSize={['0.875rem', '2xl']}
                  lineHeight={['1.3125rem', '9']}
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
