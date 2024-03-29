import Link from "next/link";
import S from "./Header.module.scss";
import { URLS } from "@/urls";
import Back from "icons/back.svg";
import Badge from "@/ui/Badge";
import Button from "@/ui/Button";

const Header = () => {
  return (
    <div className={S.wrap}>
      <div className={S.leftWrap}>
        <Link href={URLS.MAIN}>
          <div className={S.link}>
            <Back width={24} height={24} />
            Назад
          </div>
        </Link>

        <span className={S.name}>Турнир NAME</span>

        <Badge status="wait">wait</Badge>
      </div>

      <div className={S.rightWrap}>
        <span className={S.bank}>Банк</span>
        <Button className={S.bankLabel}>$10</Button>
      </div>
    </div>
  );
};

export default Header;
