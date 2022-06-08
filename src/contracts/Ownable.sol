// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Ownable {

    address owner;

    constructor() {
        owner = msg.sender;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

    function isOwner() public view returns (bool) {
        return msg.sender == owner;
    }

    modifier onlyOwner() {
        require(isOwner(), "Caller is not the owner");
        _;
    }
}