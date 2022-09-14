;/ EIP: Ethereum Improvement Protocols/
;/ ERC: Ethereum Request for Comments(BEP, PEP)/

/*https://eips.ethereum.org/EIP/eip-20  */

// ERC20: is the token standard smart contract
// ChainLInk is ERC-677, there are some upgrades to the ERC-20 standard that some tokens choose to take that are still backwards compatible
;/ WHY MAKE ERC-20 TOKEN?/
// 1. Governance Token
// 2. Secure an underlying network
// 3. Create a synthetic asset
// 4. anything else?
;/ CREATING AN ERC-20 TOKEN MANUALLY:/
//Create a directory
//RUN COMM: yarn add --dev hardhat > yarn hardhat > create an empty hardhatconfig.js
// Copy the "hardhat.config.js" and ".env" from previous project
;/In the ERC SC itself you just have to keep track of how much of the token people have/
// The main reason this SC of token works is that there is some balances mapping
;/Openzeppelin/ // and Rari-captial/solmate   //both are libraries
// A library where you can get the boiler plate list of open source SC of ERC tokens and import it use as your own
