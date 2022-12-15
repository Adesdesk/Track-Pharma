import { Grid, Pagination, Space, Flex, Title } from '@mantine/core';
import DefaultLayout from '../../components/Layouts/Default';
import ProductCard from "../../components/Products/ProductCard";
import ProdcutList from '../../components/Products/ProductList';

const ProductsPage = () => {
    return (  
        <DefaultLayout>
            <ProdcutList></ProdcutList>
        </DefaultLayout>
    );
}

export default ProductsPage;