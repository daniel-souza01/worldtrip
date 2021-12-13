import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    dark: {
      '900': '#000000',
      '500': '#47585B',
      '300': '#999999'
    },
    light: {
      '200': '#DADADA',
      '100': '#F5F8FA',
      '50': '#FFFFFF'
    },
    yellow: {
      '900': '#FFBA08'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'light.100'
      }
    }
  }
})
