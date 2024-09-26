import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cinza};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.desktop}) {
    padding: 20px;
    margin-bottom: 60px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
    margin-bottom: 40px;
    flex-direction: column;
    align-items: center;
    padding: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: auto;
  gap: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    gap: 6px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    gap: 4px;
  }
`
export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-right: 12px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 8px;
    padding: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-right: 4px;
    padding: 8px;
  }
`
export const CartButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 16px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-left: 12px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      margin-left: 8px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      margin-left: 4px;
    }
  }
`
