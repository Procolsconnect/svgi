export default function CharacterBioCard() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img 
        src="https://jeffbridgforth.com/codepen/places-map.png" 
        alt="Background Map" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="flex items-center justify-center min-h-screen p-4" style={{ position: 'relative', zIndex: 1 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tahoma:wght@400;700&display=swap');
        
        .milo {
          width: 50vw;
          height: 450px;
          position: relative;
          display: inline-block;
        }
        
        .milo img.bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }
        
        .testino {
          position: relative;
          box-shadow: 0px 0px 0px #000;
          text-shadow: none;
          width: 18vw;
          height: 36vh;
          text-align: justify;
          overflow: auto;
          padding: 5px;
          line-height: 12px;
          margin-left: 330px;
          margin-top: 90px;
          rotate: 2.5deg;
        }
        
        .testino::-webkit-scrollbar {
          width: 3px;
        }
        
        .testino::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
        }
        
        .testino::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 3px;
        }
        
        .aff {
          position: relative;
          text-shadow: none;
          padding: 0px;
          text-align: center;
          background-color: #212e1e;
          line-height: 10px;
          width: 16vw;
          margin-left: 380px;
          margin-top: -8px;
          border-radius: 0px;
          padding: 5px;
          padding-bottom: 10px;
          rotate: 3deg;
        }
        
        .credits {
          position: relative;
          margin-top: 60px;
          width: auto;
          font-family: arial;
          font-size: 9px;
          text-shadow: none;
          letter-spacing: 0.5px;
          color: #828282;
          text-align: center;
        }
        
        c {
          font-family: calibri;
          text-transform: uppercase;
          font-size: 9px;
          letter-spacing: 2px;
          color: #dcdcdc;
          background-color: #212e1e;
          line-height: 11px;
        }
        
        m {
          font-family: tahoma;
          font-size: 8px;
          color: #6b3220;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        m1 {
          font-family: tahoma;
          font-size: 9.5px;
          color: #453125;
          letter-spacing: 0px;
        }
        
        y {
          font-family: arial;
          font-size: 8px;
          color: #041a0b;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }
        
        g1 {
          font-family: trebuchet ms;
          font-size: 9.5px;
          letter-spacing: 0.5px;
          line-height: 10px;
          color: #163021;
        }
        
        n {
          font-family: georgia;
          color: #0e2236;
          font-size: 9.5px;
          letter-spacing: 0.5px;
          font-style: italic;
        }
        
        n1 {
          font-family: trebuchet ms;
          color: #6f7e69;
          font-size: 8.5px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        r {
          font-family: tahoma;
          color: #171717;
          font-size: 10px;
          letter-spacing: 0px;
          line-height: 13px;
        }
        
        r1 {
          font-family: tahoma;
          color: #e1d7cb;
          font-size: 9.5px;
          letter-spacing: 0px;
          line-height: 13px;
        }
        
        r2 {
          font-family: tahoma;
          color: #868078;
          font-size: 9.5px;
          letter-spacing: 0px;
          line-height: 13px;
        }
        
        a:link {
          color: #e1d7cb;
        }
        
        a:visited {
          color: #e1d7cb;
        }
        
        a {
          cursor: crosshair;
        }
      `}</style>
      
      <div className="milo">
        <img src="https://i.imgur.com/6NXlscw.png" alt="Background" className="bg-image" />
        <div className="flex flex-col items-center" style={{ position: 'relative', zIndex: 1 }}>
          <br />
          <div className="testino">
            <r>
              <c>milo ian kenney</c> <y>(gemini sun, gemini rising & aquarius moon)</y> è cresciuto tra i collettivi e i centri sociali di <m>brooklyn</m>, in mezzo alle teste calde della lotta anticapitalista. ha una madre mezza turca da cui ha ereditato i colori mediterranei e l'indole da leader politico, e conta almeno tre zie e una decina di cugine con le quali ha condiviso <n>case, libri, auto (soprattutto multe), <s>vestiti</s> e ideali.</n> leader della pubblica istruzione, cacciato più di una volta dal <g1>club di dibattito</g1> e segnato sull'anniversario scolastico <m1>as most likely to say "why would i lie" when he's lying</m1>. il suo hobby preferito è la <m>cleptomania</m> e dice un po' troppe cazzate con la scusa di voler rendere le cose più interessanti. <y>(he's a 1 but there's just something about him)</y> al campo c'è arrivato a gennaio 2022 assieme alla barista della sua caffetteria di fiducia, <n>willa</n>, dopo essere stati attaccati entrambi da un'<m>empusa</m> neanche il tempo di finire il suo <i>cortado</i>. l'intervento eroico di un satiro li ha salvati da una brutta fine, ma alcune voci di corridoio dicono che l'empusa fosse già stata messa k.o. dall'incessante parlantina di milo, <n>e che alla fine abbia pure implorato il satiro di portarselo via</n>. nell'ultimo anno e mezzo ha affrontato mostri mitologici, salvato oracoli, conversato con <i>dèi dimenticati</i>, visitato l'olimpo, ceduto al canto delle <m>sirene</m> e scoperto il suo più grande difetto, recuperato <i>frammenti</i> di artefatti appartenuti ad <m>eracle</m>, salvato un bambino dalle mormò per poi <i>prendersene cura</i> in una cabina di ladri e viandanti, assorbito uno dei mali del mondo, <m>il rimorso</m>, dopo essersi seduto su una sedia elettrica durante le ultime imprese titaniche... pare che l'idea di essere un semidio sembra avergli dato particolarmente alla testa, <g1>ma forse è solo la sua luna in acquario.</g1>
            </r>
          </div>
          <br />
          <div className="aff">
            <r1>
              <c>CABIN XI</c> • <a href="#" onClick={(e) => { e.preventDefault(); window.open('http://thickasthieves.altervista.org/Milo/jazzmine.html', '', 'scrollbars=no,menubar=no,width=350,height=500'); }}>JAZZ</a> • <a href="#" onClick={(e) => { e.preventDefault(); window.open('http://thickasthieves.altervista.org/Milo/puck.html', '', 'scrollbars=no,menubar=no,width=350,height=500'); }}>PUCK</a><br />
              <n1>willa • jax • maeve • opal • juliet</n1><br />
              <i>nilufer</i>, amber, <i>len</i>, eleanor, <i>silene</i><br />
              edward, samuel, zeke, <s>logan</s>.<br />
              <r2>( <i>aidan, caleb, <a href="#" onClick={(e) => { e.preventDefault(); window.open('http://thickasthieves.altervista.org/Milo/oliver.png', '', 'scrollbars=no,menubar=no,width=450,height=400'); }}>oliver</a>, llyr</i> )</r2><br />
            </r1>
          </div>
        
        </div>
      </div>
    </div>
    </div>
  );
}   