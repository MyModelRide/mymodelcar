import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const index = () => {
  const style = {
    heading: "font-semibold my-2 md:my-3",
    para: "text-light my-2 md:my-3 leading-[35px]",
  };
  const onScroll = (value) => {};
  return (
    <div className="min-h-[100vh] ">
      <Navbar onScroll={onScroll} />
      {/* adding the privacy policty content */}
      <div className="text-stone-900 font-light w-[95%] md:w-[65%] mx-auto py-28 md:py-36">
        <p className="text-4xl md:text-4xl text-center font font-semibold tracking-wider my-12">
          WARRANTY
        </p>
        {/* <p className={style.heading}>
          1. Information über den Verantwortlichen und den
          Datenschutzbeauftragten
        </p>
        <p className={style.para}>
          Im Folgenden informieren wir über die Erhebung personenbezogener Daten
          bei Nutzung unserer Webseite.
        </p>
        <p className={style.para}>
          Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutzgrundverordnung (die
          „DSGVO“) und anderer nationaler Datenschutzgesetze der Mitgliedstaaten
          sowie sonstiger datenschutzrechtlicher Bestimmungen ist die:
        </p>
        <p className={style.para}>
          Webseite: www.nachsendeauftrag-einrichten.de
        </p>
        <p className={style.para}>
          Unseren Datenschutzbeauftragten erreichen Sie unter
          datenschutz@nachsendeauftrag-einrichten.de.
        </p>{" "}
        <p className={style.heading}>
          2. Allgemeines zur Verarbeitung personenbezogener Daten
        </p>
        <p className={style.para}>
          Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
          über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
          beschweren.
        </p>
        <p className={style.para}>
          Sollten Sie Fragen, Kommentare oder Anfragen bezüglich der Erhebung,
          Verarbeitung und Nutzung Ihrer personenbezogenen Daten durch uns
          haben, wenden Sie sich bitte ebenfalls an uns unter den oben
          angegebenen Kontaktdaten.
        </p>
        <p className={style.heading}>
          3. Erhebung personenbezogener Daten bei Besuch unserer Webseite
        </p>
        <li className={style.para}>IP-Adresse</li>
        <li className={style.para}>Datum und Uhrzeit der Anfrage</li>
        <li className={style.para}>
          Webseite, von der die Anforderung kommt (Browsertyp)
        </li>
        <li className={style.para}>Betriebssystem des Nutzers</li>
        <p className={style.heading}>4. Einsatz und Verwendung von Cookies</p>
        <p className={style.para}>
          Unsere Webseite nutzt Cookies. Bei Cookies handelt es sich um kleine
          Textdateien, die auf Ihrer Festplatte den von Ihnen verwendeten
          Browser zugeordnet, gespeichert werden und durch welche der Stelle,
          die den Cookie setzt, bestimmte Informationen zufließen. Cookies
          können keine Programme ausführen oder Viren auf Ihren Computer
          übertragen. Sie helfen das Internetangebot insgesamt
          nutzerfreundlicher und effektiver zu machen. Die Rechtsgrundlage für
          die Verarbeitung personenbezogener Daten unter Verwendung von Cookies
          ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p className={style.para}>
          Unsere Webseite kann auch grundsätzlich ohne Cookies betrachtet werden
          Sie können Ihre Browsereinstellung entsprechend Ihren Wünschen
          konfigurieren und z.B. die Annahme von sogenannten Third Party Cookies
          oder allen Cookies ablehnen. Bereits gespeicherte Cookies können
          jederzeit gelöscht werden. Dies kann auch automatisiert erfolgen.
          Bitte beachten Sie dabei, dass einzelne Funktionen unserer Webseite
          möglicherweise nicht funktionieren, wenn Sie die Verwendung von
          Cookies deaktiviert haben.
        </p>
        <p className={style.heading}>
          5. Widerspruch oder Widerruf gegen die Verarbeitung Ihrer Daten
        </p>
        <p className={style.para}>
          Enso erfolgt eine Weitergabe im Rahmen von gesetzlichen
          Verpflichtungen (z.B. an Ermittlungsbehörden). Weiterhin sind
          Leistungen zum Kundenservice oder auch bzgl. der IT an Dienstleister
          ausgelagert An diese Dienstleister werden die erhobenen Daten auf
          Grundlage des Art. 6 Abs. 1 lit. b DSGVO weitergegeben.
        </p>
        <p className={style.para}>
          Eine Verarbeitung Ihrer Daten in einem Drittstaat erfolgt
          grundsätzlich nicht. Sofern Ihre neue Anschrift jedoch im Ausland
          liegt, erfolgt eine Übergabe der Daten an den dortigen
          Postdienstleister zwecks Vertragserfüllung. oder Ihre Daten werden
          auch in einem sog. Drittstatt verarbeitet. Dies erfolgt entweder, da
          die Übermittlung zur Vertragserfüllung erforderlich ist, auf Basis der
          EU-Standardvertragsklauseln.
        </p> */}
      </div>
      <Footer />
    </div>
  );
};

export default index;
