import { AppShell, Container, Header, Navbar } from "@mantine/core";
import { HeaderResponsive } from "./HeaderResponsive";

const links = [
    {
      "link": "/",
      "label": "Home"
    },
    {
      "link": "/products",
      "label": "Products"
    },
    {
      "link": "/users",
      "label": "Users"
    },
    {
      "link": "/contact",
      "label": "Contact"
    }
  ]

type DefaultLayoutProps = {
    children: React.ReactNode
}

const DefaultLayout = (props: DefaultLayoutProps) => {
    return ( 
        
        <AppShell
            padding="md"
            header={<HeaderResponsive links={links} />}
            styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <Container size={'xl'}>
                {props.children}
            </Container>
        </AppShell>
     );
}
 
export default DefaultLayout;