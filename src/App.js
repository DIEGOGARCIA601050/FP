import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1><strong>Historia de México</strong></h1>
        <navigator><ul><li className='navigator'><a href='https://www.gob.mx'>México</a></li><li className='navigator'><a href='https://www.curistoria.com/'> Internacional</a></li></ul></navigator>
      </header>
      <main>
       <ul>
        <li><strong>Benito Juarez</strong><span className='cita'> Entre los individuos como entre las naciones, el respeto al derecho ajeno es la paz</span></li>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/79rBOsrcX6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <li><strong>Miguel Hidalgo</strong><span className='cita'>“¡Viva la independencia! ¡Viva la América! ¡Muera el mal gobierno!”
- <a href='https://akifrases.com/autor/miguel-hidalgo-y-costilla'>https://akifrases.com/autor/miguel-hidalgo-y-costilla</a>
</span></li>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ieSgPWjnMZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <li><strong>Porfirio Diaz</strong><span className='cita'> Orden y porgreso</span></li>
        <p>Nació en la ciudad de Oaxaca un 15 de septiembre de 1830, ¡sí, el mismo día de la Independencia de México! Pero Porfirio no quería ser un simple espectador de la historia, así que ingresó al Instituto de Ciencias y Artes de Oaxaca para estudiar leyes, ¡quería ser un abogado muy top!

Pero, ¡oh no! Los conflictos políticos del país no permitieron que Porfirio concluyera sus estudios, así que decidió luchar contra los conservadores en la Guerra de Reforma. Participó en la Batalla de Puebla durante la intervención francesa y logró huir cuando las fuerzas franco-mexicanas tomaron su ciudad natal.

Pero no se rindió, ¡al contrario! Inició una serie de victorias militares y en 1876 triunfa la Revolución de Tuxtepec. ¡Y tachán! El 5 de mayo de 1877 toma posesión de la presidencia de México. Pero su reinado no terminaría ahí, ¡no señor! En 1884 asumió la presidencia nuevamente y no la abandonó hasta 1911, ¡ni más ni menos que 27 años en el poder! Pero entonces llegó Francisco I. Madero y convocó a la rebelión.

Porfirio Díaz renunció a la presidencia en mayo de 1911 y abandonó el país. Y lamentablemente, amigos, ¡falleció en París, Francia, el 2 de julio de 1915! Aunque sus ideas y acciones siguen siendo objeto de controversia, su figura es parte importante de la historia de México y su legado sigue siendo recordado en la actualidad.</p>
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
