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
  PopoverCloseButton
} from '@chakra-ui/react'
import { Header } from '../../components/Header'

import Head from 'next/head'

export default function Continet() {
  return (
    <Flex direction="column">
      <Head>
        <title>Europa | worldtrip</title>
      </Head>

      <Header />

      <Box
        w="100%"
        h="31.25rem"
        bgImage="/bannerEurope.svg"
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
            Europa
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
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
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
                50
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
                60
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
                27
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
                    <PopoverBody>
                      Londres, París, Roma, Praga, Amsterdã...
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
                bgImage="/cityLondres.svg"
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
                      Londres
                    </Text>
                    <Text
                      fontWeight="medium"
                      fontSize="md"
                      lineHeight="tall"
                      color="dark.300"
                      mt=".75rem"
                    >
                      Reino Unido
                    </Text>
                  </Box>
                  <Avatar src="/avatarRu.svg" name="Reino Unido" size="sm" />
                </Flex>
              </Box>
            </Box>

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
                bgImage="/cityLondres.svg"
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
                      Londres
                    </Text>
                    <Text
                      fontWeight="medium"
                      fontSize="md"
                      lineHeight="tall"
                      color="dark.300"
                      mt=".75rem"
                    >
                      Reino Unido
                    </Text>
                  </Box>
                  <Avatar src="/avatarRu.svg" name="Reino Unido" size="sm" />
                </Flex>
              </Box>
            </Box>

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
                bgImage="/cityLondres.svg"
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
                      Londres
                    </Text>
                    <Text
                      fontWeight="medium"
                      fontSize="md"
                      lineHeight="tall"
                      color="dark.300"
                      mt=".75rem"
                    >
                      Reino Unido
                    </Text>
                  </Box>
                  <Avatar src="/avatarRu.svg" name="Reino Unido" size="sm" />
                </Flex>
              </Box>
            </Box>

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
                bgImage="/cityLondres.svg"
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
                      Londres
                    </Text>
                    <Text
                      fontWeight="medium"
                      fontSize="md"
                      lineHeight="tall"
                      color="dark.300"
                      mt=".75rem"
                    >
                      Reino Unido
                    </Text>
                  </Box>
                  <Avatar src="/avatarRu.svg" name="Reino Unido" size="sm" />
                </Flex>
              </Box>
            </Box>

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
                bgImage="/cityLondres.svg"
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
                      Londres
                    </Text>
                    <Text
                      fontWeight="medium"
                      fontSize="md"
                      lineHeight="tall"
                      color="dark.300"
                      mt=".75rem"
                    >
                      Reino Unido
                    </Text>
                  </Box>
                  <Avatar src="/avatarRu.svg" name="Reino Unido" size="sm" />
                </Flex>
              </Box>
            </Box>
          </SimpleGrid>
        </Flex>
      </Box>
    </Flex>
  )
}
