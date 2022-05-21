const { cronosWeb3: web3 } = require('../../../utils/web3');
const { CRONOS_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const pools = require('../../../data/cronos/toxicLpPools.json');
//import { mmfClient } from '../../../apollo/client';

const getToxicApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0xf6c3e1B489c1e634a3c66876d5A8E19B1A65B252',
    tokenPerBlock: 'dSharePerSecond',
    hasMultiplier: false,
    pools: pools,
    oracleId: 'XDSHARE',
    oracle: 'tokens',
    decimals: '1e18',
    secondsPerBlock: 1,
    liquidityProviderFee: 0.001,
    // log: true,
  });

module.exports = getToxicApys;
