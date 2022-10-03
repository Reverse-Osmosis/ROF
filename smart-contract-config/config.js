const {
  HackCw20QueryClient,
  HackCw20Client,
} = require("../codegen/HackCw20.client");

const {
  NativeStakeClient,
  NativeStakeQueryClient,
} = require("../codegen/NativeStake.client");

const contractCw20 =
  "osmo1y0ywcujptlmnx4fgstlqfp7nftc8w5qndsfds9wxwtm0ltjpzp4qdj09j8";
const configFunctions = async (cosmwasmClient, address, listProjects = []) => {
  let config = [];
  for (let project of listProjects) {
    const stake = new NativeStakeClient(
      cosmwasmClient,
      address,
      project.contract
    );
    const stakeQuery = new NativeStakeQueryClient(
      cosmwasmClient,
      project.contract
    );
    project.balance = await stakeQuery.stakedValue({ address: address });
    project.status = project.balance?.value != "0" ? "REDEEM" : "OPEN";
    config.push({ stakeQuery, stake });
  }
  return { config, listProjects };
};

const cw20Config = (cosmwasmClient, address) => {
  const getData = new HackCw20QueryClient(cosmwasmClient, contractCw20);
  const putData = new HackCw20Client(cosmwasmClient, address, contractCw20);
  return { getData, putData };
};

module.exports = { configFunctions, cw20Config };
