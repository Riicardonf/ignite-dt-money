import { Container } from "./styles";
import { Summary } from "../Summary"
import { TransactionsTable } from "components/TransactionsTable";

export function Dashboard(){
  return(
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}