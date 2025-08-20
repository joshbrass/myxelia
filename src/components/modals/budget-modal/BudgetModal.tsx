import React from 'react';
import styles from './BudgetModal.module.css';
import topImage from '../../../assets/png/budgeting-img.png'
import settingIcon from '../../../assets/svg/setting-icon.svg'
import trendsupIcon from '../../../assets/svg/trend-up-icon.svg'
import barIcon from '../../../assets/svg/barchart-icon.svg'


interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateBudget: () => void;
 
}

const BudgetModal: React.FC<BudgetModalProps> = ({
  isOpen,
  onClose,
  onCreateBudget,

}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <img src={topImage} alt="Budget Setup" className={styles.headerImage} />
        </div>
        
        <div className={styles.content}>
          <div className={styles.feature}>
            <div className={styles.iconWrapper}>
              <img src={settingIcon} alt="" />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Set up annual budgets by account category</h3>
              <p className={styles.featureDescription}>
                Allocate funds across income and expense lines with full visibility.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.iconWrapper}>
              <img src={trendsupIcon} alt="" />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Track actuals vs budget in real time</h3>
              <p className={styles.featureDescription}>
                See how your community is performing against plan, month by month.
              </p>
            </div>
          </div>

          <div className={styles.feature}>
            <div className={styles.iconWrapper}>
                <img src={barIcon} alt="" />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>Adjust figures and forecast with ease</h3>
              <p className={styles.featureDescription}>
                Edit amounts, apply percentage changes, or roll forward last year's data—all in one place.
              </p>
            </div>
          </div>
        </div>

        <button className={styles.createButton} onClick={onCreateBudget}>
          Create Budget
        </button>
      </div>
    </div>
  );
};

export default BudgetModal;