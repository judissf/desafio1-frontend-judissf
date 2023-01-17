import { useContext } from 'react'
import { GlobalStyle } from './style'
import { Context, IProvider } from './context/Context'
import Label from './components/Label'
import Input from './components/Input'
import Button from './components/Button'
import './App.css'

function App() {
  const { data, setData, response, setResponse, calculate } =
    useContext<IProvider>(Context)

  return (
    <GlobalStyle>
      <div className='container'>
        <div className='painel-inputs'>
          <h1>Simule sua Antecipação</h1>

          <form
            onSubmit={(event) => {
              event.preventDefault()
              calculate(data)
            }}
          >
            <Label
              htmlFor='amount'
              children='Informe o valor da venda em centavos *'
            />
            <Input
              id='amount'
              min={1000}
              type='number'
              placeholder='No mínimo $1000'
              required
              onChange={(event) => {
                setData({ ...data, amount: +event.currentTarget.value })
              }}
            />

            <Label htmlFor='installments' children='Em quantas parcelas *' />
            <Input
              id='installments'
              type='number'
              min={1}
              max={12}
              placeholder='1 a 12'
              required
              onChange={(event) => {
                setData({ ...data, installments: +event.currentTarget.value })
              }}
            />

            <Label htmlFor='mdr' children='Informe o percentual de MDR *' />
            <Input
              id='mdr'
              type='number'
              placeholder='1 a 100%'
              min={1}
              max={100}
              required
              onChange={(event) => {
                setData({ ...data, mdr: +event.currentTarget.value })
              }}
            />

            <Label htmlFor='days' children='Informe os dias' />
            <select
              id='days'
              defaultValue={''}
              required
              onChange={(event) =>
                setData({
                  ...data,
                  days: event.currentTarget.value.split(',').map((day) => +day),
                })
              }
            >
              <option value=''>Selecionar</option>
              <option value='1,15,30,90'>Todos</option>
              <option value={'1'}>1</option>
              <option value={'15'}>15</option>
              <option value={'30'}>30</option>
              <option value={'90'}>90</option>
              <option value={'1,15'}>1, 15</option>
              <option value={'1,15,30'}>1, 15, 30</option>
              <option value={'15,30'}>15, 30</option>
              <option value={'15,90'}>15, 90</option>
              <option value={'15,30,90'}>15, 30, 90</option>
              <option value={'30, 90'}>30, 90</option>
            </select>
            <Button />
          </form>
        </div>

        <div className='painel-result'>
          <h2>VOCÊ RECEBERÁ:</h2>

          <h3>
            Amanhã: <strong>R${response?.[1]}</strong>
          </h3>

          <h3>
            Em 15 dias: <strong>R${response?.[15]}</strong>
          </h3>

          <h3>
            Em 30 dias: <strong>R${response?.[30]}</strong>
          </h3>

          <h3>
            Em 90 dias: <strong>R${response?.[90]}</strong>
          </h3>
        </div>
      </div>
    </GlobalStyle>
  )
}

export default App
