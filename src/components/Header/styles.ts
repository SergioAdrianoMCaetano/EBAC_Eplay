import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  gap: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`
export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 20px;
    margin-bottom: 60px;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`
export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`
export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`
export const CartButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    margin-bottom: 4px;
    background-color: ${cores.branca};
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: block;
  }

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`
