import S from "./Home.module.scss";
import Header from "./components/Header";
import TournamentsList from "./components/TournamentsList";

const Home = () => {
  return (
    <div className={S.bgApp}>
      <div className={S.contaienr}>
        <Header />
        <TournamentsList />
      </div>
    </div>
  );
};

export default Home;
