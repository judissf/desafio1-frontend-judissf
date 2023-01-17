import styled from 'styled-components'

export const InputStyle = styled.input`
  width: 245px;
  height: 32px;
  margin-left: 50px;
  padding: 0 0 0 8px;
  border: 0;
  outline: 1.5px solid rgba(231, 231, 231, 1);
  border-radius: 2px;
  transition: 0.2s;
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 589px) {
    max-width: 282px;
    width: 100%;
    margin-left: 5px;
  }


  &:hover {
    outline: 1.5px solid gray;
  }

  &:focus {
    outline: 1.5px solid rgba(156, 225, 255, 1);
    box-shadow: 0 0px 1.5px 1.5px rgba(156, 225, 255, 1);
  }

  &::placeholder {
    font-weight: normal;
  }
`
