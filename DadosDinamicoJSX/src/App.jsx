function Sub(a ,b){
  return a - b
}


function App(){

  const tech = "React"
  const status = true

  return(
    <div className="pai">
      <h1>{tech} Is The Best</h1>       {/*Para identificar codigo Js basta por o {} para q o JSX identifique */}
      <h2>A soma de 1 +1 e {1+1}</h2>    {/* Pode Utilizar qualquer expresao Js dentro do JSX com as {} */}
      <h2>Passando uma funçao fora do escopo == {Sub(100,50)}</h2> {/* Passando Funçoes De fora do escopo para o JSX */}
      <h2>Status {status ? 'On': 'Of'}</h2>
    </div>
  )
}

export default App
