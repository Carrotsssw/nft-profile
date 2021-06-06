import React from "react";
import { Button } from "@/components";
import { Text } from '@pancakeswap-libs/uikit';
import { connectorLocalStorageKey } from "@/utils/web3React";
import { Login, WalletConfig } from "./types";

interface Props {
  walletConfig: WalletConfig;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <Button
      width="100%"
      variant="tertiary"
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      style={{ justifyContent: "space-between" }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold color="primary" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default WalletCard;
