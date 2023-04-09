import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Historia de México</h1>
        <navigator><ul><li className='navigator'><a href='https://www.gob.mx'>México,</a></li><li className='navigator'><a href='https://www.curistoria.com/'> Internacional</a></li></ul></navigator>
      </header>
      <main>
      <h1>Personajes Importantes de México</h1>
      <ul>
        <li>Benito Juarez(1806-1872) "Entre los individuos, como entre las naciones, el respeto al derecho ajeno es la paz"</li>
        <video controls preload="auto" id='BenitoJuarez'>
          <source src='./assets/benito-juarz.mp4'></source>
        </video>
        <li className='Porfirio'>Porfirio Díaz(1830-1915)"Orden y Progreso"</li>
        <p>Porfirio Díaz Empezó su carrera militar en 1854, al unirse al plan de Ayutla Debido a la persecusión que sufría por parte de Santa Anna, todo esto en un papel menor.
          Posteriormente, la Guerra de Reforma de 1857 a 1860, fue Gobernador y Comandante Militar del Istmo en Oaxaca y logró alcanzar el grado de Coronel.
          Además de participar en la mitica batalla del 5 de mayo, por ese y otros motivos, el presidente Juarez le otorgó el grado de General de División el 10 de octubre de 1863. en reconocimiento a sus actos.
          En noviembre de 1871, con la reelección del Presidente Juárez, se levantó en armas y proclamó el Plan de la Noria, sin lograr el éxito esperado, su movimiento fue derrotado. Posterior a ello se rebeló contra lerdo (Plan de Tuxtepec) con el cual se hizo del poder, para después forjar un estricto regimén que, a pesar de que modernizó el país, reprimió toda oposición, además de permitir que se maltratara a los mexicanos más pobres en las Haciendas minas y fabricas, algo que llegaria a su limte con las huelgas de Cananea(1909) y Rio Blanco (1907), por lo que Diaz se vió obligado a dimitir del cargo en 1911
        </p>
        <li className='Li'>Miguel Hidalgo(1753-1811)"Viva la Independencia"</li>
      </ul>
      </main>
      <footer>
      <h3>Fuentes</h3>
      <a className='PD' href='https://www.gob.mx/sedena/documentos/2-de-julio-de-1915-aniversario-luctuoso-del-general-porfirio-diaz'>Nacional, S. D. L. D. (s. f.). 2 de julio de 1915, aniversario luctuoso del General Porfirio Diaz. gob.mx. https://www.gob.mx/sedena/documentos/2-de-julio-de-1915-aniversario-luctuoso-del-general-porfirio-diaz</a>
      </footer>
    </div>
  );
}

export default App;
