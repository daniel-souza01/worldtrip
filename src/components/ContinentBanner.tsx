import { Box, Heading } from '@chakra-ui/react'

interface ContinentBannerProps {
  bgImage: string
  title: string
}

export function ContinentBanner({ bgImage, title }: ContinentBannerProps) {
  return (
    <Box
      w="100%"
      h={['9.375rem', '31.25rem']}
      bgImage={bgImage}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box maxW={['21.4375rem', '72.5rem']} h="inherit" m="auto">
        <Heading
          as="h1"
          fontWeight="semibold"
          fontSize={['1.75rem', '5xl']}
          lineHeight={['2.625rem', '4.5rem']}
          color="light.100"
          mt={['14', '23.0625rem']}
          textAlign={['center', 'start']}
        >
          {title}
        </Heading>
      </Box>
    </Box>
  )
}
