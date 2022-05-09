import * as C from './styles'
import { Category } from '../../types/Category'

type SelectProps = {
  options: Category[];
  handleSelectChange: (diretoria: string) => void;
}

export default function Select({ options, handleSelectChange }: SelectProps) {
  return (
    <C.Container>
        <C.Select onChange={(e) => handleSelectChange(e.target.value)}>
            <>
              <option disabled defaultValue={'-- Selecione uma diretoria'}>-- Selecione uma diretoria --</option>
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
