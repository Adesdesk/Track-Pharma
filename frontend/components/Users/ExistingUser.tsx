import { Card, Group, Text, TextInput, Title, useMantineTheme } from "@mantine/core";
import { IconMail, IconWallet, IconSearch } from '@tabler/icons';
import { useState } from "react";
import { users } from "../../data/data"


const ExistingUser = () => {

    const theme = useMantineTheme();

    const [search, setSearch] = useState('');

    return (
            <>
                <Group mx="auto" p={"xl"} align={'center'} style={{
                    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                    width: "100%"
                }} >
                    <Title order={3}>Existing User</Title>
                    <Group style={{ width: '100%' }}>
                        <TextInput
                            aria-label="Filter"
                            placeholder="Filter..."
                            icon={<IconSearch
                            size={14}
                            style={{ width: '100%' }} />}
                            value={search}
                            onChange={(event) => setSearch(event.currentTarget.value)}
                        />
                    </Group>
                    {
                        users.filter((user) => {
                            const query = search.toLowerCase()
                            return query === '' ? user : (user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query))
                        }).map((user, index) => (
                            <Group style={{ width: '100%' }} key={index} mb={'sm'}>
                                <Card shadow="sm" p="xs" radius="md" withBorder w={'100%'}>
                                    <Title size="h5" color={theme.colorScheme === 'dark' ? theme.colors.brand[5] : theme.colors.dark[7]}>{user.name}</Title>
                                    <Group w={'100%'}>
                                        <IconMail />
                                        <Text size={'sm'} style={{ display: 'inline-flex' }}>{user.email}</Text>
                                    </Group>
                                    <Group w={'100%'}>
                                        <IconWallet />
                                        <Text size={'sm'} style={{ display: 'inline-flex' }}>{user.address}</Text>
                                    </Group>
                                </Card>
                            </Group>
                        ))
                    }
                </Group>
            </>
     );
}

export default ExistingUser;
