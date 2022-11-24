// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

/**
 * @title Types
 * @author TEAM201
 * @dev The Program's Custom types
 */

library Types {
    // ENUMS

    // These are the roles available for the users of the platform

    enum AccountRole {
        Manufacturer,
        Distributor,
        Retailer,
        Customer
    }


    // Groups of items supplied by a manufacturer

    enum ItemType {
        Antibiotics, 
        Antimalaria,
        Analgestics,
        Supplements,
        Steroids

    }
    

    // STRUCT

    // this contains account details of the users of the platform  
    struct AccountDetails {
        AccountRole role;
        address accountId;
        string name;
        string email;
    } 

    // this contains the transcation details of the user
    struct AccountTransactions {
        address transactionAddress; // account Address of the user
        uint timestamp; // time of purchase
    }

    struct ItemHistory {
        AccountTransactions manufacturer;
        AccountTransactions distributor;
        AccountTransactions retailer;
        AccountTransactions[] customers; //Array of customers transaction
     
    }

    struct Item {
        string name;
        string manufacturerName;
        address manufacturer;
        uint256 manufacturedDate;
        uint256 expiringDate;
        bool isInBatch; // this is true if the items is sold in batches
        uint256 batchCount; // Items that were packed in single batch
        string barcodeId;
        string itemImage;
        ItemType itemType;
        string usage;
        string[] others; // Other information to share
    }
}
