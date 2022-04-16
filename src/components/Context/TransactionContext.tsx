import { createContext, ReactNode, useEffect, useState } from "react";
import { Api } from "../../services/api";

export interface ITransaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

interface ITransactionProviderProps {
  children: ReactNode;
}

type ITransactionInput = Omit<ITransaction, "id" | "createdAt">;

interface ITransactionContextProps {
  transactions: ITransaction[];
  createTransaction: (transaction: ITransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<ITransactionContextProps>(
  {} as ITransactionContextProps
);

export const TransactionProvider = ({
  children,
}: ITransactionProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function createTransaction(transactionInput: ITransactionInput) {
    const response = await Api.post("/transactions", transactionInput);

    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  useEffect(() => {
    Api.get("http://localhost:3000/api/transations").then((response) => {
      setTransactions(response.data.transactions);
    });
  }, []);

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
