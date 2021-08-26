import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
}
  from 'react-router-dom'

// Imports das páginas criadas
import { Home } from './paginas/Home'
import { CadastrarProduto } from './paginas/CadastrarProduto'

function App() {
  return (
    <div>
      <Home />
      <BrowserRouter>
        <Switch>
          <Route path='/cadastrar' exact component={CadastrarProduto} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App