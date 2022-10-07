import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

const Index = lazy(() => import("./view/Index"));
const Sandbox = lazy(() => import("./view/Sandbox"));

function App() {
  return (
    <>
    {/* <Header /> */}
      <Routes>
        <Route path="/" element={
            <Suspense>
              <Index />
            </Suspense>
          }
        />
        <Route path="sandbox" element={
          <Suspense>
            <Sandbox />
          </Suspense>
        } 
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
