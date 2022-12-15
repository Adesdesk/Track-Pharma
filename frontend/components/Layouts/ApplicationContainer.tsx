import { useState } from 'react';
import { AppShell, Navbar, Tooltip, UnstyledButton, createStyles, Stack, Text, Header, Group, ActionIcon, useMantineTheme, useMantineColorScheme, Image, Paper } from '@mantine/core';
import {
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconMoonStars,
  IconSun,
} from '@tabler/icons';
import LightAndDarkModeButton from '../LightAndDarkModeButton';

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

type ApplicationContainerProps = {
    children: React.ReactNode
}

export const ApplicationContainer = (props: ApplicationContainerProps) => {
  const theme = useMantineTheme();

  const [active, setActive] = useState(2);
  const [opened, setOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 60, lg: 80 }} withBorder={false}>
            <Stack align="center" justify="center"  sx={(theme) => ({ height: "100%" })}>
                <ActionIcon variant="filled" component='a' href="/products">
                    <IconHome2 stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="transparent" component='a' href="/products">
                    <IconGauge stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="transparent" component='a' href="/products">
                    <IconDeviceDesktopAnalytics stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="transparent" component='a' href="/products">
                    <IconFingerprint stroke={1.5} />
                </ActionIcon>
            </Stack>
        </Navbar>
      }
      header={
        <Header height={80} withBorder={true}>
          <Group sx={{ height: '100%' }} px={20} position="apart">
          <div style={{ width: 120 }}>
            <Image
              radius="md"
              src="https://cfm-media-audio.s3.amazonaws.com/umaha/team201_logo.png"
              alt="Logo"
            />
          </div>
            <LightAndDarkModeButton></LightAndDarkModeButton>
          </Group>
        </Header>
      }
    >
      <Paper>
        {props.children}
      </Paper>
    </AppShell>
  );
}