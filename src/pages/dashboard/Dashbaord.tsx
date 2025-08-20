import OverviewCard from "../../components/cards/overview-card/OverviewCard";
import StatCard from "../../components/cards/stat-card/StatCard";
import styles from "./Dashbaord.module.css";
import HouseIcon from "../../assets/svg/card-icons/house-icon.svg";
import UserIcon from "../../assets/svg/card-icons/user-icon.svg";
import BarChart from "../../components/chart/BarChart";
import PropertyCarousel from "../../components/couresel/PropertyCarousel";
import luxury1 from "../../assets/png/couresel-img1.png";
import luxury2 from "../../assets/png/couresel-img2.png";
import commercial1 from "../../assets/png/couresel-img3.png";
import commercial2 from "../../assets/png/couresel-img1.png";
import image1 from "../../assets/png/couresel-img2.png";
import image2 from "../../assets/png/couresel-img3.png";

const luxurySlides = [
  {
    id: 7,
    image: luxury1,
    label: "",
    title: "",
  },
  {
    id: 8,
    image: luxury2,
    label: "",
    title: "",
  },
];
const commercialSlides = [
  {
    id: 4,
    image: commercial1,
    label: "",
    title: "",
  },
  {
    id: 5,
    image: commercial2,
    label: "",
    title: "",
  },
];

const residentialSlides = [
  {
    id: 1,
    image: image1,
    label: "",
    title: "",
  },
  {
    id: 2,
    image: image2,
    label: "",
    title: "",
  },
];

const Dashboard = () => {
  return (
    <div>
      <h1 className={styles.name}>Welcome, Ahmed</h1>

      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <div className={styles.header}>
            <div>
              <h2 className={styles.title}>Sales Overview</h2>
              <p className={styles.subtitle}>
                Showing overview Jan 2022 - Sep 2022
              </p>
            </div>
            <button className={styles.viewBtn}>View Transactions</button>
          </div>

          <div className={styles.filters}>
            <button className={styles.filterBtn}>1 Week</button>
            <button className={styles.filterBtn}>1 Month</button>
            <button className={`${styles.filterBtn} ${styles.active}`}>
              1 Year
            </button>
          </div>

          <hr className={styles.line} />
          <div className={styles.chartStatsWrapper}>
            <div className={styles.chart}>
              <BarChart />
            </div>

            <div className={styles.statsGrid}>
              <StatCard
                value="₦120,000,000.00"
                label="Total Inflow"
                percentage="2.5%"
                trend="up"
                color="#3b82f6"
              />
              <StatCard
                value="₦50,000,000.00"
                label="MRR"
                percentage="2.5%"
                trend="up"
                color="#10b981"
              />
              <StatCard
                value="₦200,000,000.00"
                label="Commission Revenue"
                percentage="0.5%"
                trend="up"
                color="#14B8A6"
              />
              <StatCard
                value="₦100,000,000.00"
                label="GMV"
                percentage="0.5%"
                trend="down"
                color="#ef4444"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <OverviewCard
            icon={<img src={HouseIcon} alt="house" />}
            title="Listings Overview"
            stats={[
              { label: "Total", value: "1.8k" },
              { label: "Active", value: 80 },
              { label: "Archived", value: "1k" },
            ]}
            onLinkClick={() => console.log("Listings clicked")}
          />

          <OverviewCard
            icon={<img src={UserIcon} alt="user" />}
            title="Users Overview"
            stats={[
              { label: "Total", value: "20.7k" },
              { label: "Riders", value: "8.5k" },
              { label: "Subscribers", value: "7.5k" },
            ]}
            onLinkClick={() => console.log("Users clicked")}
          />
        </div>
      </div>
      <div className={styles.couresel_wrapper}>
        <PropertyCarousel
          slides={residentialSlides}
          autoRotateInterval={5000}
        />
        <PropertyCarousel slides={commercialSlides} autoRotateInterval={6000} />
        <PropertyCarousel slides={luxurySlides} autoRotateInterval={4500} />
      </div>
    </div>
  );
};

export default Dashboard;
