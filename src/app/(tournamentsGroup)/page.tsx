import { getTournaments } from "@/rest/tournaments";
import Header from "../components/Header";
import TournamentsList from "../components/TournamentsList";
import { cookies } from "next/headers";
import { COOKIES } from "@/constants/cookies";
import Rewards from "../components/Rewards";
import { getRewards } from "@/rest/rewards";

const Home = async () => {
  const token = cookies().get(COOKIES.TOKEN)?.value;
  try {
    const {
      data: { list },
    } = await getTournaments(token);

    const {
      data: { results: rewards },
    } = await getRewards(token);
    return (
      <>
        <Rewards rewards={rewards} />
        <Header />
        <TournamentsList list={list} />
      </>
    );
  } catch {
    return <div></div>;
  }
};

export default Home;
