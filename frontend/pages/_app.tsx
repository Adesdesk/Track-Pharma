import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider, ColorSchemeProvider, ColorScheme   } from "@mantine/core"
import {ApplicationContainer} from "../components/ApplicationContainer"
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

export default function App({ Component, pageProps }: AppProps) {
  
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1140,
                  xl: 1320,
                },
              },
            },
          },
        }}
        withGlobalStyles 
        withNormalizeCSS
      >
      <ApplicationContainer>
        <Component {...pageProps} />
      </ApplicationContainer>
      </MantineProvider>     
    </ColorSchemeProvider>
    )
}
