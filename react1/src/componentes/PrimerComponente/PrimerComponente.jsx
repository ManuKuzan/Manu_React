import React from 'react'

export const PrimerComponente = () => {
 // codigojs//
 const milista=[ "Magneto Gigante",
 "Destructinador",
 "Edificio Robot Gigante",
 "Desinfla-inador",
 "Acelerador de edad y tiempo (Age Accelerator-inator)",
 "Hipnotizador (The Slave-inator)",
 "Drill-inator",
 "Plans for magnet",
 "Desinteti-vaporizador",
 "Copy and Paste-inator",
 "Termite Controlling Helmet",
 "Melt-inator 6-5000-inator",]
  return (
    <div>
   <ul>
    {milista.map((element)=>(<li>{element}</li>))}
   </ul>
    </div>
  )
}
