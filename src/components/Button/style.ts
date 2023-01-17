import styled from 'styled-components'

export const ButtonStyle = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin: 18px 0 0 150px; 

  @media (max-width: 589px) {
    margin-left: 130px;
    margin-bottom: 20px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: blue;
    border: none;
    border-radius: 50%;
    color: white;
    padding: 0;
    transition: 0.3s;

    &:hover {
     cursor: pointer;
    }
    
    &:active {
     transition: 0s;
     background-color: black;
    }

    path {
     width: 22px;
     height: 22px;
    }

    svg {
      font-size: 24px;
      margin-left: 3px;
    }
  }
`
