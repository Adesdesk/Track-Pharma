import { Card, Image, Text, Group, Flex, Button, Grid, Box, Modal, Divider } from '@mantine/core';
import { useState } from 'react';

interface Product {
    manufacturerName: string,
    manufacturerEmail: string,
    manufacturingDate: string,
    expiryDate: string,
    productName: string,
    scientificName: string,
    image: string,
}

type ProductCardProps = {
    product: Product
}

const ProductCard = (props: ProductCardProps) => {

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
                            src={ props.product.image }
                            height={"100%"}
                            alt="No way!"
                            fit={'cover'}
                            direction={{ base: 'row' }}
                        />
                    </Flex>

                    <Flex
                        direction={{ base: 'column' }}
                        justify={{ sm: 'flex-start' }}
                    >
                        <Text fw={600} fz="sm">{ props.product.productName }</Text>
                        <Text fz="xs">21</Text>
                        <Text fz="xs">MFG { props.product.manufacturingDate }</Text>
                        <Text fz="xs">Expires in { props.product.expiryDate } day(s)</Text>
                    </Flex>

                    <Flex
                        direction={{ base: 'column' }}
                        justify={{ sm: 'center' }}
                    >

                        <Button mb={'md'} size={'xs'} variant="filled" gradient={{ from: 'teal', to: 'yellow', deg: 105 }} color="blue">View Details</Button>

                        <Button onClick={() => setOpened(true)} size={'xs'} variant="filled" gradient={{ from: 'teal', to: 'yellow', deg: 105 }} color="blue">Sell</Button>
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
                                direction={{ base: 'row' }}
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
