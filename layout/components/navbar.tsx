import { FunctionComponent } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  Stack,
  useColorMode,
  useStyleConfig,
} from '@chakra-ui/react';
import { isDarkMode } from 'lib/theme-utils';
import { AppLogo } from './app-logo';

export const Navbar: FunctionComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const styles = useStyleConfig('Navbar');

  return (
    <Box __css={styles}>
      <Grid
        width={'full'}
        maxWidth={'60ch'}
        padding={4}
        alignItems={'center'}
        templateColumns="1fr 3fr 1fr"
      >
        <GridItem>
          <AppLogo />
        </GridItem>
        <GridItem></GridItem>
        <GridItem>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'flex-end'}
            spacing={7}
          >
            <Button onClick={toggleColorMode}>
              {isDarkMode(colorMode) ? <SunIcon /> : <MoonIcon />}
            </Button>

            <Avatar src={'/img/avatar_large.jpeg'} />
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};
