import dashboardIcon from '../assets/svg/menu-icons/home-icon.svg' 
import applicationIcon from '../assets/svg/menu-icons/application-icon.svg' 
import listingIcon from '../assets/svg/menu-icons/toolbox-icon.svg' 
import profileIcon from '../assets/svg/menu-icons/profile-icon (2).svg' 
import requestIcon from '../assets/svg/menu-icons/article-icon.svg'
import { easeInOut } from 'framer-motion'



export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  isActive?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: dashboardIcon, 
    path: '/',
    isActive: true
  },
  {
    id: 'listings',
    label: 'Listings',
    icon: listingIcon,
    path: '/listings'
  },
  {
    id: 'users',
    label: 'Users',
    icon: profileIcon,
    path: '/users'
  },
  {
    id: 'request',
    label: 'Request',
    icon: requestIcon,
    path: '/request'
  },
  {
    id: 'applications',
    label: 'Applications',
    icon: applicationIcon,
    path: '/applications'
  }
];

export const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  },
  activeIndicator: {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.3, ease: easeInOut }
    }
  }
};