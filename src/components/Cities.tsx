import { Box, Flex, Heading, SimpleGrid, Avatar, Text } from '@chakra-ui/react'

interface CitiesProps {
  cities: {
    image: string
    name: string
    countre: string
    countreFlag: string
  }[]
}

export function Cities({ cities }: CitiesProps) {
  return (
    <Box w="100%" mt={['8', '20']} mb={['1rem', '2.1875rem']}>
      <Flex
        maxW={['18.75rem', '72.5rem']}
        m={['0 3.6875rem 0 1rem', 'auto']}
        direction="column"
      >
        <Heading
          as="h3"
          fontWeight="medium"
          fontSize={['2xl', '4xl']}
          lineHeight={['9', '3.375rem']}
          color="dark.500"
        >
          Cidades +100
        </Heading>

        <SimpleGrid
          mt={['5', '10']}
          ml={['2.75rem', '0']}
          w="100%"
          gap={['5', '2.8125rem']}
          minChildWidth="256px"
        >
          {cities.map(city => (
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
                  <Avatar src={city.countreFlag} name="Reino Unido" size="sm" />
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  )
}
