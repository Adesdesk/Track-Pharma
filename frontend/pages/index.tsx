import { createStyles, Container, Title, Text, Button, Image } from '@mantine/core';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #000000 70%), url(/bg.png)',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 3,
    minHeight: '100vh',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    paddingTop: theme.spacing.xl * 6,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
      paddingTop: theme.spacing.xl * 6,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '50%',
    },
  },
}));

const HeroImageRight = () => {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <Container size="lg"> 
        <Image
            src="/logo1-1.png"
            alt="Logo"
            width={250}
          />
      </Container>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Transparency in{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: '#14BFB8', to: 'gold' }}
              >
                Healthcare
              </Text>
               , powered by
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: '#14BFB8', to: 'gold' }}
              >
                 Blockchain
              </Text>{' '}
            </Title>

            <Text className={classes.description} mt={30}>
              Empowering healthcare through decentralization: the future of pharmaceutical supply chain management is here!
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: '#14BFB8', to: 'gold' }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={() => {router.push('users');}}
            >
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroImageRight; 