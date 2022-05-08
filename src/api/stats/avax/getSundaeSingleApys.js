const { avaxWeb3: web3 } = require('../../../utils/web3');
const { AVAX_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const pools = require('../../../data/avax/sundaePool.json');
import { joeClient } from '../../../apollo/client';
import { JOE_LPF } from '../../../constants';

const getSundaeSingleApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0x2971aB78F17dC8EA57718D6D9b2385791029b288',
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

module.exports = getSundaeSingleApys;
