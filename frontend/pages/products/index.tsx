import { Paper, Group } from '@mantine/core';
import DefaultLayout from '../../components/Layouts/Default';
import ProdcutList from '../../components/Products/ProductList';

const ProductsPage = () => {
    return (  
        <DefaultLayout>
            <Paper>
                <Group p={'lg'} w={'100%'}>
                    <ProdcutList />
                </Group>
            </Paper>
        </DefaultLayout>
    );
}

export default ProductsPage;