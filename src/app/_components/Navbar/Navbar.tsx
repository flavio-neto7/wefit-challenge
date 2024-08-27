import Link from "next/link"
import { Cart } from "../Cart/Cart"
import { StyledNav, StyledNavTitle } from "./styled"

export function Navbar() {
  return (
    <StyledNav>
      <Link href="/">
        <StyledNavTitle>WeMovies</StyledNavTitle>
      </Link>
      <Cart />
    </StyledNav>
  )
}
