import { Card, Image, Text, Group, Flex, Button, Grid, Box, Modal, Divider, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { Product } from '../../repository/interfaces';

interface ProductDemoData {
    manufacturerName: string
    manufacturerEmail: string
    manufacturingDate: string
    expiryDate: string
    productName: string
    scientificName: string
    image: string
}

type ProductCardProps = {
    product: ProductDemoData
}

const ProductCard = ({product}: ProductCardProps) => {

    const theme = useMantineTheme();

    const [opened, setOpened] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState({
        manufacturerName: '',
        manufacturerEmail: '',
        manufacturingDate: '',
        expiryDate: '',
        productName: '',
        scientificName: '',
        image: '',
    });

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
                            src={product.image}
                            height={"100%"}
                            alt="No way!"
                            fit={'cover'}
                        />
                    </Flex>

                    <Flex
                        direction={{ base: 'column' }}
                        justify={'start'}
                    >
                        <Text fw={600} fz="sm">{ product.productName }</Text>
                        <Text fz="xs">21</Text>
                        <Text fz="xs">MFG {product.manufacturerName}</Text>
                        <Text fz="xs">Expires in {product.expiryDate} day(s)</Text>
                    </Flex>

                    <Flex
                        direction={{ base: 'column' }}
                        justify={{ sm: 'center' }}
                    >

                        <Button mb={'md'} size={'xs'} variant="filled" color={theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[7]}>View Details</Button>

                        <Button onClick={() => {
                            setOpened(true)
                            setSelectedProduct(product)
                        }} size={'xs'} variant="filled" color="theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[0]">Sell</Button>
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
                                src={selectedProduct.image}
                                height={"100%"}
                                alt="No way!"
                                fit='contain'
                            />
                        </Flex>

                        <Flex
                            direction={{ base: 'column' }}
                            justify={{ sm: 'flex-start' }}
                        >
                            <Text fw={600} fz="sm">{ selectedProduct.productName }</Text>
                            <Text fz="xs">21</Text>
                            <Text fz="xs">MFG {selectedProduct.manufacturerName}</Text>
                            <Text fz="xs">Expires in {selectedProduct.expiryDate} day(s)</Text>
                        </Flex>
                    </Group>
                    <Divider my="sm" />
                    <Group position="right">
                        <Button variant="filled" gradient={{ from: 'teal', to: 'yellow', deg: 105 }} size={'xs'} color="red">Cancel</Button>
                        <Button variant="filled" gradient={{ from: 'teal', to: 'yellow', deg: 105 }} size={'xs'}>Sell</Button>
                    </Group>
                </div>
            </Modal>
        </div>
    );
}

export default ProductCard;
