import { Button, Group, TextInput, Title, useMantineTheme } from "@mantine/core";
import { useState } from "react";

const AddUser = () => {

    const theme = useMantineTheme();

    const [name, setName] = useState('Team201');
    const [email, setEmail] = useState('team201@grandida.com');
    const [address, setAddress] = useState('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa');

    return (
        <>

            <Group mx="auto" p={"xl"} style={{
                    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                    width: "100%"
                }} >

                <Title order={3} align={'center'}>Add User Data</Title>

                <TextInput radius="sm" size='sm' withAsterisk label="Name" style={{ width: "100%" }} value={name} onChange={(event) => setName(event.currentTarget.value)} />

                <TextInput radius="sm" size='sm' withAsterisk label="Email" style={{ width: "100%" }} value={email} onChange={(event) => setEmail(event.currentTarget.value)} />

                <TextInput radius="sm" size='sm' withAsterisk label="Address" style={{ width: "100%" }} value={address} onChange={(event) => setAddress(event.currentTarget.value)} />

                <Button variant="filled" gradient={{ from: 'teal', to: 'yellow', deg: 105 }}>Add</Button>
            </Group>
        </>
     );
}

export default AddUser;
