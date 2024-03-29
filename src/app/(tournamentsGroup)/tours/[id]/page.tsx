import Header from "./componenst/Header";
import S from "../../Home.module.scss";
import Table from "./componenst/Table";
import Players from "./componenst/Players";

type TourProps = {
  params: { id: number };
};

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
