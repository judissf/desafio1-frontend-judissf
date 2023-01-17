import { AiOutlineSend } from 'react-icons/ai'
import { ButtonStyle } from './style'

const Button = () => {

  return (
    <ButtonStyle>
      <button
        type='submit'
      >
        <AiOutlineSend />
      </button>
    </ButtonStyle>
  )
}

export default Button
