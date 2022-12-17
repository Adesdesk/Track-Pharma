import { ethers } from "ethers";
import { useCallback, useState } from "react";
import { Product, UserDetails } from "../repository/interfaces";
import { SupplyChainService } from "../repository/supplyChain";
const ContractABI = require("../repository/SupplyChain.json");

export const useApiCall = () => {

  const CONTRACT_ADDRESS = '0xa794211cFBE6534D75cb08f0E4dee1161008d767'

  const apiInstance = SupplyChainService.getInstance();
  
  const [productData, setProductData] = useState<Product>();
  const [loading, setLoading] = useState(false);
  const [productListLoading, setProductListLoading] = useState(false);
  const [myProductListLoading, setMyProductListLoading] = useState(false);
  const [productDetailsLoading, setProductDetailsLoading] = useState(false);
  const [userListLoading, setUserListLoading] = useState(false);

  const [provider, setProvider] = useState<any>(undefined)
  const [signer, setSigner] = useState<any>(undefined)
  const [contract, setContract] = useState<any>(undefined)
  const [signerAddress, setSignerAddress] = useState<string>("")

  const getSigner = async () => {
    provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()
    return signer
  }

  const loadContract = useCallback(async () => {
    try {
      
      // const API_KEY = 'SFH9QsvWk9aagTGGHdHjmsmzAiCWy0m1'
      // const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mainnet.g.alchemy.com/v2/${API_KEY}`);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider)
          
      const signer = provider.getSigner();
      setSigner(signer)
  
      const signerAddress = await signer.getAddress();
      setSignerAddress(signerAddress)
  
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ContractABI["abi"], signer);
      setContract(contract)
      
      console.log(provider, signer, signerAddress, contract)

      return true;

    } catch (error) {
      console.log(error)
    }
  }, [])

  const getUserList = useCallback(async () => {
    try {
      setUserListLoading(true);
      const users = await apiInstance.getMyUsersList();
    } catch (error) {
      console.log(error);
      console.log("Failed to get user");
    } finally {
      setUserListLoading(false);
    }
  }, []);

  const getMyProducts = useCallback(async () => {
    try {
      setMyProductListLoading(true);
      const listData = await apiInstance.getMyProducts();
    } catch (error) {
      console.log(error);
      console.log("Failed to get my products");
    } finally {
      setMyProductListLoading(false);
    }
  }, []);

  const getAllItems = useCallback(async () => {
    try {
      setProductListLoading(true);
      const listData: Product[] = await apiInstance.getAllProducts();

      console.log(listData)

    } catch (error) {
      console.log(error);
      console.log("Could not retrive product list");
    } finally {
      setProductListLoading(false);
    }
  }, []);

  const getProductDetails = useCallback(async (productId: string) => {
    try {
      setProductDetailsLoading(true);
      const productData: Product = await apiInstance.getSingleProducts(
        productId
      );
      setProductData(productData);
    } catch (error) {
      console.log(error);
      console.log("Failed to retrive Product details");
    } finally {
      setProductDetailsLoading(false);
    }
  }, []);

  const getUserDetails = useCallback(async () => {
    try {
      const userDetails: UserDetails = await apiInstance.getMyDetails();
    } catch (error) {
      console.log("Couldnt retrive user details");
    }
  }, []);

  const getIndividualDetails = useCallback(async (id: number) => {
    try {
      const userDetails: UserDetails = await apiInstance.getUserDetail(id.toString());
      return userDetails;
    } catch (error) {
      console.log("Couldnt retrive user details");
    }
  }, []);

  const sellMyProduct = useCallback(
    async (partyAddress: string, productId: string) => {
      try {
        const sellerDetails: boolean = await apiInstance.sellProduct(
          partyAddress,
          productId
        );
        if (sellerDetails) {
          console.log("Product successfully sold");
        }
      } catch (error) {
        console.log("Something went wrong");
      }
    },
    []
  );

  const addMyProduct = useCallback(async (product: Product) => {
    try {
      const productAdded = await apiInstance.addProduct(product);
      if (productAdded) {
        console.log("Transaction to add new product has been initiated.");
        return true;
      }
    } catch (error) {
      console.log("Failed to add product");
    }
  }, []);

  const addUsers = useCallback(async (user: UserDetails) => {
    try {
      setLoading(true);
      const userAdded = await apiInstance.addParty(user);
      console.log(userAdded);
      console.log("user added successfully");
    } catch (error) {
      console.log("Failed to add user");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    getAllItems,
    getProductDetails,
    productData,
    setProductData,
    getUserDetails,
    sellMyProduct,
    addMyProduct,
    addUsers,
    getUserList,
    getMyProducts,
    getIndividualDetails,
    loading,
    userListLoading,
    productListLoading,
    myProductListLoading,
    productDetailsLoading,

    loadContract,
    provider,
    signer,
    contract,
    signerAddress,
  };
};
