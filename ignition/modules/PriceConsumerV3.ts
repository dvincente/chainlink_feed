// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const PriceConsumerV3Module = buildModule("PriceConsumerV3Module", (m) => {
  const priceConsumerV3 = m.contract("PriceConsumerV3", []);

  return { priceConsumerV3 };
});

export default PriceConsumerV3Module;
