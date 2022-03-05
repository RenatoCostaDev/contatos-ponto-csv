import React, { useState, createContext } from "react";
import { parse } from "papaparse";
import { timeInNumber } from '../utils'

const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')

    const headers = [
      { label: 'id', key: 'id'},
      { label: 'nome', key: 'nome'},
      { label: 'telefone', key: 'telefone'}
    ]
    const newContacts = {
      filename: 'contatos',
      headers: headers,
      data: contacts
    }

    const handleDrop = (e) => {
      e.preventDefault()
      Array.from(e.dataTransfer.files)
        .filter((file) => file.type === 'text/csv')
        .forEach( async(file) => {
            let text = await file.text()
            let result = parse(text, { header: true,  encoding:  'UTF-8' })
            setContacts(prevState => [...prevState,...result.data])
        })
    }

    const removeItem = (idParam) =>  setContacts(contacts.filter(({id}) => id !== idParam))
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!nome || !telefone) {
        return alert('Please enter a value for name and for telefone ')
      }
      let nextId = timeInNumber()
      let newContact = {
        id: nextId,
        nome: nome,
        telefone: telefone,
      }
      setContacts(prevState => [...prevState, newContact])
      setNome('')
      setTelefone('')
    }

    return (
    <AppContext.Provider
      value={{
        handleDrop,
        handleSubmit, 
        nome, 
        setNome, 
        telefone, 
        setTelefone,
        contacts,
        newContacts, 
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }