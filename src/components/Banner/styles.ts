import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { breakpoints } from '../../styles' // Certifique-se de ajustar o caminho conforme necessário

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  position: relative;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 2;

    @media (max-width: ${breakpoints.desktop}) {
      padding-top: 300px;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: ${breakpoints.tablet}) {
      padding-top: 250px;
      flex-direction: column;
      align-items: center;
    }

    @media (max-width: ${breakpoints.mobile}) {
      padding-top: 200px;
      flex-direction: column;
      align-items: center;
    }
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;

    @media (max-width: ${breakpoints.desktop}) {
      top: 24px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      top: 20px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      top: 16px;
    }
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
    z-index: 1;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  max-width: 450px;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 32px;
    max-width: 400px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
    max-width: 350px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    max-width: 100%;
    text-align: center;
  }
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 22px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
    text-align: center;
    padding: 32px;
  }
`
