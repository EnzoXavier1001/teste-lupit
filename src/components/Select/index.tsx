import * as C from './styles'
import { Category } from '../../types/Category'

type SelectProps = {
  options: Category[];
  onChange: (diretoria: string) => void;
}

export default function Select({ options, onChange }: SelectProps) {
  return (
    <C.Container>
        <C.Select onChange={(e) => onChange(e.target.value)}>
            <>
              {options.map((item, index) => (
                <option key={index} value={item.dre}>
                  {item.diretoria}
                </option>
              ))}
            </>
        </C.Select>
    </C.Container>
    
  )
}
