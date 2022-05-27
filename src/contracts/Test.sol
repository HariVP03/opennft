// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.13;

contract Test {
    address public name;
    uint public howManyTimesSex;

    function setBodyCount(uint _num) public {
        name = msg.sender;
        howManyTimesSex = _num;
    }
}
