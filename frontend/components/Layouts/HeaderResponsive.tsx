import { useEffect, useState } from 'react';
import { ethers, providers } from 'ethers'
import { createStyles, Header, Container, Group, Burger, Paper, Transition, ActionIcon, Button, Text, MediaQuery, useMantineTheme, Image, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import LightAndDarkModeButton from '../LightAndDarkModeButton';
import { IconWallet } from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';


const API_KEY = 'SFH9QsvWk9aagTGGHdHjmsmzAiCWy0m1'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.g.alchemy.com/v2/${API_KEY}`);

const HEADER_HEIGHT = 100;

// declare var window: any

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.brand[8],
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
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[8],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor[5] }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {

  const theme = useMantineTheme();
  const router = useRouter();

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const [currentAccount, setCurrentAccount] = useState<any>("")
  const [connect, setConnect] = useState<boolean>(false)
  const [balance, setBalance] = useState<string>("")

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      color="#FFF"
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
        router.push(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  const handleAccountsChanged = async (accounts: []) => {
    const firstAccount = [...accounts].shift() ;
    setCurrentAccount(firstAccount)

    const address = '0x3F3353875a9E06c23532BaA3FB574d75912a60C4'

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
    window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
  }, [])

  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header} size={'xl'}>

        {
          theme.colorScheme === 'dark' ? (
            <Image
              src="/logo1.png"
              alt="Logo"
              width={180}
              height={180}
            />
          ) : (
            <Image
              src="/logo1.png"
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
                <Button color="red" size={'xs'} variant="light" onClick={()=>{connectWallet()}}><IconWallet size={16} /> Connect Wallet</Button>
              ) : (
                <Button color={theme.colorScheme === 'dark' ? theme.colors.brand[5] : theme.colors.dark[7]} size={'xs'} variant="light"><IconWallet size={16} /> Connected</Button>
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
              
              <ActionIcon color={theme.colorScheme === 'dark' ? theme.colors.brand[0] : theme.colors.dark[0]} variant="outline"><IconWallet size={16} /></ActionIcon>
            )}
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="lg" color={theme.colorScheme === 'dark' ? theme.colors.brand[2] : theme.colors.dark[0]} />
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