import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Issues from "./Components/Issues";
import OrderIssues from "./Components/OrderIssue";
import Footer from "./Components/Footer";

function App() {
  const [comp, setComp] = useState("Issuses");

  return (
    <>
      <Header />
      {comp == "Issues" ? <Issues /> : <OrderIssues/>}
      <Footer />
    </>
  );
}

export default App;
