import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Lista from './components/Lista'

function App() {
  const estregaveis = ['Entregavel 1', 'Entregavel 2', 'Entregavel 3', 'Entregavel 4', 'Entregavel 5', 'Entregavel 6', 'Entregavel 7', 'Entregavel 8']

  return (
    <>
      <Header />
      <Card titulo="Primeiro Passo" descricao="Ir para o AVA no site do CEUMA." />
      <Card titulo="Segundo Passo" descricao="Fazer as atividades que pedirem." />
      <Lista itens={estregaveis} />
      <Footer />
    </>
  )
}

export default App