import { useEffect } from "react";
import { Api } from "../../services/api";
import { Container } from "./style";

export function TransationTable() {
  useEffect(() => {
    Api.get("http://localhost:3000/api/transations").then((response) =>
      console.log(response.data)
    );
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desevolvimento de web site</td>
            <td className="deposit">R$ 12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="widthdraw">R$ - 1100,00</td>
            <td>Casa</td>
            <td>17/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
