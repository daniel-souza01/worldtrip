import { Box, Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

import { useRouter } from 'next/router'

export function Header() {
  const { pathname } = useRouter()

  return (
    <Box as="header" w="100%" h="24">
      <Flex maxW="72.5rem" h="inherit" align="center" m="auto">
        {pathname === '/continent/[continent]' && (
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
