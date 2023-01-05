import { UrlObject } from "url";

import React, { HTMLAttributeAnchorTarget, ReactNode } from "react";

import { ButtonProps, Link } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";

type NextChakraLinkProps = ButtonProps &
  Omit<LinkProps, "as"> & {
    href: string | UrlObject;
    children?: ReactNode;
    as?: React.ElementType;
    target?: HTMLAttributeAnchorTarget | undefined;
  };
const NextChakraLink = ({
  href = "",
  children,
  as,
  disabled,
  ...props
}: NextChakraLinkProps) => {
  const Component = as || Link;
  const { prefetch = true, shallow, replace, scroll = true, ...rest } = props;

  if (disabled) {
    return (
      <Component {...props} disabled={disabled}>
        {children}
      </Component>
    );
  }

  return (
    <NextLink
      shallow={shallow}
      prefetch={prefetch}
      passHref
      replace={replace}
      scroll={scroll}
      href={href}
    >
      <Component as="a" {...rest}>
        {children}
      </Component>
    </NextLink>
  );
};

export default NextChakraLink;
