import styles from './Milo.module.css';

export default function CharacterBioCard() {
  return (
    <div className={styles.mainContainer}>
      {/* Background/Map Section (Left) */}
      <div className={styles.mapSection}>
        <img
          src="https://jeffbridgforth.com/codepen/places-map.png"
          alt="Background Map"
          className={styles.mapImage}
        />
      </div>

      {/* Content Section (Right) */}
      <div className={styles.contentSection}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>Milo Ian Kenney</h1>
          <p className={styles.subtitle}>Stay updated with character profile and history</p>
        </div>

        <div className={styles.cardSection}>
          <div className={styles.milo}>
            <img src="https://i.imgur.com/6NXlscw.png" alt="Background" className={styles.bgImage} />
            <div className={styles.cardContentWrapper}>
              <div className={styles.testino}>
                <span className={styles.r}>
                  <span className={styles.c}>milo ian kenney</span> <span className={styles.y}>(gemini sun, gemini rising & aquarius moon)</span> è cresciuto tra i collettivi e i centri sociali di <span className={styles.m}>brooklyn</span>, in mezzo alle teste calde della lotta anticapitalista. ha una madre mezza turca da cui ha ereditato i colori mediterranei e l'indole da leader politico, e conta almeno tre zie e una decina di cugine con le quali ha condiviso <span className={styles.n}>case, libri, auto (soprattutto multe), <s>vestiti</s> e ideali.</span> leader della pubblica istruzione, cacciato più di una volta dal <span className={styles.g1}>club di dibattito</span> e segnato sull'anniversario scolastico <span className={styles.m1}>as most likely to say "why would i lie" when he's lying</span>. il suo hobby preferito è la <span className={styles.m}>cleptomania</span> e dice un po' troppe cazzate con la scusa di voler rendere le cose più interessanti. <span className={styles.y}>(he's a 1 but there's just something about him)</span> al campo c'è arrivato a gennaio 2022 assieme alla barista della sua caffetteria di fiducia, <span className={styles.n}>willa</span>, dopo essere stati attaccati entrambi da un'<span className={styles.m}>empusa</span> neanche il tempo di finire il suo <i>cortado</i>. l'intervento eroico di un satiro li ha salvati da una brutta fine, ma alcune voci di corridoio dicono che l'empusa fosse già stata messa k.o. dall'incessante parlantina di milo, <span className={styles.n}>e che alla fine abbia pure implorato il satiro di portarselo via</span>. nell'ultimo anno e mezzo ha affrontato mostri mitologici, salvato oracoli, conversato con <i>dèi dimenticati</i>, visitato l'olimpo, ceduto al canto delle <span className={styles.m}>sirene</span> e scoperto il suo più grande difetto, recuperato <i>frammenti</i> di artefatti appartenuti ad <span className={styles.m}>eracle</span>, salvato un bambino dalle mormò per poi <i>prendersene cura</i> in una cabina di ladri e viandanti, assorbito uno dei mali del mondo, <span className={styles.m}>il rimorso</span>, dopo essersi seduto su una sedia elettrica durante le ultime imprese titaniche... pare che l'idea di essere un semidio sembra avergli dato particolarmente alla testa, <span className={styles.g1}>ma forse è solo la sua luna in acquario.</span>
                </span>
              </div>
              <div className={styles.aff}>
                <span className={styles.r1}>
                  <span className={styles.c}>CABIN XI</span> • <a href="#" onClick={(e) => { e.preventDefault(); window.open('http://thickasthieves.altervista.org/Milo/jazzmine.html', '', 'scrollbars=no,menubar=no,width=350,height=500'); }}>JAZZ</a> • <a href="#" onClick={(e) => { e.preventDefault(); window.open('http://thickasthieves.altervista.org/Milo/puck.html', '', 'scrollbars=no,menubar=no,width=350,height=500'); }}>PUCK</a><br />
                  <span className={styles.n1}>willa • jax • maeve • opal • juliet</span><br />
                  <i>nilufer</i>, amber, <i>len</i>, eleanor, <i>silene</i><br />
                  edward, samuel, zeke, <s>logan</s>.<br />
                  <span className={styles.r2}>( <i>aidan, caleb, <a href="#" onClick={(e) => { e.preventDefault(); window.open('http://thickasthieves.altervista.org/Milo/oliver.png', '', 'scrollbars=no,menubar=no,width=450,height=400'); }}>oliver</a>, llyr</i> )</span><br />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}