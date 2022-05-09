import { useEffect, useState } from "react";

import GlobalStyle from "./globalStyles";

import Header from "./components/Header";
import Select from "./components/Select";
import Table from "./components/Table";
import Footer from "./components/Footer";

import api from "./services/api";
import { Category } from './types/Category'
import { List } from './types/List'


export const Home = () => {
  const [diretorias, setDiretorias] = useState<Category[]>([])
  const [list, setList] = useState<List[]>([])

  useEffect(() => {
    getDiretorias()
  }, [])

  async function getDiretorias() {
    try {
      const response = await api.get('/diretorias/')
      setDiretorias(response.data.results)
    } catch(e) {
      console.log('ERORR: ' + e)
    }
  }

  async function getList(dre: string) {
    try {
      const response = await api.get(`/smeescolas/${dre}`)
      setList(response.data.results)
    } catch(e) {
      console.log('ERORR: ' + e)
    }
  }

  return (
    <>
      <Header />
      <Select 
        options={diretorias} 
        handleSelectChange={getList} 
      />
      <Table list={list}/>
      <Footer />
      <GlobalStyle />
    </>
  );
}
