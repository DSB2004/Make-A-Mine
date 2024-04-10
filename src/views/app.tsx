import { FC, useState, useEffect } from "react"
import Router from '../routes';

import Provider from '../provider';

const App: FC = (): JSX.Element => {

  return (
    <>
      <Provider>
        <Router />
      </Provider>
    </>
  );
}

export default App;
