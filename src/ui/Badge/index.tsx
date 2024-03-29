import classNames from "classnames";
import S from "./Badge.module.scss";

type BadgeProps = {
  status: "wait" | "progress" | "closed";
  children: React.ReactNode;
};

const Badge = (props: BadgeProps) => {
  return <div className={classNames(S.badge, S[props.status])}>{props.children}</div>;
};

export default Badge;
