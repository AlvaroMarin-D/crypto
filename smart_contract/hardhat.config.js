//

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks:{
    goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/FcGuYk9vc-iN3Bp9McCLD6jUKdyPLKlQ',
      accounts: ['c4d3d073a334978442f7d3544e4f6ba71e6f0645d51335b20d19f7c674019336']
    }
  }
}