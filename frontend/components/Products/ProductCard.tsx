import { Card, Image, Text, Group, Flex, Button, Grid, Box, Modal, Divider, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { Product } from '../../repository/interfaces';

type ProductCardProps = {
    product: Product
}

const ProductCard = (props: ProductCardProps) => {

    const theme = useMantineTheme();

    const [opened, setOpened] = useState(false);

    return (
        <div>
            <Card
                shadow="xs"
                p="xs"
                sx={{ minHeight: 150 }}
                withBorder
            >
                <Group position="center" grow sx={{ height: '100%' }}>
                    <Flex>
                        <Image
                            src="/medicine.jpg"
                            height={"100%"}
                            alt="No way!"
                            fit={'cover'}
                        />
                    </Flex>

                    <Flex
                        direction={{ base: 'column' }}
                        justify={{ sm: 'flex-start' }}
                    >
                        <Text fw={600} fz="sm">{ props.product.name }</Text>
                        <Text fz="xs">21</Text>
                        <Text fz="xs">MFG Placebo</Text>
                        <Text fz="xs">Expires in 895 day(s)</Text>
                    </Flex>

                    <Flex
                        direction={{ base: 'column' }}
                        justify={{ sm: 'center' }}
                    >

                        <Button mb={'md'} size={'xs'} variant="filled" color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[7]}>View Details</Button>

                        <Button onClick={() => setOpened(true)} size={'xs'} variant="filled" color="theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[0]">Sell</Button>
                    </Flex>
                </Group>
            </Card>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Sell Product"
            >
                <div>
                    <Group position="center" grow>
                        <Flex>
                            <Image
                                src="https://static7.depositphotos.com/1048238/695/i/450/depositphotos_6950762-stock-photo-cure-for-financial-crisis.jpg"
                                height={"100%"}
                                alt="No way!"
                                fit='contain'
                            />
                        </Flex>

                        <Flex
                            direction={{ base: 'column' }}
                            justify={{ sm: 'flex-start' }}
                        >
                            <Text fw={600} fz="sm">
                                Gelfilm
                            </Text>
                            <Text fz="xs">21</Text>
                            <Text fz="xs">MFG 15/09/2023</Text>
                            <Text fz="xs">Expires in 90 day(s)</Text>
                        </Flex>
                    </Group>
                    <Divider my="sm" />
                    <Group position="right">
                        <Button variant="gradient" gradient={{ from: 'teal', to: 'yellow', deg: 105 }} size={'xs'} color="red">Cancel</Button>
                        <Button variant="gradient" gradient={{ from: 'teal', to: 'yellow', deg: 105 }} size={'xs'}>Sell</Button>
                    </Group>
                </div>
            </Modal>
        </div>
    );
}

export default ProductCard;
