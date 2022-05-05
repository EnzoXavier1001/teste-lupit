import axios from 'axios'

const api = axios.create({
    baseURL: 'https://hom-escolaaberta.sme.prefeitura.sp.gov.br/api/'

})

export default api