import { useMenuItemContext } from '../context/MenuItemContext';

type MenuItemProps = {
    children?: React.ReactNode;
    className?: string;
    href: string;
    anchorRef?: React.RefObject<HTMLAnchorElement>;
};

export function MenuItem({
    children,
    className,
    href,
    anchorRef,
}: MenuItemProps) {
    const { handleOpenMenu, buttonRef } = useMenuItemContext();

    function handleKey(e: React.KeyboardEvent) {
        if (e.key === 'Escape') {
            handleOpenMenu();
            buttonRef.current?.focus();
        }
    }

    return (
        <a
            ref={anchorRef}
            className={className || 'link'}
            onKeyUp={handleKey}
            href={href}
        >
            {children}
        </a>
    );
}
