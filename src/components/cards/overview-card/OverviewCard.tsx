import React from "react";
import styles from "./OverviewCard.module.css";

interface Stat {
  label: string;
  value: string | number;
}

interface OverviewCardProps {
  icon?: React.ReactNode;
  title: string;
  linkText?: string;
  onLinkClick?: () => void;
  stats: Stat[];
}

const OverviewCard: React.FC<OverviewCardProps> = ({
  icon,
  title,
  linkText = "View all",
  onLinkClick,
  stats,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header_wrapper}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <h3 className={styles.title}>{title}</h3>
          </div>
          <button className={styles.link} onClick={onLinkClick}>
            {linkText} →
          </button>
        </div>
      </div>

      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.value}>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
