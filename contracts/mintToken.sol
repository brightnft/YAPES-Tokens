//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract mintToken is ERC20, Ownable{


    uint256 initialSupply = 21000000000000000000000000;
    constructor() ERC20("YAPES","$YAPES") Ownable(msg.sender){
        _mint(msg.sender, initialSupply);
    }

    function mint(uint256 amount, address to) external onlyOwner {
        _mint(to, amount);
    }

}