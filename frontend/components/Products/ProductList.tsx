import { useEffect, useState } from 'react';
import ProductCard from "./ProductCard";
import { Title, Space, Pagination, Flex, Grid, Modal, Group, Breadcrumbs, Anchor, useMantineTheme } from '@mantine/core';
import BreadcrumbsWidget from "../BreadcrumbsWidget";
import { products } from "../../data/data"
import { usePagination } from '@mantine/hooks';
import { Product } from '../../repository/interfaces';
const ContractABI = require("../../repository/SupplyChain.json");
import { ethers } from 'ethers';

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

const items = [
    { title: 'Home', href: '#/' },
  ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

const ProdcutList = () => {

    const theme = useMantineTheme();

    const [activePage, setPage] = useState(1);
    const pagination = usePagination({ total: 10, initialPage: 1 });
    // general
    const [provider, setProvider] = useState<any>(undefined)
    const [signer, setSigner] = useState(undefined)
    const [contract, setContract] = useState(undefined)
    const [signerAddress, setSignerAddress] = useState(undefined)

    useEffect(() => {
      const onLoad = async () => {
        const API_KEY = 'SFH9QsvWk9aagTGGHdHjmsmzAiCWy0m1'
        const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.g.alchemy.com/v2/${API_KEY}`);
        setProvider(provider)
            
        const signer = provider.getSigner();
        const contract = new ethers.Contract('0xa794211cFBE6534D75cb08f0E4dee1161008d767', ContractABI["abi"], signer);

        setContract(contract)
      }
      onLoad()
    //   getAllProducts()
    }, [])

    const getAllProducts = async () => {
        try {

            const _list = await contract.getAllProducts();
            const productList: Product[] = _list;
            console.log(productList)
            return productList;
        } catch (error) {
            console.log(error);
            throw new Error("Product list could not be fetched");
        }
    }
    
    return (
        <div>
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
        </div>
    );
}

export default ProdcutList;