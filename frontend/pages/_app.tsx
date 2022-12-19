import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider, ColorSchemeProvider, ColorScheme   } from "@mantine/core"
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
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
          colors: {
            light: ['#FFF'],
            misc:['#FFF'],
            // brand: ['#e1f3ff', '#b3d9ff', '#83c0fc', '#55a7fb', '#2e8efa', '#1e75e1', '#145baf', '#0a417e', '', '#00274d'],
            brand: ['#defefd', '#b7f8f5', '#8df1ed', '#64ece6', '#3fe5de', '#2bccc5', '#1c9f99', '#0e726d', '#004442', '#001917'],
          },
          primaryColor: 'brand',
          primaryShade: 7,
          defaultGradient: {
            from: '#14BFB8',
            to: 'gold',
            deg: 135,
          },
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
        <Component {...pageProps} />
      </MantineProvider>     
    </ColorSchemeProvider>
    )
}
