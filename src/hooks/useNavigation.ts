import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants/navigation';
import type { UseNavigationReturn } from '../types/navigation';

export const useNavigation = (): UseNavigationReturn => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  const getActiveItemFromPath = useCallback((path: string): string => {
    const activeNavItem = NAV_ITEMS.find(item => 
      path === item.path || path.startsWith(`${item.path}/`)
    );
    return activeNavItem?.id || 'dashboard';
  }, []);

  const [activeItem, setActiveItem] = useState(() => getActiveItemFromPath(location.pathname));

  // Update active item when pathname changes
  useEffect(() => {
    setActiveItem(getActiveItemFromPath(location.pathname));
  }, [location.pathname, getActiveItemFromPath]);

  // Handle navigation to different pages
  const handleNavigation = useCallback((path: string, itemId: string) => {
    setActiveItem(itemId);
    navigate(path);
  }, [navigate]);

  // Handle search functionality
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    
    // Debounced search can be implemented here
    if (query.trim()) {
   
      console.log('Searching for:', query);
    }
  }, []);

  // Handle search input focus state
  const handleSearchFocus = useCallback((focused: boolean) => {
    setIsSearchFocused(focused);
  }, []);

  return {
    activeItem,
    searchQuery,
    isSearchFocused,
    handleNavigation,
    handleSearch,
    handleSearchFocus,
  };
};