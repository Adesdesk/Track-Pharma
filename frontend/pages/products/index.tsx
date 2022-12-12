import { Grid, Pagination, Space, Flex, Title } from '@mantine/core';
import ProductCard from "../../components/Products/ProductCard";
import ProdcutList from '../../components/Products/ProductList';

const ProductsPage = () => {
    return (        
        <div>
            <ProdcutList></ProdcutList>
        </div>
    );
}

export default ProductsPage;