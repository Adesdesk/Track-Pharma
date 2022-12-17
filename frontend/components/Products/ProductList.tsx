import { useEffect, useState } from 'react';
import ProductCard from "./ProductCard";
import { Title, Space, Pagination, Flex, Grid, Group, Anchor, useMantineTheme } from '@mantine/core';
import { products } from "../../data/data"
import { usePagination } from '@mantine/hooks';
import { Product } from '../../repository/interfaces';
import { useApiCall } from '../../hooks/hooks';


const items = [
    { title: 'Home', href: '#/' },
  ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

const ProdcutList = () => {

    const { getAllItems } = useApiCall();

    const theme = useMantineTheme();

    const [activePage, setPage] = useState(1);
    const pagination = usePagination({ total: 10, initialPage: 1 });
    const [products, setProducts] = useState<Product []>([]);

    useEffect(() => {
                
        getAllItems();

    })
    
    return (
        <>
            <Group position={'apart'} align={'center'}>
                <Title order={2}>Products</Title>
            </Group>
            <Space  h="xl"></Space>
            <Grid>
                {
                    products.map((product, index) => (
                        <Grid.Col key={index} sm={6} lg={4}>
                            <ProductCard product={product}></ProductCard>
                        </Grid.Col>
                    ))
                }
            </Grid>
            <Space h="xl" />
            <Flex
                mih={50}
                gap="md"
                justify="center"
                align="flex-start"
                direction="row"
                wrap="wrap"
            >
                <Pagination total={products.length} color={theme.colors.dark[7]} size={"md"} page={activePage} onChange={setPage} />
            </Flex>
        </>
    );
}

export default ProdcutList;