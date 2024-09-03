import { useState } from "react";
import { Card, FlexBoxCol, FlexBoxRow, Input } from "./styled/styled";
import { TransactionButton, useSendTransaction } from "thirdweb/react";
import { prepareTransaction, toWei } from "thirdweb";
import { avalancheFuji } from "thirdweb/chains";
import { client } from "../App";

export function TransferAvax() {

  const [avaxAmount, setAvaxAmount] = useState("0.01");
  const [avaxRecipient, setAvaxRecipient] = useState(
    "0x0ecD30EDDB3c34a919BF8dcB4dA71DEA3c49A93D"
  );

  return (
    <Card>
      <FlexBoxCol>
        <h3>Transfer Fuji AVAX</h3>
        <FlexBoxRow>
          <label>Amount </label>
          <Input
            style={{ marginRight: 8 }}
            type="number"
            value={avaxAmount}
            onChange={(e) => setAvaxAmount(e.target.value)}
          ></Input>
        </FlexBoxRow>
        <FlexBoxRow>
          <label>To </label>
          <Input
            style={{ marginRight: 8 }}
            value={avaxRecipient}
            onChange={(e) => setAvaxRecipient(e.target.value)}
          ></Input>
        </FlexBoxRow>
        <TransactionButton
            transaction={() => {
              const transaction = prepareTransaction({
                to: avaxRecipient,
                chain: avalancheFuji,
                client: client,
                value: toWei(avaxAmount),
            });
            return transaction;
            }}
            onTransactionConfirmed={() => { console.log("Transaction confirmed") }}
            onError={() => { console.log("Transaction error") }}
          >
            Confirm Transaction
        </TransactionButton>
      </FlexBoxCol>
    </Card>
  );
}
