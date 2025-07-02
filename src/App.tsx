import { BrowserRouter } from "react-router";

import { AuthHeader } from "./widgets";

function App() {
  return (
    <BrowserRouter>
      <AuthHeader type="login" />
    </BrowserRouter>
  );
}

export default App;
