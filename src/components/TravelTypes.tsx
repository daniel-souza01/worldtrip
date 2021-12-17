import {
  Box,
  Flex,
  SimpleGrid,
  GridItem,
  Divider,
  Image,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'

export function TravelTypes() {
  const isSmallVersion = useBreakpointValue({
    base: true,
    sm: false,
    md: false,
    lg: false
  })

  return (
    <Box w="100%">
      <SimpleGrid
        maxW={['21.4375rem', '72.5rem']}
        m="auto"
        mt={['2.25rem', '7.125rem']}
        mb={['2.25rem', '20']}
        flex="1"
        gap={['10', '20']}
        minChildWidth={['136px', '158px']}
        align="flex-start"
        alignItems="center"
      >
        <GridItem>
          <Flex direction={['row', 'column']}>
            <Image
              src={
                isSmallVersion
                  ? '/travel_types/ellipse.svg'
                  : '/travel_types/vida-noturna.svg'
              }
              alt="vida noturna"
              m={['8px', 'auto']}
            />
            <Text
              fontWeight={['medium', 'semibold']}
              fontSize={['lg', '2xl']}
              lineHeight={['1.6875rem', '2.25rem']}
              textAlign="center"
              color="dark.500"
              mt={['0', '6']}
            >
              vida noturna
            </Text>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction={['row', 'column']}>
            <Image
              src={
                isSmallVersion
                  ? '/travel_types/ellipse.svg'
                  : '/travel_types/praia.svg'
              }
              alt="praia"
              m={['8px', 'auto']}
            />
            <Text
              fontWeight={['medium', 'semibold']}
              fontSize={['lg', '2xl']}
              lineHeight={['1.6875rem', '2.25rem']}
              textAlign="center"
              color="dark.500"
              mt={['0', '6']}
            >
              praia
            </Text>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction={['row', 'column']}>
            <Image
              src={
                isSmallVersion
                  ? '/travel_types/ellipse.svg'
                  : '/travel_types/moderno.svg'
              }
              alt="moderno"
              m={['8px', 'auto']}
            />
            <Text
              fontWeight={['medium', 'semibold']}
              fontSize={['lg', '2xl']}
              lineHeight={['1.6875rem', '2.25rem']}
              textAlign="center"
              color="dark.500"
              mt={['0', '6']}
            >
              moderno
            </Text>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex direction={['row', 'column']}>
            <Image
              src={
                isSmallVersion
                  ? '/travel_types/ellipse.svg'
                  : '/travel_types/classico.svg'
              }
              alt="clássico"
              m={['8px', 'auto']}
            />
            <Text
              fontWeight={['medium', 'semibold']}
              fontSize={['lg', '2xl']}
              lineHeight={['1.6875rem', '2.25rem']}
              textAlign="center"
              color="dark.500"
              mt={['0', '6']}
            >
              clássico
            </Text>
          </Flex>
        </GridItem>

        <GridItem colSpan={[2, 2, 1, 1]}>
          <Flex direction={['row', 'column']} justify="center">
            <Image
              src={
                isSmallVersion
                  ? '/travel_types/ellipse.svg'
                  : '/travel_types/mais.svg'
              }
              alt="e mais..."
              m={['8px', 'auto']}
            />
            <Text
              fontWeight={['medium', 'semibold']}
              fontSize={['lg', '2xl']}
              lineHeight={['1.6875rem', '2.25rem']}
              textAlign="center"
              color="dark.500"
              mt={['0', '6']}
            >
              e mais...
            </Text>
          </Flex>
        </GridItem>
      </SimpleGrid>

      <Divider
        borderColor="dark.500"
        border={['1px,solid', '2px,solid']}
        margin="auto"
        w={['3.75rem', '5.625rem']}
      />
    </Box>
  )
}
