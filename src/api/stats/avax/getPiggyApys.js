const { avaxWeb3: web3 } = require('../../../utils/web3');
const { AVAX_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const pools = require('../../../data/avax/piggyLpPools.json');
import { joeClient } from '../../../apollo/client';
import { JOE_LPF } from '../../../constants';

const getPiggyApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0xA880Ab40395A6C00f0bf4c105bB7eAA06A8a1B62',
    tokenPerBlock: 'pSharePerSecond',
    hasMultiplier: false,
    pools: pools,
    oracleId: 'PSHARE',
    oracle: 'tokens',
    decimals: '1e18',
    secondsPerBlock: 1,
    tradingFeeInfoClient: joeClient,
    liquidityProviderFee: JOE_LPF,
    // log: true,
  });

module.exports = getPiggyApys;
