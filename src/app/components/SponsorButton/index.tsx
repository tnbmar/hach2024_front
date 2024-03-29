import { sponsorTournament } from "@/core/sponsorTournament";
import Button from "@/ui/Button";

const SponsorButton = () => {
  return (
    <Button onClick={() => sponsorTournament({ amount: "0.01", id: 2 })}>
      Спонсировать
    </Button>
  );
};

export default SponsorButton;
