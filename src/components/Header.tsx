import { Box, Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

export function Header() {
  const path = true

  return (
    <Box as="header" w="100%" h="24">
      <Flex maxW="72.5rem" h="inherit" align="center" m="auto">
        {path && (
          <Link href="/">
            <ChakraLink>
              <Image src="/voltar.svg" alt="voltar para início" />
            </ChakraLink>
          </Link>
        )}
        <Image src="/logo.svg" alt="logo" m="auto" />
      </Flex>
    </Box>
  )
}
