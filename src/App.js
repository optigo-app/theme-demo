import React, { Suspense } from "react";

// ** Router Import
import Router from "./router/Router";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <Suspense fallback={null}>
      <RecoilRoot>
      <Router />
      </RecoilRoot>
    </Suspense>
  );
};

export default App;
