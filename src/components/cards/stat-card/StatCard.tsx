import React from "react";
import styles from "./StatCard.module.css";
import arrowUpIcon from '../../../assets/svg/card-icons/arrow-up-icon-up.svg'
import arrowDownIcon from '../../../assets/svg/card-icons/arrow-down-red.svg'

interface StatCardProps {
  value: string | number;
  label: string;
  percentage: string; // e.g. "2.5%"
  trend: "up" | "down"; // determines arrow & color
  color?: string; // custom color for main value
}

const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  percentage,
  trend,
  color = "#111827",
}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.value} style={{ color }}>
        {value}
      </h2>

      <div className={styles.footer}>
        <span className={styles.label}>{label}</span>
        <span
          className={`${styles.percentage} ${
            trend === "up" ? styles.up : styles.down
          }`}
        >
          {trend === "up" ? <img src={arrowUpIcon} alt="Up Arrow" /> : <img src={arrowDownIcon} alt="Down Arrow" />}
          {percentage}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
