import { getTournaments } from "@/rest/tournaments";
import Header from "../components/Header";
import TournamentsList from "../components/TournamentsList";
import { cookies } from "next/headers";
import { COOKIES } from "@/constants/cookies";

const Home = async () => {
  const token = cookies().get(COOKIES.TOKEN)?.value;
  const {
    data: { list },
  } = await getTournaments(token);
  return (
    <>
      <Header />
      <TournamentsList list={list} />
    </>
  );
};

export default Home;
