export interface NavigationState {
  activeItem: string;
  searchQuery: string;
  isSearchFocused: boolean;
}

export interface NavigationContextType {
  state: NavigationState;
  setActiveItem: (itemId: string) => void;
  setSearchQuery: (query: string) => void;
  setSearchFocus: (focused: boolean) => void;
}

// Hook for navigation state management
export interface UseNavigationReturn {
  activeItem: string;
  searchQuery: string;
  isSearchFocused: boolean;
  handleNavigation: (path: string, itemId: string) => void;
  handleSearch: (query: string) => void;
  handleSearchFocus: (focused: boolean) => void;
}