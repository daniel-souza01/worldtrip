import {
  Box,
  Flex,
  Text,
  HStack,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody
} from '@chakra-ui/react'

interface ContinentInfoProps {
  bio: string
  countries: number
  languages: number
  citiesLength: number
}

export function ContinentInfo({
  bio,
  countries,
  languages,
  citiesLength
}: ContinentInfoProps) {
  return (
    <Box w="100%">
      <Flex
        maxW={['21.4375rem', '72.5rem']}
        m="auto"
        mt={['6', '20']}
        direction={['column', 'column', 'row']}
        justifyContent="space-between"
      >
        <Box maxW={['21.4375rem', '37.5rem']}>
          <Text
            fontSize={['0.875rem', '2xl']}
            lineHeight={['1.3125rem', '9']}
            color="dark.500"
            textAlign="justify"
          >
            {bio}
          </Text>
        </Box>

        <HStack spacing="2.625rem" mt={['1rem', '0']}>
          <Box>
            <Text
              as="strong"
              fontWeight="semibold"
              fontSize={['2xl', '5xl']}
              lineHeight={['9', '4.5rem']}
              display="block"
              textAlign={['start', 'center']}
              color="yellow.900"
            >
              {countries}
            </Text>
            <Text
              fontWeight={['normal', 'semibold']}
              fontSize={['lg', '2xl']}
              lineHeight={['1.6875rem', '9']}
              textAlign={['start', 'center']}
              color="dark.500"
            >
              países
            </Text>
          </Box>

          <Box>
            <Text
              as="strong"
              fontWeight="semibold"
              fontSize={['2xl', '5xl']}
              lineHeight={['9', '4.5rem']}
              display="block"
              textAlign={['start', 'center']}
              color="yellow.900"
            >
              {languages}
            </Text>
            <Text
              fontWeight={['normal', 'semibold']}
              fontSize={['lg', '2xl']}
              lineHeight={['1.6875rem', '9']}
              textAlign={['start', 'center']}
              color="dark.500"
            >
              línguas
            </Text>
          </Box>

          <Box>
            <Text
              as="strong"
              fontWeight="semibold"
              fontSize={['2xl', '5xl']}
              lineHeight={['9', '4.5rem']}
              display="block"
              textAlign={['start', 'center']}
              color="yellow.900"
            >
              {citiesLength}
            </Text>
            <Flex align="center">
              <Text
                fontWeight={['normal', 'semibold']}
                fontSize={['lg', '2xl']}
                lineHeight={['1.6875rem', '9']}
                textAlign={['start', 'center']}
                color="dark.500"
              >
                cidades +100
              </Text>

              <Popover>
                <PopoverTrigger>
                  <Image ml="0.3125rem" src="/Info.svg" w="10px" h="10px" />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight="bold" color="dark.500">
                    Cidades +100
                  </PopoverHeader>
                  <PopoverBody color="dark.500">
                    São as cidades que esse continente possui que estão entre as
                    100 cidades mais visitadas do mundo.
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
          </Box>
        </HStack>
      </Flex>
    </Box>
  )
}
