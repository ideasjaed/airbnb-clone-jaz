import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/2bfdaa35-6cc9-4ba2-8d93-ae6bb1f2ec5d.jpg?im_w=1440"
          title="La Casa Blanca - Villa con alberca en el centro"
          description="La Casa Blanca es una villa de estilo colonial que se encuentra justo en el centro de Tepoztlan. La propiedad tiene mas de media acre."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/90577b41-8181-4157-961a-b5d0417e9d80.jpg?im_w=1200"
          title="Cabaña Geométrica con Piscina y Vista Mont Blanc"
          description="Un espacio único, ecológico y Petfriendly. Lejos del ruido de la ciudad... Un escondite ideal para aventureros, parejas y viajeros que buscan relajarse. Una vista panorámica inigualable a las montañas y al valle."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-47410136/original/11fcbf18-d8c9-4ada-8c88-8b8db085a94a.jpeg?im_w=1200"
          title="Acogedora cabaña con vista espectacular          "
          description="Es un lugar encantador para aquello que quiere descansar del estrés de la ciudad."
        />
      </div>
    </div>
  );
}

export default Home;
