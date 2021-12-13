import { Flex, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import SwiperCore, { Pagination, Navigation } from 'swiper'

SwiperCore.use([Pagination, Navigation])

export function Slide() {
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
      <SwiperSlide>
        <Flex
          maxW="1240px"
          h="450px"
          bgImage="/slide/europa.svg"
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
            Europa
          </Heading>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            lineHeight="9"
            textAlign="center"
            color="light.200"
          >
            O continente mais antigo.
          </Text>
        </Flex>
      </SwiperSlide>

      <SwiperSlide>
        <Flex
          maxW="1240px"
          h="450px"
          bgImage="/slide/europa.svg"
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
            Europa
          </Heading>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            lineHeight="9"
            textAlign="center"
            color="light.200"
          >
            O continente mais antigo.
          </Text>
        </Flex>
      </SwiperSlide>

      <SwiperSlide>
        <Flex
          maxW="1240px"
          h="450px"
          bgImage="/slide/europa.svg"
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
            Europa
          </Heading>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            lineHeight="9"
            textAlign="center"
            color="light.200"
          >
            O continente mais antigo.
          </Text>
        </Flex>
      </SwiperSlide>

      <SwiperSlide>
        <Flex
          maxW="1240px"
          h="450px"
          bgImage="/slide/europa.svg"
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
            Europa
          </Heading>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            lineHeight="9"
            textAlign="center"
            color="light.200"
          >
            O continente mais antigo.
          </Text>
        </Flex>
      </SwiperSlide>

      <SwiperSlide>
        <Flex
          maxW="1240px"
          h="450px"
          bgImage="/slide/europa.svg"
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
            Europa
          </Heading>
          <Text
            fontWeight="bold"
            fontSize="2xl"
            lineHeight="9"
            textAlign="center"
            color="light.200"
          >
            O continente mais antigo.
          </Text>
        </Flex>
      </SwiperSlide>
    </Swiper>
  )
}
