import { Grid, Pagination, Space, Flex, Title, Paper } from '@mantine/core';
import DefaultLayout from '../../components/Layouts/Default';
import AddProduct from "../../components/Products/AddProduct";

const AddProductPage = () => {
    return (        
        <div>
            <DefaultLayout>
                <Paper p={'xl'}>
                    <AddProduct />
                </Paper>
            </DefaultLayout>
        </div>
    );
}

export default AddProductPage;