const createMenuSlice = (set) => ({
  isSidebarOpen: true,
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen: !isSidebarOpen }),
});

export default createMenuSlice;
