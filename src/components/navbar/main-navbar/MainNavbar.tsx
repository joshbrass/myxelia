// Updated MainNavbar.tsx
import React, { useState } from "react";
import styles from "./MainNavbar.module.css";

// Assets
import logo from "../../../assets/svg/Myxellia-logo.svg";
import bellIcon from "../../../assets/svg/main-navbar-icons/notification-icon.svg";
import calendarIcon from "../../../assets/svg/main-navbar-icons/calendar-icon.svg";
import chatIcon from "../../../assets/svg/main-navbar-icons/message-notif-icon.svg";
import calculatorIcon from "../../../assets/svg/main-navbar-icons/calculator-icon.svg";

// Modals
import BudgetModal from "../../modals/budget-modal/BudgetModal";
import CalendarModal from "../../modals/calendar-modal/CalendarModal";


const MainNavbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false); // Close modal after selection
    console.log('Selected date:', date);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.nav_container}>
        {/* Left side: Company logo */}
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Company Logo" className={styles.logo} />
        </div>

        {/* Right side: Icons */}
        <div className={styles.iconsWrapper}>
          <img src={bellIcon} alt="Notifications" className={styles.icon} />

          {/* Calculator with tooltip + modal */}
          <div className={styles.tooltipWrapper}>
            <img
              src={calculatorIcon}
              alt="Budgeting"
              className={styles.icon}
              onClick={() => setIsModalOpen(true)}
            />
            <span className={styles.tooltip}>Budgeting</span>
          </div>

          {/* Calendar with tooltip + modal */}
          <div className={styles.tooltipWrapper}>
            <img
              src={calendarIcon}
              alt="Calendar"
              className={styles.icon}
              onClick={() => setIsCalendarOpen(true)}
            />
            <span className={styles.tooltip}>Calendar</span>
          </div>

          <img src={chatIcon} alt="Messages" className={styles.icon} />

          {/* Profile circle */}
          <div className={styles.profileCircle}>D</div>
        </div>
      </div>

      {/* Budget Modal */}
      <BudgetModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateBudget={() => {
          alert("Budget Created!");
          setIsModalOpen(false);
        }}
      />

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        selectedDate={selectedDate}
        onDateSelect={handleDateSelect}
      />
    </header>
  );
};

export default MainNavbar;