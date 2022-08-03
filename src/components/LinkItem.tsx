import { ReactNode } from 'react';
import NextLink from 'next/link';
import { Link, LinkProps } from '@chakra-ui/react';

interface ILinkProps extends LinkProps {
    href: string;
    children: ReactNode;
}

export const LinkItem = ({ href, children, ...rest }: ILinkProps) => {
    return (
        <NextLink href={href} passHref>
            <Link {...rest}>{children}</Link>
        </NextLink>
    );
};
