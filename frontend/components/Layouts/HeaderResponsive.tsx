import { useEffect, useState } from 'react';
import { ethers, providers } from 'ethers'
import { createStyles, Header, Container, Group, Burger, Paper, Transition, ActionIcon, Button, Text, MediaQuery, useMantineTheme, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LightAndDarkModeButton from '../LightAndDarkModeButton';
import { IconWallet } from '@tabler/icons';
import Link from 'next/link';

const API_KEY = 'SFH9QsvWk9aagTGGHdHjmsmzAiCWy0m1'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.g.alchemy.com/v2/${API_KEY}`);

const HEADER_HEIGHT = 100;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {

  const theme = useMantineTheme();

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const [currentAccount, setCurrentAccount] = useState("")
  const [connect, setConnect] = useState(false)
  const [balance, setBalance] = useState("")

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      color="#FFF"
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  const handleAccountsChanged = async (accounts: []) => {
    console.log(accounts[0])
    setCurrentAccount(accounts[0])

    const address = '0x3F3353875a9E06c23532BaA3FB574d75912a60C4'
    console.log(address, currentAccount)
    const balance = await provider.getBalance(address)
    const readableBalance = ethers.utils.formatEther(balance)
    setBalance(readableBalance)
  }

  async function connectWallet() {

    if(!window.ethereum) return alert("Install Metamask");

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      if(accounts.length) {
        handleAccountsChanged(accounts)
      } else {
        console.log('Coonect your wallet')
        window.location.reload();
      }
    } 
    catch (error) {
      console.log(error);
    }
  }

  async function checkIfWalletIsConnected() {

    if(!window.ethereum) return alert("Install Metamask");

    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });

      if(accounts.length) {
        handleAccountsChanged(accounts)
      } else {
        console.log('Coonect your wallet')
      }
    } 
    catch (error) {
      console.log(error);
    }


  }
  
  useEffect(() => {
    checkIfWalletIsConnected()
  })

  useEffect(() => {
    async function accountChanged() {

      if(!window.ethereum) return alert("Install Metamask");

      window.ethereum.on("accountsChanged", async () => {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });

          if(accounts.length) {
            handleAccountsChanged(accounts)
          } else {
            console.log('Connect your wallet')
            window.location.reload();
          }
        } 
        catch (error) {
          console.log(error);
        }
      })
    }
    accountChanged();
  }, [])

  return (
    <Header height={HEADER_HEIGHT} className={classes.root} style={{ 
      background: 'transparent'
     }}>
      <Container className={classes.header} size={'xl'}>

        {
          theme.colorScheme === 'dark' ? (
            <Image
              src="/logo3.png"
              alt="Logo"
              width={180}
              height={180}
            />
          ) : (
            <Image
              src="/logo4.png"
              alt="Logo"
              width={180}
              height={180}
            />
          )
        }

        <Group spacing={5} className={classes.links}>
          {items}

          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Group>
              <LightAndDarkModeButton />
              {!currentAccount && !connect ? (
                <Button color="red" size={'xs'} variant="outline" onClick={()=>{connectWallet()}}><IconWallet size={16} /> Connect Wallet</Button>
              ) : (
                <Button color={theme.colorScheme === 'dark' ? theme.colors.brand[5] : theme.colors.dark[7]} size={'xs'} variant="outline"><IconWallet size={16} /> Connected</Button>
              )}
            </Group>
          </MediaQuery>
        </Group>
        

        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Group>
            <LightAndDarkModeButton />
            {!currentAccount && !connect ? (
              <ActionIcon color="red" variant="outline" onClick={()=>{connectWallet()}}><IconWallet size={16} /></ActionIcon>
            ) : (
              
              <ActionIcon color={'lime'} variant="outline"><IconWallet size={16} /></ActionIcon>
            )}
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="lg" />
          </Group>
        </MediaQuery>

        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}