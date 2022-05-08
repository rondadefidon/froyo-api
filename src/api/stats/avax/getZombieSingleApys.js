const { avaxWeb3: web3 } = require('../../../utils/web3');
const { AVAX_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const pools = require('../../../data/avax/zombiePool.json');
import { joeClient } from '../../../apollo/client';
import { JOE_LPF } from '../../../constants';

const getZombieSingleApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0xF051dB01326355303A24bEa002409dcD71d396a0',
    tokenPerBlock: 'tSharePerSecond',
    hasMultiplier: false,
    singlePools: pools,
    oracleId: 'STRAW',
    oracle: 'tokens',
    decimals: '1e18',
    secondsPerBlock: 1,
    tradingFeeInfoClient: joeClient,
    liquidityProviderFee: JOE_LPF,
    // log: true,
  });

module.exports = getZombieSingleApys;
