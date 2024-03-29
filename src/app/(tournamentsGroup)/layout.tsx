import S from "./Home.module.scss";

const TournamentsLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className={S.bgApp}>
      <div className={S.contaienr}>{props.children}</div>
    </div>
  );
};

export default TournamentsLayout;
