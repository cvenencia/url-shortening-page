import { useContext, createContext, ReactNode } from 'react';

type MenuItemProviderProps = {
    children: ReactNode;
    handleOpenMenu: () => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
};

type MenuItemContext = {
    handleOpenMenu: () => void;
    buttonRef: React.RefObject<HTMLButtonElement>;
};

const MenuItemContext = createContext({} as MenuItemContext);

export function useMenuItemContext() {
    return useContext(MenuItemContext);
}

export function MenuItemProvider({
    children,
    handleOpenMenu,
    buttonRef,
}: MenuItemProviderProps) {
    return (
        <MenuItemContext.Provider
            value={{
                handleOpenMenu,
                buttonRef,
            }}
        >
            {children}
        </MenuItemContext.Provider>
    );
}
