import React, { createContext, useState } from 'react'
import api from '../services/api'
import { toast } from 'react-toastify'

interface IProviderProps {
  children: React.ReactNode
}

interface IData {
  amount: number
  installments: number
  mdr: number
  days: number[]
}

interface IResponse {
  '1'?: number
  '15'?: number
  '30'?: number
  '90'?: number
}

export interface IProvider {
  data: IData
  setData: React.Dispatch<React.SetStateAction<IData>>
  response: IResponse
  setResponse: React.Dispatch<React.SetStateAction<IResponse>>
  calculate: (data: IData) => Promise<void>
}

export const Context = createContext<IProvider>({} as IProvider)

const Provider = ({ children }: IProviderProps) => {
  const [data, setData] = useState<IData>({} as IData)
  const [response, setResponse] = useState<IResponse>({} as IResponse)

  const calculate = async (data: IData) => {
    await api
      .post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app', data)
      .then((res) => {
        toast.success('Dados recebidos', {
          pauseOnHover: false
        })
        setResponse(res.data)})
      .catch((err) => {
        toast.error(`Erro ${err.request.status} : ${err?.response?.data?.message}`)
        console.error(err)
      })
  }

  return (
    <Context.Provider
      value={{
        data,
        setData,
        response,
        setResponse,
        calculate,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
