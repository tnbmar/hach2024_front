import Header from "./componenst/Header";
import S from "../../Home.module.scss";
import Players from "./componenst/Players";
import dynamic from "next/dynamic";

type TourProps = {
  params: { id: number };
};

const Table = dynamic(() => import("./componenst/Table"), { ssr: false });

const Tour = ({ params }: TourProps) => {
  console.log(params.id);

  return (
    <>
      <Header />
      <div className={S.content}>
        <Table />
        <Players />
      </div>
    </>
  );
};

export default Tour;
