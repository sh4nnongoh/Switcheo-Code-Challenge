import React, { FC, ReactElement } from "react";
import Form from "../components/Form";
const Home: FC = (): ReactElement => (
  <div
    className="px-16 py-6 border-1 w-1/3 min-w-fit
    max-w-screen-sm bg-neutral-300 drop-shadow-xl
    rounded"
  >
    <Form />
  </div>
);
export default Home;
