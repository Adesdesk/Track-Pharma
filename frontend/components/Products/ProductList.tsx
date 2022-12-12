import { useState } from 'react';
import ProductCard from "./ProductCard";
import { Title, Space, Pagination, Flex, Grid, Modal, Group, Breadcrumbs, Anchor } from '@mantine/core';
import BreadcrumbsWidget from "../BreadcrumbsWidget";
import { products } from "../../data/data"

const items = [
    { title: 'Home', href: '#/' },
  ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

const ProdcutList = () => {

    const [activePage, setPage] = useState(1);
    
    return (
        <div>
            <Group position={'apart'} align={'center'}>
                <Title order={2}>Products</Title>
                <>
                    <Breadcrumbs sx={{ color: '#00ECE5', fontSize: 11, lineHeight: 1.4 }}>{items}</Breadcrumbs>
                </>
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
                <Pagination total={products.length} color="blue" size={"md"} page={activePage} onChange={setPage} />
            </Flex>
        </div>
    );
}

export default ProdcutList;