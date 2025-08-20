import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./ActionNavbar.module.css";
import {
  ANIMATION_VARIANTS,
  NAV_ITEMS,
  type NavItem,
} from "../../../constants/navigation";
import SearchInput from "../../inputs/search-input/SearchInput";

interface NavigationProps {
  userName?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

const ActionNavbar: React.FC<NavigationProps> = ({
  onSearch,
  className = "",
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Handle navigation item click
  const handleNavClick = useCallback(
    (item: NavItem) => {
      navigate(item.path);
    },
    [navigate]
  );

  // Handle search input change
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);
      onSearch?.(query);
    },
    [onSearch]
  );

  // Check if nav item is active
  const isActiveItem = useCallback(
    (item: NavItem) => {
      return (
        location.pathname === item.path ||
        location.pathname.startsWith(`${item.path}/`)
      );
    },
    [location.pathname]
  );

  return (
    <div className={styles.navWrapper}>
      <motion.nav
        className={`${styles.navigationContainer} ${className}`}
        variants={ANIMATION_VARIANTS.container}
        initial="hidden"
        animate="visible"
      >
        <div className={styles.leftSection}>
          <motion.ul
            className={styles.navList}
            variants={ANIMATION_VARIANTS.container}
          >
            <AnimatePresence>
              {NAV_ITEMS.map((item) => {
                const isActive = isActiveItem(item);

                return (
                  <motion.li
                    key={item.id}
                    variants={ANIMATION_VARIANTS.item}
                    whileHover="hover"
                    whileTap="tap"
                    onHoverStart={() => setHoveredItem(item.id)}
                    onHoverEnd={() => setHoveredItem(null)}
                  >
                    <motion.button
                      className={`${styles.navItem} ${
                        isActive ? styles.active : ""
                      }`}
                      onClick={() => handleNavClick(item)}
                      aria-label={`Navigate to ${item.label}`}
                      role="button"
                      tabIndex={0}
                    >
                      <div className={styles.navIcon}>
                        <img
                          src={item.icon}
                          alt={`${item.label} icon`}
                          width={20}
                          height={20}
                          style={{
                            color: isActive ? "#191919" : "transparent",
                            opacity: hoveredItem === item.id ? 0.7 : 1,
                            stroke: "#191919",
                          }}
                        />
                      </div>

                      <span className={styles.navLabel}>{item.label}</span>

                      {isActive && (
                        <motion.div
                          className={styles.activeIndicator}
                          variants={ANIMATION_VARIANTS.activeIndicator}
                          initial="hidden"
                          animate="visible"
                          layoutId="activeIndicator"
                        />
                      )}
                    </motion.button>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </div>

        <motion.div
          className={styles.rightSection}
          variants={ANIMATION_VARIANTS.item}
        >
          <SearchInput
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search listings, users here..."
            className={styles.searchInput}
          />
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default ActionNavbar;
