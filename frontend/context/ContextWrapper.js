import AppContext from "./AppContext";
import { ethers, providers, Contract } from "ethers";
import { useEffect, useRef, useState } from "react";
import { getCustomDateEpoch } from '../utils/utils';
import { PHARMA_ABI, PHARMA_ADDRESS } from '../constants/index'

import { fetchSigner } from '@wagmi/core'


function ContextWrapper ({ children }) {

    const [users, setUsers] = useState([]);
    const [usersList, setUsersList] = useState();
    const [loading, setLoading] = useState(false);

    const [walletConnected, setWalletConnected] = useState(false);
    const web3ModalRef = useRef();

    // user state
    const [user, setUser] = useState({
        role: 1, // Role ID ie 0,1,2,3,4
        accountId: '', // metamask address
        name: '',
        email: '',
    });
    const handleUserChange = (e, name) => {
        setUser((prevState)=>({...prevState, [name]: e.target.value}));
    }

    const saveUser = async() => {
        try {
            if(walletConnected) {

                const signer = await getProviderOrSigner(true);
        
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                );
                
                const tx = await contractInstance.addParty(user);

                setLoading(true)
                await tx.wait()
                setLoading(false)

                // get users list
                await getMyAccountsList()
                
            }
        } catch (error) {
            console.log('Could not add user', error);
        }
    }

    const getMyAccountsList = async() => {
        try {
            if(walletConnected) {
 
                const signer = await fetchSigner()
        
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                );
                
                const myUsersList = await contractInstance.getMyAccountsList();
                setUsersList(myUsersList)                                
            }
        } catch (error) {
            console.log('Could not add user', error);
        }
    }

    const getAccountDetails = async() => {
        
        try {
            if(walletConnected) {

                const signer = await getProviderOrSigner(true);
                const address = await signer.getAddress()
        
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                );
                    
                const myDetails = await contractInstance.getAccountDetails(address);
                console.log("🚀 ~ file: ContextWrapper.js:96 ~ getAccountDetails ~ myDetails", myDetails)

                return myDetails;
                                
            }
            return null;    
        } catch (error) {
            console.log('Could not add user', error);
            return null;
        }
    }

    // ============PRODUCTS===========
    // const [product, setProduct] = useState({
    //     manufacturerName: null,
    //     manufacturer: null,
    //     name: null,
    //     isInBatch: null,
    //     batchCount: null,
    //     expDateEpoch: null,
    //     manDateEpoch: null,
    //     barcodeId: null,
    //     productImage: null,
    //     productType: null,
    //     scientificName: null,
    //     usage: null,
    //     composition: null,
    //     sideEffects: null,
    //     productHistory: null,
    //   });

    // const handleProductChange = async(e, name) => {

    //     setProduct((prevState) => {
    //         if (name === 'expDateEpoch' || name === 'manDateEpoch') {
    //             return {...prevState, [name]: getCustomDateEpoch(e.target.value)}
    //         } else if (name == 'sideEffects' || name === 'composition') {
    //             return {...prevState, [name]: e}
    //         } else {
    //             return {...prevState, [name]: e.target?.value}
    //         }
    //     });
    // }

    const saveItem = async(item) => {
        try {
            if(walletConnected) {

                const signer = await getProviderOrSigner(true);
                const address = await signer.getAddress();
                const gasPrice = await signer.getGasPrice();
                console.log("🚀 ~ file: ContextWrapper.js:142 ~ saveItem ~ gasPrice", ethers.utils.formatEther(gasPrice))
        
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                );

                // configure item obj
                item.manufacturedDate = getCustomDateEpoch(item.manufacturedDate);
                item.expiringDate = getCustomDateEpoch(item.expiringDate);
                item.isInBatch = false;
                item.batchCount = 0;
                item = {...item, 'manufacturer': address }
                console.log("🚀 ~ file: ContextWrapper.js:151 ~ saveItem ~ item", item)
                
                // prep arguments
                const currentTimestamp = Math.round(Date.now() / 1000);

                const addedItem = await contractInstance.addNewItem(item, currentTimestamp);
                console.log("🚀 ~ file: ContextWrapper.js:151 ~ saveItem ~ addedItem", addedItem)
                
            }
        } catch (error) {
            console.log('Could not add item', error);
        }
    }

    const getAllItems = async() => {
        try {
            if(walletConnected) {

                const signer = await getProviderOrSigner(true);
        
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                );
                
                const allItems = await contractInstance.getAllItems();
                console.log("🚀 ~ file: ContextWrapper.js:149 ~ getAllItems ~ allItems", allItems)

                return allItems;
                
            }
        } catch (error) {
            console.log('Could not add user', error);
        }
    }

    const getMyItems = async() => {
        try {
            if(walletConnected) {

                const signer = await getProviderOrSigner(true);
        
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                );
                
                const myItems = await contractInstance.getMyItems();
                console.log("🚀 ~ file: ContextWrapper.js:173 ~ getMyItems ~ myItems", myItems)

                return myItems;
                
            }
        } catch (error) {
            console.log('Could not add user', error);
        }
    }

    const getSingleItem = async(barcodeId) => {
        
        try {
            if(walletConnected) {
                
                const signer = await getProviderOrSigner(true);
                
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                );
                
                const item = await contractInstance.getSingleItem( barcodeId );

                console.log("🚀 ~ file: ContextWrapper.js:201 ~ myItems", item);

                return item
            }
        } catch (error) {
            console.log('Could not sell item', error);
            return null;
        }
    }  

    const sellItem = async(barcodeId) => {
        
        try {
            if(walletConnected) {
                
                const signer = await getProviderOrSigner(true);
                
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                    );
                    
                const address = await signer.getAddress() // metamast address of current user
                const currentTimestamp = Date.now(); // current time epoch
                
                const response = await contractInstance.sellItem(address, barcodeId, currentTimestamp);
                console.log("🚀 ~ file: ContextWrapper.js:247 ~ sellItem ~ response", response)

            }
        } catch (error) {
            console.log('Could not sell item', error);
            return null;
        }
    }   
                

    // product history
    const [productHistory, setProductHistory] = useState({
        manufacturer: null,
        supplier: null,
        vendor: null,
        customers: null,
    });
    const handleProductHistoryChange = (e, name) => {
        setProductHistory((prevState)=>({...prevState, [name]: e.target.value}));
        console.log(productHistory);
    }

    return (
        <AppContext.Provider value={{
            loading,
            walletConnected, 
            productHistory,
            user,
            users,
            usersList,
            handleUserChange,
            setUser,
            setProductHistory,
            handleProductHistoryChange,
            saveUser,
            saveItem,
            getAllItems,
            getAccountDetails,
            getMyAccountsList,
            getMyItems,
            sellItem,
            getSingleItem,
        }}>
            {children}
        </AppContext.Provider>
    );
}


export default ContextWrapper;
