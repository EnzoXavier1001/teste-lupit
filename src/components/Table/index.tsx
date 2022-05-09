import * as C from './styles';

import { List } from '../../types/List'

type TableProps = {
    list: List[]
}

export default function Table({ list }: TableProps) {
  var newArray: any[] = [];
  const dataArray = new Array(12).fill(0);
  
  list.forEach(item => {
     const value = newArray.find((arrItem: any) => arrItem.tipoesc === item.tipoesc);
  
      if(!value) return newArray.push({ tipoesc: item.tipoesc, data: [ { faixa: item.faixa, total: item.count } ] })
  
      const internal = value.data.find((temp: any) => temp.faixa === item.faixa);
      if (!internal) return value.data.push({ faixa: item.faixa, total: item.count })
  
      internal.total += item.count;
  });
  
  const getIndexFromFaixa = (faixa: any) => {
      if (faixa === 'Sem estudantes cadastrados') return 0;
      if (faixa === '1 a 250 estudantes') return 1;
      if (faixa === '251 a 500 estudantes') return 2;
      if (faixa === '501 a 1000 estudantes') return 3;
      if (faixa === '1001 a 1500 estudantes') return 4;
      if (faixa === '1501 a 2000 estudantes') return 5;
      if (faixa === '2001 a 2500 estudantes') return 6;
      if (faixa === 'Mais de 2500 estudantes') return 7;
      return -1;
  }
  
  const newArrayData = (data: any) => {
      const dataArray = new Array(12).fill(0);
  
      data.forEach((item: any) => {
          const indexFromFaixa = getIndexFromFaixa(item.faixa);
          if (indexFromFaixa >= 0) dataArray[indexFromFaixa] = item;
      })
  
      return dataArray;
  }
  
  const viewObject = newArray.map((item: any) => {
      const data = newArrayData(item.data)
      return { ...item, data }
  })

  return (
    <C.Table>
        <thead>
            <tr>
              <C.TableHeadColumn></C.TableHeadColumn>
              <C.TableHeadColumn>Sem estudantes cadastrados</C.TableHeadColumn>
              <C.TableHeadColumn>1 a 250 estudantes</C.TableHeadColumn>
              <C.TableHeadColumn>251 a 500 estudantes</C.TableHeadColumn>
              <C.TableHeadColumn>501 a 1000 estudantes</C.TableHeadColumn>
              <C.TableHeadColumn>1001 a 1500 estudantes</C.TableHeadColumn>
              <C.TableHeadColumn>1501 a 2000 estudantes</C.TableHeadColumn>
              <C.TableHeadColumn>2001 a 2500 estudantes</C.TableHeadColumn>
              <C.TableHeadColumn>Mais de 2500 estudantes</C.TableHeadColumn>
            </tr>
        </thead>
        <tbody>
            {viewObject.map((item: any, index: number) => (
                <tr key={index}>
                  <td>
                    {item.tipoesc}
                  </td>
                  <td>
                    {item.data[0]?.total || 0}
                  </td>
                  <td>
                    {item.data[1]?.total || 0}
                  </td>
                  <td>
                    {item.data[2]?.total || 0}
                  </td>
                  <td>
                    {item.data[3]?.total || 0}
                  </td>
                  <td>
                    {item.data[4]?.total || 0}
                  </td>
                  <td>
                    {item.data[5]?.total || 0}
                  </td>
                  <td>
                    {item.data[6]?.total || 0}
                  </td>
                  <td>
                    {item.data[7]?.total || 0}
                  </td>
                </tr>
            ))}  
        </tbody>
  </C.Table>
  )
}
