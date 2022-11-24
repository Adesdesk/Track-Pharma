// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;



import "./Items.sol";
import "./Accounts.sol";

/**
 * @title TrackPharma
  * @author TEAM201
  * @dev Transparently track the path of items along the supply chain
 */

contract TrackPharma is Accounts, Items {
   

//  create new account on creation and set role to Manufacturer
    constructor(string memory _name, string memory _email) {
        Types.AccountDetails memory _acctDetails = Types.AccountDetails({
            role: Types.AccountRole.Manufacturer,
            accountId: msg.sender,
            name: _name,
            email: _email
        });
        add(_acctDetails);
    }

// get list of all the items added per account
 function getAllItems() public view returns (Types.Item[] memory) {
        return items;
    }

// get account items 
function getMyItems() public view returns (Types.Item[] memory) {
        return getAccountItems();
    }


// Get single item from the list
function getSingleItem(string memory barcodeId)
        public
        view
        returns (Types.Item memory, Types.ItemHistory memory)
    {
        return getSpecificItem(barcodeId);
    }

function addNewItem(Types.Item memory _item, uint256 currentTime_)
        public
        onlyManufacturer
    {
        addItem(_item, currentTime_);
    }

// sell item i.e transfer ownership to another user 
 function sellItem(
        address partyId,
        string memory barcodeId,
        uint256 currentTime_
    ) public {
        require(isPartyExists(partyId), "Party not found");
        Types.AccountDetails memory party_ = accounts[partyId];
        sell(partyId, barcodeId, party_, currentTime_);
    }


    // add user to my account which can be used in the future
     function addParty(Types.AccountDetails memory account_) public {
        addparty(account_, msg.sender);
    }

    // get details of the user
     function getAccountDetails(address Id)
        public
        view
        returns (Types.AccountDetails memory)
    {
        return getPartyDetails(Id);
    }

// get details of currently signed in account  
 function getMyDetails() public view returns (Types.AccountDetails memory) {
        return getPartyDetails(msg.sender);
    }

    // get list of all account added by currently operating account
    function getMyAccountsList()
        public
        view
        returns (Types.AccountDetails[] memory accountsList_)
    {
        return getMyPartyList(msg.sender);
    }






} //END OF CONTRACT
