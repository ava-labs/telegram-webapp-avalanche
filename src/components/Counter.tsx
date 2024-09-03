import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Ellipsis,
} from "./styled/styled";
import { TransactionButton, useReadContract } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import { avalancheFuji } from "thirdweb/chains";
import { client } from "../App";

export function Counter() {
  const contract = getContract({
    address: "0x7Ff5ca07a5FC4AA062c29E6E32d2691B48598577",
    chain: avalancheFuji,
    client,
  });

  const { data } = useReadContract({
    contract,
    method: "function count() returns (uint)"
  });

  return (
    <div className="Container">
      <Card>
        <FlexBoxCol>
          <h3>Counter</h3>
          <FlexBoxRow>
            <b>Contract Address</b>
            <Ellipsis>{contract.address}</Ellipsis>
          </FlexBoxRow>
          <FlexBoxRow>
            <b>Value</b>
            <div>{String(data) ?? "Loading..."}</div>
          </FlexBoxRow>
          <TransactionButton
            transaction={() => {
              const transaction = prepareContractCall({
                contract,
                method: "function increase()",
                params: [],
              });
            return transaction;
            }}
            onTransactionConfirmed={() => { console.log("Transaction confirmed") }}
            onError={() => { console.log("Transaction error") }}
          >
            Increase Count
        </TransactionButton>

        <TransactionButton
            transaction={() => {
              const transaction = prepareContractCall({
                contract,
                method: "function decrease()",
                params: [],
              });
            return transaction;
            }}
            onTransactionConfirmed={() => { console.log("Transaction confirmed") }}
            onError={() => { console.log("Transaction error") }}
          >
            Decrease Count
        </TransactionButton>
          
        </FlexBoxCol>
      </Card>
    </div>
  );
}
