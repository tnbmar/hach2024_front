"use client";

import Image from "next/image";
import S from "./Rewards.module.scss";
import { RewardItem, RewardStatus } from "@/types";
import { useMemo } from "react";
import classNames from "classnames";
import { useUserStore } from "@/stores/user";

const Rewards = ({ rewards }: { rewards: RewardItem[] }) => {
  const { user } = useUserStore();
  const calculateDesc = (status: RewardStatus) => {
    switch (status) {
      case "AUTH":
        return "Регистрация на сайте!";
      case "MATCH":
        return "За победу в матче!";
      case "MORE_MATCH":
        return "За 20 побед!";
    }
  };

  return (
    <>
      {user && (
        <nav className={S.navWrap}>
          <span className={S.title}>Достижения</span>
          {rewards && (
            <div className={S.rightWrapper}>
              {rewards.map((elem) => {
                return (
                  <div
                    key={elem.id}
                    className={classNames(S.attrColumn, {
                      [S.disabled]: !user?.rewards?.find(
                        (rew) => rew.status === elem.status
                      ),
                    })}
                  >
                    <Image
                      src={elem.icon}
                      width={80}
                      height={80}
                      alt="img"
                      style={{ borderRadius: "10px" }}
                    />

                    <div className={S.attrText}>
                      <span className={S.attrColumnLabel}>{elem.name}</span>
                      <span className={S.attrColumnValue}>
                        {calculateDesc(elem.status)}
                      </span>
                    </div>
                  </div>
                );
              })}
              <div className={classNames(S.attrColumn, S.disabled)}>
                <Image
                  src="https://i.ibb.co/883bNL1/f63c063d-8aca-45b9-8c94-13c8fdc9d301.png"
                  width={80}
                  height={80}
                  alt="img"
                  style={{ borderRadius: "10px" }}
                />
                <div className={S.attrText}>
                  <span className={S.attrColumnLabel}>Настоящий герой</span>
                  <span className={S.attrColumnValue}>{calculateDesc("MORE_MATCH")}</span>
                </div>
              </div>
            </div>
          )}
        </nav>
      )}
    </>
  );
};

export default Rewards;
