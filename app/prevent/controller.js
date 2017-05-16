import Ember from 'ember';

export default Ember.Controller.extend({
  grid: Ember.A([
    {
      title: "Rådgivning",
      image: "/assets/images/radgivning.png",
      class: "large-6 medium-6 small-12",
      text: "Anette Karlsson är hälsokoordinator vid livsstilsmottagningen på Emmaboda hälsocentral. Hon träffar personer som vill ha hjälp med att förändra sin livsstil. Jag möter både unga personer och gamla. Det är aldrig för sent att sluta röka, ändra sin kost eller att börja röra på sig men alla har olika förutsättningar. Jag anpassar rådgivningen till den jag har framför mig, säger Anette Karlsson. Hon inleder mötet med ett hälsosamtal om personens levnadsvanor. Därefter hjälper Anette till med att sätta upp mål, vilket är viktigt för att kunna göra en förändring. Utan mål faller det. Personen måste veta vad den strävar mot. Det är bra att börja med små förändringar. Det kan vara jobbigt i början men när personen sedan nått sitt mål mår den oftast bättre och då är det lättare att hålla kvar de goda vanorna.",
      sections: [
        {
          title: "Bakslag är vanliga",
          text: "För den som faller tillbaka i gamla mönster gäller det att fortsätta. Bakslag är vanligt och det är viktigt att förstå att inget går som på räls. I stället ska man se det som en erfarenhet, att lära känna sina fällor och se vad som orsakade bakslaget för att göra annorlunda nästa gång."
        },
        {
          title: "Följa upp-samtal",
          text: "Anette stöttar och följer upp hur det går för den som kommit till henne för rådgivning. Vi träffas fyra gånger per år men det går att ha tätare kontakt i början eftersom det kan dröja för länge med tre månader. Det kan också handla om att vi har kontakt via telefon. Anette är distriktssköterska, har utbildning i livsstil och hälsa vid Linnéuniversitetet, samt utbildning i motiverande samtal vid Folkhälsocentrum i Oskarshamn."
        },
        {
          title: "Kontakt",
          text: "Kontakt uppgifter för att nå en hälsokoordinator nära dig"
        }
      ]
    },
    {
      title: "Rökning",
      image: "/assets/images/rokforbud.png",
      class: "large-6 medium-6 small-12",
      text: "Det finns flera goda anledningar att sluta röka inför en operation. När man röker får kroppens vävnader mindre syre, vilket gör att operationssåret läker långsammare än normalt. Det ökar risken för att få en infektion i såret. Om man är rökfri åtta veckor före och håller upp lika lång tid efter operationen kan risken för komplikationer halveras.",
      sections: [
        {
          title: "Beroende på olika sätt",
          text: "Tobaksberoende innebär fyra olika slags beroenden: Fysiologiskt beroende, Psykologiskt beroende, Vaneberoende & Socialt beroende"
        },{
          title: "Varför är cigarettröken så farlig?",
          text: "När man drar ner cigarettröken i lungorna vid ett halsbloss kommer mer än 8000 skadliga ämnen som finns i röken snabbt in i blodet. Ett 60-tal av ämnena kan orsaka cancer. När man röker får man ökad puls och ökat blodtryck, blodkärlen drar ihop sig och man får sämre kondition."
        }
      ]
    }, {
      title: "Alkohol",
      image: "/assets/images/alkohol.png",
      class: "large-6 medium-6 small-12",
      text: "Alkoholberoende är vanligt. Alkoholvanor och risken att utveckla ett beroende kan påverkas av olika saker. Till exempel hur du har det omkring dig, hur du mår och av ärftlighet. Det går inte att säga hur lång tid och hur mycket du måste ha druckit för att utveckla ett beroende.",
      sections: [
        {
          title: "Att sluta dricka",
          text: "Först måste du bestämma dig för att du vill sluta. När du har bestämt dig för att komma till rätta med alkoholberoendet måste du ändra dryckesvanor. Det finns olika slags behandlingar som är bra och effektiva mot alkoholberoende. "
        },{
          title: "Vad kan jag göra själv?",
          text: "Det kan också gå att ta sig ur ett beroende utan någon speciell behandling. Många ändrar själva sina vanor, kanske med stöd av närstående"
        },{
          title: "Olika typer av behandling",
          text: "Om du vill ha professionell hjälp att ändra dina alkoholvanor finns det många alternativ. Du kan välja läkemedel eller psykologisk behandling, båda anses lika effektiva. Du kan också kombinera olika behandlingar. Om du inte lyckas med en behandling kan du prova en annan."
        }
      ]
    },
    {
      title: "Kostvanor",
      image: "/assets/images/matvanor.png",
      class: "large-6 medium-6 small-12",
      sections: [
        {
          title: "Maten kan behöva anpassas",
          text: "När man får cancerbehandling kan det vara svårt att följa kostråd som ges till friska, eftersom man kan ha besvär med dålig aptit, illamående, smakförändringar, diarré och förstoppning. Då behöver man istället anpassa maten till sina egna förutsättningar, eftersom det allra viktigaste är få i sig tillräckligt med näring och energi för att orka med behandlingarna"
        },{
          title: "Många kan äta som vanligt",
          text: "De flesta får inte problem med maten, eller bara tillfälligt under kortare perioder. Om man äter med god aptit och inte besväras av biverkningar som gör att man har svårt att få i sig mat, kan man fortsätta att äta som vanligt."
        },{
          title: "Bra att försöka hålla vikten stabil",
          text: "Det är vanligt att vikten förändras under cancerbehandlingar. En del minskar i vikt och andra går upp. Det är bra om man kan hålla vikten så stabil som möjligt. Då klarar man ofta behandlingar och biverkningar lättare, man mår ofta bättre och kan återhämta sig snabbare."
        },{
          title: "Stöd och hjälp",
          text: "Om man har frågor om maten ska man aldrig dra sig för att ta upp det med sin sjuksköterska eller läkare. Om man behöver kan man få träffa en dietist för att få extra hjälp."
        }
      ]
    },
    {
      title: "Träning",
      image: "/assets/images/rehab.png",
      class: "large-6 medium-6 small-12",
      text: "Du kan själv påverka din hälsa genom aktiva val, så som att äta hälsosamt, motionera regelbundet och inte röka eller snusa. Vidare påverkar dina alkoholvanor hur du mår, men även stress och sömn är avgörande för att du ska uppleva en god hälsa. En liten förändring av dina levnadsvanor kan ha positiv effekt på din hälsa och minska riskerna för att du ska bli sjuk.",
      sections: [
        {
          title: "Balans mellan aktivitet och vila",
          text: "Oavsett vilka vanor man har haft tidigare är det viktigt att man hittar rätt nivå så att man får energi. Man kan ha vilat mycket och kommit in i en period då konditionen har blivit sämre. Det leder till att man känner sig allt tröttare och det blir jobbigare att företa sig något. "
        },{
          title: "Hjälper även mot cancerrelaterad trötthet",
          text: "Många som får cancer beskriver att de drabbas av en trötthet som de inte känner igen sedan tidigare. Ibland kan tröttheten till exempel bero på blodbrist eller depression, men det finns också en trötthet som inte går att medicinera eller vila bort. Det kallas cancerrelaterad fatigue. Genom fysisk aktivitet går det att även påverka den sortens trötthet."
        },{
          title: "Realistiska mål",
          text: "När man vill börja med rörelser och aktiviteter är det bra att först och främst sätta upp realistiska mål."
        }
      ]
    }
  ])
});
