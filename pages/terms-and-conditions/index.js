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
          TERMS AND CONDITIONS
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
          Wir erheben und verwenden personenbezogene Daten unserer Nutzer
          grundsätzlich nur, soweit dies zur Bereitstellung einer
          funktionsfähigen Webseite sowie unserer Inhalte und Leistungen
          erforderlich ist. Die Erhebung und Verwendung personenbezogener Daten
          unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers.
          Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige
          Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich
          ist und die Verarbeitung der Daten durch gesetzliche Vorschriften
          gestattet ist.
        </p>
        <p className={style.para}>
          Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer
          rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen
          unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
        </p>
        <p className={style.para}>
          Die personenbezogenen Daten der betroffenen Person werden gelöscht
          oder gesperrt, sobald der Zweck der Speicherung entfällt. Eine
          Speicherung kann darüber hinaus erfolgen, wenn dies durch den
          europäischen oder nationalen Gesetzgeber in unionsrechtlichen
          Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der
          Verantwortliche unterliegt, vorgesehen wurde. Eine Sperrung oder
          Löschung der Daten erfolgt auch dann, wenn eine durch die genannten
          Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine
          Erforderlichkeit zur weiteren Speicherung der Daten für einen
          Vertragsabschluss oder eine Vertragserfüllung besteht.
        </p>
        <p className={style.para}>
          Bei Ihrer Kontaktaufnahme mit uns per E-Mail werden die von Ihnen
          mitgeteilten Daten von uns gespeichert, um Ihre Frage zu beantworten.
          Die in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die
          Speicherung nicht mehr erforderlich ist, also der Zweck der
          Speicherung entfallen ist, oder schränken die Verarbeitung ein, falls
          gesetzliche Aufbewahrungspflichten bestehen.
        </p>
        <p className={style.para}>
          Falls wir für einzelne Funktionen unseres Angebotes auf beauftragte
          Dienstleister zurückgreifen oder Ihre Daten für gewerbliche Zwecke
          nutzen möchten, werden wir Sie untenstehend im Detail über die
          jeweiligen Vorgänge informieren. Dabei nennen wir auch die
          festgelegten Kriterien der Speicherdauer.
        </p>
        <p className={style.heading}>3. Ihre Rechte als Betroffener</p>
        <p className={style.para}>
          Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
          betreffenden personenbezogenen Daten:
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
          4. Erhebung personenbezogener Daten bei Besuch unserer Webseite
        </p>
        <li className={style.para}>IP-Adresse</li>
        <li className={style.para}>Datum und Uhrzeit der Anfrage</li>
        <li className={style.para}>Inhalt der Anforderung (konkrete Seite)</li>
        <li className={style.para}>Zugriffsstatus / HTTP-Statuscode</li>
        <li className={style.para}>jeweils übertragene Datenmenge</li>
        <li className={style.para}>
          Webseite, von der die Anforderung kommt (Browsertyp)
        </li>
        <li className={style.para}>Betriebssystem des Nutzers</li>
        <p className={style.para}>
          Die Daten werden ebenfalls in den Logfiles unseres Systems
          gespeichert. Eine Speicherung dieser Daten zusammen mit anderen
          personenbezogenen Daten des Nutzers findet nicht statt
          (Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p className={style.para}>
          Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der
          Webseite sicherzustellen. Zudem dienen uns die Daten zur Optimierung
          der Webseite und zur Sicherstellung der Sicherheit unserer
          informationstechnischen Systeme. Eine Auswertung der Daten zu
          Marketingzwecken findet in diesem Zusammenhang nicht statt.
        </p>
        <p className={style.para}>
          Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes
          ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung
          der Daten zur Bereitstellung der Webseite ist dies der Fall, wenn die
          jeweilige Sitzung beendet ist.
        </p>
        <p className={style.para}>
          Im Falle der Speicherung der Daten in Logfiles ist dies nach
          spätestens sieben Tagen der Fall. Eine darüberhinausgehende
          Speicherung ist möglich. In diesem Fall werden die IP-Adressen der
          Nutzer gelöscht oder verfremdet, sodass eine Zuordnung des aufrufenden
          Clients nicht mehr möglich ist. Die Erfassung der Daten zur
          Bereitstellung der Webseite und die Speicherung der Daten in Logfiles
          ist für den Betrieb der Internetseite zwingend erforderlich. Es
          besteht folglich seitens des Nutzers keine Widerspruchsmöglichkeit.
        </p>
        <p className={style.heading}>5. Einsatz und Verwendung von Cookies</p>
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
          6. Widerspruch oder Widerruf gegen die Verarbeitung Ihrer Daten
        </p>
        <p className={style.para}>
          Falls Sie eine Einwilligung (Art.6 Abs.1 lit. a DSGVO) zur
          Verarbeitung Ihrer Daten erteilt haben, können Sie diese jederzeit
          widerrufen. Ein solcher Widerruf beeinflusst die Zulässigkeit der
          Verarbeitung Ihrer personenbezogenen Daten, nachdem Sie ihn gegenüber
          uns ausgesprochen haben.
        </p>
          <p className={style.heading}>7. Verarbeitung personenbezogener Daten</p>
        <p className={style.para}>
          Die Daten werden für die Vertragserfüllung auf Grundlage des Art. 6
          Abs. 1 lit. b DSGVO verarbeitet. Zur Abwicklung Ihres Auftrags
          arbeiten wir teilweise auch mit Dienstleistern zusammen, die uns ganz
          oder teilweise bei der Durchführung der geschlossenen Verträge
          unterstützen.
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
        {/* <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.para}></p>
      <p className={style.heading}>5. Einsatz und Verwendung von Cookies</p> */}
      </div>
      <Footer />
    </div>
  );
};

export default index;
