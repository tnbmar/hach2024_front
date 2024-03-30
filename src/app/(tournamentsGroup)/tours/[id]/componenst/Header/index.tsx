"use client";

import Link from "next/link";
import S from "./Header.module.scss";
import { URLS } from "@/constants/urls";
import Back from "icons/back.svg";
import Badge from "@/ui/Badge";
import Button from "@/ui/Button";
import { Info } from "@/types";
import EthIcon from "icons/eth.svg";
import { useEffect, useState } from "react";
import { getTurnamentDeposit } from "@/core/getTurnamentDeposit";

const Header = ({ info, blockchain_id }: { info: Info; blockchain_id: number }) => {
  const [deposit, setDeposit] = useState<String | null>(null);

  useEffect(() => {
    if (blockchain_id) {
      getTurnamentDeposit(15).then((fetchedDeposit) => {
        setDeposit(String(fetchedDeposit));
      });
    }
  }, [blockchain_id]);

  return (
    <div className={S.wrap}>
      <div className={S.leftWrap}>
        <Link href={URLS.MAIN}>
          <div className={S.link}>
            <Back width={24} height={24} />
            Назад
          </div>
        </Link>

        <span className={S.name}>{info.name}</span>
        <Badge status={info.status}>{info.status}</Badge>
      </div>

      <div className={S.rightWrap}>
        <span className={S.bank}>Банк:</span>
        <Button className={S.bankLabel}>
          {deposit}
          <EthIcon width={24} height={24} />
        </Button>
      </div>

      <div className={S.winner}>
        <span className={S.winner_name}>Победитель</span>
        <span className={S.winner_name}>{info.winner?.username}</span>
      </div>
    </div>
  );
};

export default Header;
