import * as C from './styles';

import { List } from '../../types/List'

type TableProps = {
    list: List[]
}

export default function Table({ list }: TableProps) {
  return (
    <C.Table>
        <thead>
            <tr>
                <C.TableHeadColumn>DRE</C.TableHeadColumn>
                <C.TableHeadColumn>Tipo de Escola</C.TableHeadColumn>
                <C.TableHeadColumn>Faixa</C.TableHeadColumn>
                <C.TableHeadColumn>Quantidade</C.TableHeadColumn>
            </tr>
        </thead>
        <tbody>
            {list.map((item, index) => (
                <tr key={index}>
                    <td>{item.dre}</td>
                    <td>{item.tipoesc}</td>
                    <td>{item.faixa}</td>
                    <td>{item.count}</td>
                </tr>  
            ))}  
        </tbody>
  </C.Table>
  )
}
