'use client';
import clsx from 'clsx';
import { JSX, PropsWithChildren } from 'react';


type Variant = 'primary' | 'secondary' | 'ghost';
interface Props extends PropsWithChildren {
    onClick?: () => void;
    as?: keyof JSX.IntrinsicElements;
    href?: string;
    variant?: Variant;
    size?: 'sm' | 'md';
}


export default function Button({ children, onClick, as = 'button', href, variant = 'primary', size = 'md' }: Props) {
    return (
        <div
            {...(href ? { href } : {})}
            onClick={onClick}
            className={clsx(
                'mono glitch',
                'neon-border',
                size === 'sm' ? 'px-3 py-1 text-sm' : 'px-4 py-2 text-base',
                variant === 'primary' && 'bg-[color:var(--primary)] text-[color:var(--primary-contrast)]',
                variant === 'secondary' && 'bg-transparent text-[color:var(--text)]',
                variant === 'ghost' && 'bg-transparent opacity-80',
            )}
            style={{ borderRadius: '10px' }}
        >
            {children}
        </div>
    );
}