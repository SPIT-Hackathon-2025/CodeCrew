// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
@openzeppelin/contracts/token/ERC721/ERC721.sol;

contract OpenSeaGameAsset is ERC721URIStorage, ERC721Enumerable, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    // Base URI for metadata
    string private _baseTokenURI;
    
    // Contract level metadata
    string public contractURI;
    
    // OpenSea proxy registry address (Mumbai testnet)
    address proxyRegistryAddress = 0xff7Ca10aF37178BdD056628eF42fD7F799fAc77c;
    
    constructor(
        string memory name,
        string memory symbol,
        string memory baseURI,
        string memory _contractURI
    ) ERC721(name, symbol) {
        _baseTokenURI = baseURI;
        contractURI = _contractURI;
    }
    
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }
    
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
    
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    
    // Mint new game asset with metadata
    function mintGameAsset(
        address to,
        string memory metadataURI,
        uint256 royaltyPercentage
    ) public onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        
        _mint(to, newTokenId);
        _setTokenURI(newTokenId, metadataURI);
        
        return newTokenId;
    }
    
    // Update base URI
    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }
    
    // Update contract URI
    function setContractURI(string memory _contractURI) public onlyOwner {
        contractURI = _contractURI;
    }
}