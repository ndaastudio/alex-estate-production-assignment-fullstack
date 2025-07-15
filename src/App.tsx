import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/not-found";
import Transaction from "./pages/transaction";
import Layout from "./components/Layout";
import OtherPage from "./pages/other-page";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Transaction />} />
            <Route path="/finansial/transaksi" element={<Transaction />} />
            <Route path="/finansial/*" element={<OtherPage />} />
            <Route path="/teknis/*" element={<OtherPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
