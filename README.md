# Track-Pharma
A supply chain management solution for pharmaceutical products

Track-Pharma is a blockchain project by a collaborative effort of members of Team201. It is a decentralized application with which all parties involved in the pharmaceutical supply chain can easily create, store and retrieve certificates of each product history. This is provides an easy way to verify authenticity of pharmaceutical supplies and ensure compliance with standards.

The Problem
Pharmaceutical products’ monitoring authorities encounter difficulties in identifying unauthorized importers and manufacturers of substandard pharmaceutical products. Some of the existing means of keeping track of, and verifying the authenticity of pharmaceutical products, especially in developing countries are limited by the fact that methods of records management can be compromised. More so, with the possibility of regulatory officials being accomplices in the breach of regulatory measures, it has been a huge fight against drug abuse and counterfeiting in many countries. 

Supply chains around the globe are confronted with significant interruption, and the lack of correspondence between key players in the supply chain can adversely affect production and distribution of vital pharmaceutical supplies. Among the effects of these problems have been drug resistance tendencies among the citizenry, caused by abuse of antibiotics and similar medications which do not meet the recommended standards.

The Solution
With more effective and trustless management of the supply chain of these products, pharmaceutical products manufacturers, distributors and retailers can eliminate the dark spots, while delivering trust-worthy products more timely and honorably. Though there have been existing technology-based systems by which the pharmaceutical industry has attempted to manage its products’ supply chain over the years, there have been limitations of inadequate transparency especially for large supply chains which often involve complex transactions.

Track-Pharma implementation as a supply-chain management system for pharmaceutical products
The following were the requirements:

Various user-roles i.e., the Manufacturers, Distributors, and Retailers of pharmaceutical products.
The rules and protocols behind the Track-Pharma smart contract. 
A Blockchain Network – Polygon, for the Contract deployment. Particularly, Polygon Mumbai test network is used for this contract.
A web-based user interface, using Next.js, Tailwind CSS, where users can access information. This is done with a number of assumptions as follows:

i.	Items can only be listed into the database by a manufacturer who deploys the contract.
ii.	A distributor can be added to the database by the manufacturer from whom they buy products.
iii.	A distributor can in turn add retailers to the database and sell them products.
iv.	Retailers can add customers to the database and sell them products.
v.	Every account handling various role except the end users (customers) must do this with an associated Metamask address.
vi.	All accounts have access to details of an item’s history along the supply chain as this is publicly accessible.

The following diagram gives a snapshot of user interaction and product path on Track-Pharma decentralized application.

![Track-Pharma flow diagram](https://user-images.githubusercontent.com/101281102/213938545-e689bbc6-6573-4a2c-aab9-79a8ec7fc92e.JPG)

Track-Pharma is especially relevant in developing nations where importers of pharmaceutical supplies frequently circumvent national standards-setting laws. This solution will ensure that the manufacturer and location of production of certain pharmaceutical products can be clearly traced, and linked to the quality of each supply. Improved public access to high-quality pharmaceuticals and related products, which will result in a more effective healthcare system, will be one effect of this solution. The increased transparency it fosters will deter and perhaps even terminate the illicit production, importation, and distribution of pharmaceutical goods in under-developed, as well as developing countries.
