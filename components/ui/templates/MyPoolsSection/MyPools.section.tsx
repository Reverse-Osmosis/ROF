import { MyPools } from "./MyPools.styled";
import Card from "../../organisms/CardOrganism/Card.organism";
import { useEffect, useState } from "react";
import { useWallet } from "@cosmos-kit/react";
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from "@cosmjs/cosmwasm-stargate";
import { Coin, coins } from "@cosmjs/stargate";
import * as osmojs from "osmojs";

type RewardItem = {
  gamm_token: string;
  contract_addr: string;
  pending_rewards: string;
};
type ContractData = {
  meta: {
    lockdrop_addr: string;
    title: string;
    launchDate: string;
    gammTokenLabel: string;
    tokenName: string;
  };
  gamm_staking_denom: string;
  gamm_staking_denom_balance: Coin;
  rewards: RewardItem[];
  stakedValue: string;
  claimRewards: () => Promise<any>;
  stakeTokens: () => Promise<any>;
};

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
  let [contractListState, setContractListState] = useState<ContractData[]>([]);
  let [gammBalances, setGammBalances] = useState<Coin[]>([]);

  useEffect(() => {
    (async () => {
      if (!contractListState.length) return;
      let tokens = new Set<string>();
      contractListState.forEach((c) => {
        c.rewards.forEach((r) => tokens.add(r.gamm_token));
      });
      let cw = await CosmWasmClient.connect(
        "https://testnet-rpc.osmosis.zone:443"
      );
      let bals = [] as Coin[];
      for (let t of tokens) {
        // @ts-ignore
        let key = (await window.keplr.getKey("osmo-test-4")).bech32Address;
        console.log({ denom: t });
        let balance = await cw.getBalance(key, t);
        bals.push(balance);
      }
      setGammBalances(bals);
    })();
  }, [contractListState]);
  useEffect(() => {
    if (currentChainName !== "osmosistestnet") {
      return;
    }
    (async () => {
      let contracts = [
        {
          lockdrop_addr:
            "osmo1wulgfp7u08x6an5enwqpmy2alffdaqgyfjg3y8svrfnnflgxla4q04mzj9",
          title: "Wosmosis",
          launchDate: "2022-11-03T14:11:55.008Z",
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
        let { denom: gamm_staking_denom } = await cw?.queryContractSmart(
          item.lockdrop_addr,
          {
            get_config: {},
          }
        );
        //  @ts-ignore
        let key = (await window.keplr.getKey("osmo-test-4")).bech32Address;
        let gamm_staking_denom_balance = await cw.getBalance(
          key,
          gamm_staking_denom
        );
        let { reward_contracts } = await cw?.queryContractSmart(
          item.lockdrop_addr,
          {
            all_reward_contracts: {},
          }
        );

        let { value: stakedValue } = key
          ? await cw?.queryContractSmart(item.lockdrop_addr, {
              staked_value: { address: key },
            })
          : { value: "0" };

        let rewards = [] as RewardItem[];
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
          let { pending_rewards } = key
            ? await cw.queryContractSmart(reward_contract, {
                get_pending_rewards: {
                  address: key,
                },
              })
            : { pending_rewards: "0" };
          rewards.push({
            gamm_token: reward_token.native,
            contract_addr: reward_contract,
            pending_rewards,
          });
        }
        data.push({
          meta: item,
          rewards,
          stakedValue,
          gamm_staking_denom,
          gamm_staking_denom_balance,
          async claimRewards() {
            //   @ts-ignore
            await window.keplr.enable("osmo-test-4");
            let client = await SigningCosmWasmClient.connectWithSigner(
              "https://testnet-rpc.osmosis.zone:443",
              // @ts-ignore
              await window.keplr.getOfflineSignerAuto("osmo-test-4")
            );
            //   @ts-ignore
            let key = (await window.keplr.getKey("osmo-test-4")).bech32Address;
            for (let rwd of rewards) {
              await client
                .execute(
                  key,
                  rwd.contract_addr,
                  {
                    claim: {},
                  },
                  {
                    amount: coins("1000000", "uosmo"),
                    gas: "1000000",
                  }
                )
                .then(() => {
                  alert("success!");
                  window.location.reload();
                });
            }
          },
          async stakeTokens() {
            const ctr = item;
            let amount_to_stake =
              prompt(
                `How much of ${gamm_staking_denom} would you like to stake? (maximum by default)`,
                gamm_staking_denom_balance.amount
              ) || "0";
            //   @ts-ignore
            await window.keplr.enable("osmo-test-4");
            let client = await SigningCosmWasmClient.connectWithSigner(
              "https://testnet-rpc.osmosis.zone:443",
              // @ts-ignore
              await window.keplr.getOfflineSignerAuto("osmo-test-4")
            );
            //   @ts-ignore
            let key = (await window.keplr.getKey("osmo-test-4")).bech32Address;
            await client
              .execute(
                key,
                item.lockdrop_addr,
                {
                  stake: {},
                },
                {
                  amount: coins("1000000", "uosmo"),
                  gas: "1000000",
                },
                "",
                coins(amount_to_stake, gamm_staking_denom)
              )
              .then(() => {
                alert("success!");
                window.location.reload();
              });
          },
        });
      }
      setContractListState(data as []);
      console.log({ data });
    })();
  }, [currentChainName, getCosmWasmClient]);
  return (
    <>
      <MyPools>
        {contractListState.map((ctr) => {
          return (
            <Card
              key={ctr.meta.lockdrop_addr}
              projectName={ctr.meta.title}
              launchDate={ctr.meta.launchDate}
              lockedGammBalance={ctr.stakedValue + ctr.meta.gammTokenLabel}
              onStake={ctr.stakeTokens}
              onClaim={ctr.claimRewards}
            />
          );
        })}
      </MyPools>
      <h1>Balances</h1>
      {gammBalances.map((g) => {
        return (
          <div key={g.denom}>
            {g.amount}
            {g.denom}
          </div>
        );
      })}
    </>
  );
};

export default MyPoolsSection;
