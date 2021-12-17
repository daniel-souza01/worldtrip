import { Box, Flex, Image, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

import { useRouter } from 'next/router'

export function Header() {
  const { pathname } = useRouter()

  return (
    <Box as="header" w="100%" h={['12', '24']}>
      <Flex
        maxW={['21.4375rem', '72.5rem']}
        h="inherit"
        align="center"
        m="auto"
      >
        {pathname === '/continent/[continent]' && (
          <Link href="/" passHref>
            <ChakraLink>
              <Image
                src="/voltar.svg"
                alt="voltar para início"
                w={['4', '8']}
                h={['4', '8']}
                border="2px, solid, #47585B"
              />
            </ChakraLink>
          </Link>
        )}
        <Image
          src="/logo.svg"
          alt="logo"
          m="auto"
          w={['20', '11.50375rem']}
          h={['5', '2.8125rem']}
        />
      </Flex>
    </Box>
  )
}
