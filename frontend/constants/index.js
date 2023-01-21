export const PHARMA_ADDRESS = '0xEA2bFa6f70CffF78b897D1877c2d04688CB84c94'
export const PHARMA_ABI = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_email",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "manufacturerName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "barcodeId",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "buyerName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "buyerEmail",
          "type": "string"
        }
      ],
      "name": "ItemOwnershipTransfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "enum Types.AccountRole",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "LostAccount",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "email",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "enum Types.AccountRole",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "NewAccount",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "manufacturerName",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "barcodeId",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "manufacturedDate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "expiringDate",
          "type": "uint256"
        }
      ],
      "name": "NewItem",
      "type": "event"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "manufacturerName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "manufacturer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "manufacturedDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiringDate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isInBatch",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "batchCount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "barcodeId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "itemImage",
              "type": "string"
            },
            {
              "internalType": "enum Types.ItemType",
              "name": "itemType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "usage",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "others",
              "type": "string[]"
            }
          ],
          "internalType": "struct Types.Item",
          "name": "_item",
          "type": "tuple"
        },
        {
          "internalType": "uint256",
          "name": "currentTime_",
          "type": "uint256"
        }
      ],
      "name": "addNewItem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "components": [
            {
              "internalType": "enum Types.AccountRole",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "accountId",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            }
          ],
          "internalType": "struct Types.AccountDetails",
          "name": "account_",
          "type": "tuple"
        }
      ],
      "name": "addParty",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "Id",
          "type": "address"
        }
      ],
      "name": "getAccountDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "enum Types.AccountRole",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "accountId",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            }
          ],
          "internalType": "struct Types.AccountDetails",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllItems",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "manufacturerName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "manufacturer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "manufacturedDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiringDate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isInBatch",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "batchCount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "barcodeId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "itemImage",
              "type": "string"
            },
            {
              "internalType": "enum Types.ItemType",
              "name": "itemType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "usage",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "others",
              "type": "string[]"
            }
          ],
          "internalType": "struct Types.Item[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMyAccountsList",
      "outputs": [
        {
          "components": [
            {
              "internalType": "enum Types.AccountRole",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "accountId",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            }
          ],
          "internalType": "struct Types.AccountDetails[]",
          "name": "accountsList_",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMyDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "enum Types.AccountRole",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "accountId",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "email",
              "type": "string"
            }
          ],
          "internalType": "struct Types.AccountDetails",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMyItems",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "manufacturerName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "manufacturer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "manufacturedDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiringDate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isInBatch",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "batchCount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "barcodeId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "itemImage",
              "type": "string"
            },
            {
              "internalType": "enum Types.ItemType",
              "name": "itemType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "usage",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "others",
              "type": "string[]"
            }
          ],
          "internalType": "struct Types.Item[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "barcodeId",
          "type": "string"
        }
      ],
      "name": "getSingleItem",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "manufacturerName",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "manufacturer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "manufacturedDate",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiringDate",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "isInBatch",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "batchCount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "barcodeId",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "itemImage",
              "type": "string"
            },
            {
              "internalType": "enum Types.ItemType",
              "name": "itemType",
              "type": "uint8"
            },
            {
              "internalType": "string",
              "name": "usage",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "others",
              "type": "string[]"
            }
          ],
          "internalType": "struct Types.Item",
          "name": "",
          "type": "tuple"
        },
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "accountId",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Types.AccountTransactions",
              "name": "manufacturer",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "accountId",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Types.AccountTransactions",
              "name": "distributor",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "accountId",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Types.AccountTransactions",
              "name": "retailer",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "accountId",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Types.AccountTransactions[]",
              "name": "customers",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct Types.ItemHistory",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "partyId",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "barcodeId",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "currentTime_",
          "type": "uint256"
        }
      ],
      "name": "sellItem",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]