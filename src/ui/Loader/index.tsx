"use client";

import PacmanLoader from "react-spinners/PacmanLoader";

import S from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={S.loader}>
      <PacmanLoader loading color="#8e8ffa" />
    </div>
  );
};

export default Loader;
