
import {Group, TextInput, Textarea, Radio, Select, FileInput, useMantineTheme, Title, Text, ActionIcon, Paper, Button } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { IconPlus, IconUpload, IconTrash } from '@tabler/icons';
import { useState } from 'react';

const addSideEffect = () => {
    console.log('hi')
}

type sideEffect = {
    name: string
}

const AddProduct = () => {
  
    const theme = useMantineTheme()
    const [prodcutType, setProdcutType] = useState();
    const [manufacturerName, setManufacturerName] = useState('Team201 LLC');
    const [manufacturerEmail, setManufacturerEmail] = useState('team201@grandida.com');
    const [manufacturingDate, setManufacturingDate] = useState();
    const [expiryDate, setExpiryDate] = useState();
    const [productName, setProductName] = useState();
    const [scientificName, setScientificName] = useState();

    const [sideEffect, addSideEffect] = useState('');
    const [sideEffectsList, addSideEffectsList] = useState([]);

    const [composition, addComposition] = useState('');
    const [compositionList, addCompositionList] = useState([]);


    async function handleAddSideEffect() {
        if (!sideEffect) { return }
        const newListOfSideEffects = [...sideEffectsList, sideEffect];
        addSideEffectsList(newListOfSideEffects)

        addSideEffect('')
    }

    function handleDeleteSideEffect(index) {
        let sideEffectsTemp = [...sideEffectsList]
        sideEffectsTemp.splice(index, 1)
        addSideEffectsList(sideEffectsTemp)
    }

    async function handleAddComposition() {

        if (!composition) { return }
        const newListOfCompositions = [...compositionList, composition];
        addCompositionList(newListOfCompositions)
        addComposition('')
    }

    function handleDeleteComposition(index) {
        let compositionsTemp = [...compositionList]
        compositionsTemp.splice(index, 1)
        addCompositionList(compositionsTemp)
    }

    return ( 
            <Group mx="auto" direction="column" p={"md"} style={{ width: "100%", height:"100%", borderRadius: "10px"}} >
                <Group mx="auto" direction="column" p={"xl"} style={{ 
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], 
                    width: "700px"
                }} >

                    <Title order={3}>Main Information</Title>

                    <TextInput radius="sm" size='sm' withAsterisk disabled label="Manufacturer Name" style={{ width: "100%" }} value={manufacturerName} onChange={(event) => setManufacturerName(event.currentTarget.value)} />

                    <TextInput radius="sm" size='sm' withAsterisk disabled label="Manufacturer Email" style={{ width: "100%" }} value={manufacturerEmail} onChange={(event) => setManufacturerEmail(event.currentTarget.value)} />

                    <TextInput radius="sm" size='sm' withAsterisk label="Manufacturing Date" style={{ width: "100%" }} value={manufacturingDate} onChange={(event) => setManufacturingDate(event.currentTarget.value)} />

                    <TextInput radius="sm" size='sm' withAsterisk label="Expires in (Days)" style={{ width: "100%" }} value={expiryDate} onChange={(event) => setExpiryDate(event.currentTarget.value)} />

                    <TextInput radius="sm" size='sm' withAsterisk label="Product Name" style={{ width: "100%" }} value={productName} onChange={(event) => setProductName(event.currentTarget.value)} />

                    <Radio.Group
                        value={prodcutType}
                        onChange={setProdcutType}
                        name="favoriteFramework"
                        label="Choose Prodcut Type" radius="sm" size='sm'
                    >
                        <Radio value="individual" label="Individual" />
                        <Radio value="batch" label="Batch" />
                    </Radio.Group>
                    
                    <TextInput radius="sm" size='sm' label="Product ID" description="F0212522542" style={{ width: "100%" }} />
                    <FileInput radius="sm" size='sm' label="Product Image" placeholder="jpeg, png" icon={<IconUpload size={14} />} style={{ width: "100%" }} />

                    <Title order={3}>General Information</Title>
                
                    <Select
                    label="Type"
                    placeholder="Choose Type"
                    style={{ width: "100%" }}
                    data={[
                        { value: 'react', label: 'React' },
                        { value: 'ng', label: 'Angular' },
                        { value: 'svelte', label: 'Svelte' },
                        { value: 'vue', label: 'Vue' },
                    ]}
                    />

                    <TextInput radius="sm" size='sm' label="Scientific Name" style={{ width: "100%" }} value={scientificName} onChange={(event) => setScientificName(event.currentTarget.value)} />


                    <Title order={6}>Side Effects</Title>
                    <Group position='apart' style={{ width: "100%" }}>
                        <TextInput radius="sm" size='sm' label="Side Effect" style={{ width: "80%" }} value={sideEffect} onChange={(event) => addSideEffect(event.currentTarget.value)} />
                        <ActionIcon variant='filled' mt={25} size={'sm'} color={'green'}>
                            <IconPlus                                 
                                onClick={handleAddSideEffect}
                            />
                        </ActionIcon>
                    </Group>

                    {
                        sideEffectsList.map((sideEffect, index) => {
                            return (
                                <>
                                    <Group position='apart' key={index} style={{ width: "100%" }}>
                                        <Text>{sideEffect}</Text>
                                        <IconTrash onClick={(index) => handleDeleteSideEffect(index)} color={'red'} size={20} />
                                    </Group>
                                </>
                            )
                        })
                    }

                    <Group position='apart' style={{ width: "100%" }}>
                        <TextInput radius="sm" size='sm' label="Compistions" style={{ width: "80%" }} value={composition} onChange={(event) => addComposition(event.currentTarget.value)} />
                        <ActionIcon variant='filled' mt={25} size={'sm'} color={'green'}>
                            <IconPlus                                 
                                onClick={handleAddComposition}
                            />
                        </ActionIcon>
                    </Group>

                    {
                        compositionList.map((composition, index) => {
                            return (
                                <>
                                    <Group key={index} position='apart' style={{ width: "100%" }}>
                                        <Text>{composition}</Text>
                                        <IconTrash onClick={(index) => handleDeleteComposition(index)} color={'red'} size={20} />
                                    </Group>
                                </>
                            )
                        })
                    }

                    <Textarea
                        placeholder="Enter Usage Details"
                        label="Usage"
                        withAsterisk
                        style={{ width: "100%" }}
                    />

                    <Button variant="gradient" gradient={{ from: 'teal', to: 'yellow', deg: 105 }}>Add Product</Button>
                    
                </Group>
            </Group>
     );
}
 
export default AddProduct;