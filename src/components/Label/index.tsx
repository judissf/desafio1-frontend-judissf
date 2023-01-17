import { LabelStyle } from "./style";

interface ILabel {
  children: React.ReactNode;
  htmlFor: string;
}

function Label({htmlFor, children}: ILabel) {
  return (
    <LabelStyle htmlFor={htmlFor}>{children}</LabelStyle>
  )
}

export default Label