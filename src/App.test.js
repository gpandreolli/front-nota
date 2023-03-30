import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  /*--#304d63 - azul escuro
--#b2e7e8 - azul claro
#8fb9aa - verde claro
#f2d096 - amarelo
#e8975 - laranja*/
});
