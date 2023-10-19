import { BrowserRouter, Routes, Route } from "react-router-dom";
import Price from "./routes/Price";
import Chart from "./routes/Chart";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
