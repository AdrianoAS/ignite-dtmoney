import LogoImg from "../../assets/logo.svg";

import { Container, Content } from "./style";

interface HeaderProps {
  onIsNewTransactionModalOpen: () => void;
}

export function Header({ onIsNewTransactionModalOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="dt money" />
        <button type="button" onClick={onIsNewTransactionModalOpen}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
