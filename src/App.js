import { MantineProvider, ColorSchemeProvider, NormalizeCSS, GlobalStyles, LoadingOverlay } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useLocalStorageValue, useHotkeys } from '@mantine/hooks';
import { HomePage } from './pages/HomePage';
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setLoading] = useState(true)
  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });

  useEffect(() =>  {
    setTimeout(() => {
      setLoading(!document.readyState === 'complete')
    }, 500)
  }, [])

  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }}>
        <LoadingOverlay visible={isLoading} transitionDuration={500} />

        <NormalizeCSS />
        <GlobalStyles />

        <NotificationsProvider>
          <HomePage/>
        </NotificationsProvider>
        
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
