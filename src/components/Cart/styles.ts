import styled from 'styled-components'
import { cores, breakpoints } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'
import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 3;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${cores.cinza};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 300px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 250px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 200px;
    padding: 20px 8px 0 8px;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${cores.branca};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cinzaClaro};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;

    span {
      font-size: 10px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 10px;

    span {
      font-size: 8px;
    }
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.branca};
  margin-top: 32px;
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`
export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${cores.cinzaClaro};
  padding: 8px 0;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 60px;
      height: 60px;
      margin-right: 16px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }
  }

  h3 {
    color: ${cores.branca};
    font-weight: bold;
    font-size: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 12px;
    }
  }

  span {
    display: block;
    color: ${cores.branca};
    font-weight: bold;
    font-size: 14px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 10px;
    }
  }

  ${TagContainer} {
    margin-right: 8px;
    margin-top: 8px;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      margin-right: 6px;
      margin-top: 6px;
      margin-bottom: 12px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      margin-right: 4px;
      margin-top: 4px;
      margin-bottom: 8px;
    }
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8px;
    right: 0;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      width: 14px;
      height: 14px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 12px;
      height: 12px;
    }
  }
`
