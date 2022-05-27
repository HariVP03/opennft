// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.13;

contract Proxy {
    address public name;
    uint public howManyTimesSex;

    function setBodyCount(address target, uint _num) public {
        target.delegatecall(
            abi.encodeWithSignature("setBodyCount(uint256)", _num)
        );
    }

}
