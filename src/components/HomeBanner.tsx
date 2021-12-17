import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue
} from '@chakra-ui/react'

export function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true
  })

  return (
    <Box
      w="100%"
      h={['10.1875rem', '20.9375rem']}
      bgImage="banner.svg"
      bgSize="cover"
    >
      <Flex
        maxW={['21.4375rem', '72.5rem']}
        h="inherit"
        m="auto"
        justify="space-between"
      >
        <Box
          mt={['7', '20']}
          mb={['7', '4.375rem']}
          maxW={['20.8125rem', '32.75rem']}
        >
          <Heading
            as="h1"
            fontWeight="medium"
            fontSize={['xl', '4xl']}
            lineHeight={['1.875rem', '3.375rem']}
            color="light.100"
          >
            5 Continentes,
          </Heading>

          <Heading
            as="h1"
            fontWeight="medium"
            fontSize={['xl', '4xl']}
            lineHeight={['1.875rem', '3.375rem']}
            color="light.100"
          >
            infinitas possibilidades.
          </Heading>

          <Text
            fontSize={['0.875rem', 'xl']}
            lineHeight={['1.3125rem', '1.875rem']}
            color="light.200"
            mt={['0.5rem', '5']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        {isWideVersion && (
          <Box mt="4.75rem">
            <Image src="airplane.svg" alt="airplane" />
          </Box>
        )}
      </Flex>
    </Box>
  )
}
