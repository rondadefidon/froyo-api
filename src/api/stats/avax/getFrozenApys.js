const { avaxWeb3: web3 } = require('../../../utils/web3');
const { AVAX_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const pools = require('../../../data/avax/frozenLpPools.json');
import { joeClient } from '../../../apollo/client';
import { JOE_LPF } from '../../../constants';

const getFrozenApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0x26B1c7fD822Ef80111F94fd3A0B6ffeAa2d6a935',
    tokenPerBlock: 'tSharePerSecond',
    hasMultiplier: false,
    pools: pools,
    oracleId: 'FLOT',
    oracle: 'tokens',
    decimals: '1e18',
    secondsPerBlock: 1,
    tradingFeeInfoClient: joeClient,
    liquidityProviderFee: JOE_LPF,
    // log: true,
  });

module.exports = getFrozenApys;
