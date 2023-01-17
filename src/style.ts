import styled from 'styled-components'

export const GlobalStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: rgb(245, 247, 250);

  @media (max-width: 589px) {
    height: 100%;
  }

  .container {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    max-width: 580px;
    width: 100%;
    height: 500px;
    background-color: white;
    outline: 1px solid rgba(200, 200, 200, 0.5);
    border-radius: 5px;
    box-shadow: 0 0 1.5px 1.5px rgba(200, 200, 200, 0.5);

    @media (max-width: 589px) {
      flex-direction: column;
      align-items: center;
      height: 800px;
    }

    .painel-inputs {
      display: flex;
      flex-direction: column;
      width: 340px;
      height: 100%;

      @media (max-width: 589px) {
        height: 500px;
        align-items: center;
        max-width: 500px;
        width: 100%;
      }

      h1 {
        width: 245px;
        color: rgb(108, 108, 108);
        font-size: 20px;
        font-weight: 800;
        margin: 35px 0 5px 50px;

        @media (max-width: 589px) {
          margin-left: 0;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 400px;

        @media (max-width: 589px) {
          max-width: 300px;
          width: 100%;
          margin: auto;
        }


        select {
          width: 253px;
          height: 32px;
          margin-left: 50px;
          border: 1.5px solid rgba(200, 200, 200, 0.5);
          border-radius: 2px;
          transition: 0.2s;

          @media (max-width: 589px) {
            margin-left: 5px;
            width: 291px;
          }


          &:hover {
            border-color: gray;
          }
        }
      }
    }

    .painel-result {
      font-style: italic;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: 100%;
      width: 240px;
      background-color: rgb(247, 249, 250);
      border-radius: 0 5px 5px 0;

      @media (max-width: 589px) {
        max-width: 300px;
        width: 100%;
        height: 300px;
      }

      h2 {
        color: rgb(68, 122, 190);
        font-size: 15px;
        width: 170px;
        line-height: 30px;
        margin: 0;
        margin-left: 35px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgba(126, 177, 239, 0.4);

        @media (max-width: 589px) {
          width: 230px;
        }

      }

      h3 {
        color: rgba(126, 177, 239, 0.9);
        margin-left: 35px;
        margin-top: 10px;
        font-weight: normal;
        font-size: 14px;
      }
    }
  }
`
