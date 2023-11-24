import { RippleCSS, rippleTheme, Text } from "@ripple/design-system"
import { mergeClasses } from "@ripple/ui-helpers"
import type { ComponentPropsWithRef, FC, HTMLAttributes } from "react"

type ExternalLinkProps = HTMLAttributes<HTMLElement> &
  Pick<ComponentPropsWithRef<typeof Text>, "size"> & {
    css?: RippleCSS
    href: string
  }

const linkStyle = rippleTheme.css({
  color: "$primaryAltContrast100",
  textDecoration: "none",
  "&:hover, &:focus": {
    textDecoration: "underline",
  },
})

export const ExternalLink: FC<ExternalLinkProps> = ({ children, className, ...rest }) => (
  <Text
    {...rest}
    as="a"
    className={mergeClasses(linkStyle(), className)}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </Text>
)
