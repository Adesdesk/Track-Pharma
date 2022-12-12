
import {Group, TextInput, Radio, FileInput, useMantineTheme, Title, Text, ActionIcon, Anchor } from '@mantine/core';
import { IconPlus, IconUpload, IconArrowLeft } from '@tabler/icons';
import { useState } from 'react';

const addSideEffect = () => {
    console.log('Add side effect');
}

const AddProduct = () => {
  
    const theme = useMantineTheme()
    const [value, setValue] = useState('react');
    const [manufacturerName, setManufacturerName] = useState('Team201 LLC');
    const [manufacturerEmail, setManufacturerEmail] = useState('team201@grandida.com');
    const [manufacturingDate, setManufacturingDate] = useState();
    const [expiryDate, setExpiryDate] = useState();
    const [productName, setProductName] = useState();
    const [sideEffects, setSideEffects] = useState();

    return ( 
        
      <Group mx="auto" direction="column" p={"md"} style={{ width: "100%", height:"100%", borderRadius: "10px"}} >
        <Group direction="row" p={"xl"} style={{ width: "100%"}}>
            <ActionIcon variant='transparent'>
                <IconArrowLeft />
            </ActionIcon>
            <Anchor href="/" target="_blank" c={"#000"} fw={"bolder"} td={"none"}>
                List Products
            </Anchor>
        </Group>
        <Group mx="auto" direction="column" p={"xl"} style={{ backgroundColor: "#FFF", width: "700px"}} >

            <Title order={3}>Main Information</Title>

            <TextInput radius="sm" size='sm' withAsterisk disabled label="Manufacturer Name" style={{ width: "100%" }} value={manufacturerName} onChange={(event) => setManufacturerName(event.currentTarget.value)} />

            <TextInput radius="sm" size='sm' withAsterisk disabled label="Manufacturer Email" style={{ width: "100%" }} value={manufacturerEmail} onChange={(event) => setManufacturerEmail(event.currentTarget.value)} />

            <TextInput radius="sm" size='sm' withAsterisk label="Manufacturing Date" style={{ width: "100%" }} value={manufacturingDate} onChange={(event) => setManufacturingDate(event.currentTarget.value)} />

            <TextInput radius="sm" size='sm' withAsterisk label="Expired in (Days)" style={{ width: "100%" }} value={expiryDate} onChange={(event) => setExpiryDate(event.currentTarget.value)} />

            <TextInput radius="sm" size='sm' withAsterisk label="Product Name" style={{ width: "100%" }} value={productName} onChange={(event) => setProductName(event.currentTarget.value)} />

            <Radio.Group
                value={value}
                onChange={setValue}
                name="favoriteFramework"
                label="Choose Prodcut Type" radius="sm" size='sm'
            >
                <Radio value="individual" label="Individual" />
                <Radio value="batch" label="Batch" />
            </Radio.Group>
            
            <TextInput radius="sm" size='sm' label="Product ID" description="F0212522542" style={{ width: "100%" }} />
            <FileInput radius="sm" size='sm' label="Product Image" placeholder="jpeg, png" icon={<IconUpload size={14} />} style={{ width: "100%" }} />

            <Title order={3}>General Information</Title>

            <TextInput radius="sm" size='sm' label="Expired in (Days)" style={{ width: "100%" }} value={expiryDate} onChange={(event) => setExpiryDate(event.currentTarget.value)} />

            <Group position='apart' style={{ width: "100%" }}>
                <Text>Side Effects</Text>
                <ActionIcon variant='filled'>
                    <IconPlus onClick={addSideEffect} />
                </ActionIcon>
            </Group>
            {
                sideEffects
            }
        </Group>
      </Group>
     );
}
 
export default AddProduct;