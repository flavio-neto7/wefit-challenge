import Link from "next/link"
import styled from "styled-components"

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  space-x: 2;
`

export const ContentWrapper = styled.div`
  text-align: right;
`

export const CartText = styled.span`
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  display: none;

  @media (min-width: 1024px) {
    /* lg:block */
    display: block;
  }
`

export const CartItemsDisplay = styled.span`
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  color: #6b7280; /* text-muted */
`
