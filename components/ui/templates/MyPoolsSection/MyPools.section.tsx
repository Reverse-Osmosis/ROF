import { MyPools } from "./MyPools.styled";
import Card from "../../organisms/CardOrganism/Card.organism";
import { useEffect } from "react";
import { useWallet } from "@cosmos-kit/react";
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";

const MyPoolsSection = () => {
  const {
    getStargateClient,
    getCosmWasmClient,
    address,
    setCurrentChain,
    currentWallet,
    walletStatus,
    currentChainName,

    chainNames,
  } = useWallet();

  useEffect(() => {
    setCurrentChain("osmosistestnet");
  }, []);
  useEffect(() => {
    if (currentChainName !== "osmosistestnet") {
      return;
    }
    (async () => {
      let contracts = [
        {
          lockdrop_addr:
            "osmo1wulgfp7u08x6an5enwqpmy2alffdaqgyfjg3y8svrfnnflgxla4q04mzj9",
          title: "Celestia",
          launchDate: "2022-10-03T14:11:55.008Z",
          gammTokenLabel: "ATOM,OSMO",
          tokenName: "CEL",
        },
      ];

      let data = [];
      let cw = await CosmWasmClient.connect(
        "https://testnet-rpc.osmosis.zone:443"
      );
      console.log({ cw, chainNames });
      for (let item of contracts) {
        let { reward_contracts } = await cw?.queryContractSmart(
          item.lockdrop_addr,
          {
            all_reward_contracts: {},
          }
        );
        let rewards = [];
        for (let reward_contract of reward_contracts) {
          // 443;
          // data: config: manager: osmo1wulgfp7u08x6an5enwqpmy2alffdaqgyfjg3y8svrfnnflgxla4q04mzj9;
          // owner: osmo1wulgfp7u08x6an5enwqpmy2alffdaqgyfjg3y8svrfnnflgxla4q04mzj9;
          // reward_token: native: gamm / pool / 691;
          // staking_contract: osmo1wulgfp7u08x6an5enwqpmy2alffdaqgyfjg3y8svrfnnflgxla4q04mzj9;
          // reward: period_finish: 6.978887e6;
          // reward_duration: 24;
          // reward_rate: "4166666666666666666";
          let {
            config: { manager, owner, reward_token, staking_contract },
            reward: { period_finish, reward_duration, reward_rate },
          } = await cw.queryContractSmart(reward_contract, { info: {} });
          // data: address: osmo14hcxlnwlqtq75ttaxf674vk6mafspg8xwgnn53;
          // denom: native: gamm / pool / 691;
          // last_update_block: 6.978863e6;
          // pending_rewards: "99999999999999999984";
          let { pending_rewards } = currentWallet?.address
            ? await cw.queryContractSmart(reward_contract, {
                get_pending_rewards: {
                  address: currentWallet?.address,
                },
              })
            : { pending_rewards: "0" };
          rewards.push({
            gamm_token: reward_token,
            contract_addr: reward_contract,
            pending_rewards,
          });
        }
        data.push({
          meta: item,
          rewards,
          async claimRewards() {
            //   @ts-ignore
            await window.keplr.enable("osmo-test-4");
            let client = await SigningCosmWasmClient.connectWithSigner(
              "https://testnet-rpc.osmosis.zone:443",
              // @ts-ignore
              await window.keplr.getOfflineSigner()
            );
            for (let rwd of this.rewards) {
              await client.execute(
                currentWallet!.address,
                rwd.contract_addr,
                {
                  claim: {},
                },
                "auto"
              );
            }
          },
        });
      }
      console.log({ data });
    })();
  }, [currentChainName, getCosmWasmClient]);
  return (
    <MyPools>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </MyPools>
  );
};

export default MyPoolsSection;
