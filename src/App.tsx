import "./App.css";
import { Counter } from "./components/Counter";
import { TransferAvax } from "./components/TransferAvax";
import styled from "styled-components";
import { FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { createThirdwebClient } from "thirdweb";
import { avalancheFuji } from "thirdweb/chains";

const StyledApp = styled.div`
  background-color: #E84142;
  color: white;

  @media (prefers-color-scheme: dark) {
    background-color: #E84142;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

if (!import.meta.env.VITE_THIRDWEB_CLIENT_ID) {
  throw new Error("THIRDWEB_CLIENT_ID is required");
}

export const client = createThirdwebClient({ clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID });

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "email",
        "phone",
      ],
    },
  }),
  createWallet("app.core"),
  createWallet("walletConnect")
];

function App() {

  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <ConnectButton client={client} wallets={wallets} chain={avalancheFuji} showAllWallets={false} />
          </FlexBoxRow>
          <TransferAvax />
          <Counter />
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
