import Ember from 'ember';

export default Ember.Component.extend({
  structure: Ember.inject.service(),
  canChoose: true,
  data: Ember.computed("structure.person.content", function() {
    return this.get("structure.person.content." + this.get("structure.active"));
  }),
  grid: Ember.A([
    {
      title: "Magnetröntgen",
      image: "../../assets/images/stralbehandling.png",
      class: "large-6",
      text: "MRT, magnetisk resonans tomografi, kallas i folkmun för magnetkamera. Med denna metod undersöker man kroppens inre med hjälp av starka magnetfält. <br><br> MRT ger tydliga bilder av kroppens mjukdelar och ämnesomsättning. Vätskeflöden, exempelvis cirkulationen av vätskan som omger hjärna och ryggmärg, kan med fördel studeras med MRT.Patienten får ligga på en brits inuti en cirkelformad apparat.Undersökningen är inte obehaglig men man måste ligga stilla, med stöd av kuddar.På grund av höga ljud från apparaturen får man bära hörlurar under undersökningen.Bilderna tas i olika sekvenser och under tiden får inte dörren öppnas in till undersökningsrummet. Då störs magnetfälten.Personalen har uppsikt genom ett fönster och radiokontakt med patienten<br><br>. Undersökningen går till så att patienten placeras i ett magnetfält samtidigt som radiosignaler skickas mot kroppen.Kroppens vätejoner kommer då i svängning och avger radiovågor till mottagare. Radiovågorna från vätejonerna samlas ihop och bearbetas av en dator som presenterar informationen i skiktbilder. Det finns idag inga kända biverkningar av MRT, exempelvis medför undersökningen inte någon strålning. <br> <br > ",
      choise: null
    }, {
      title: "Plats",
      class: "large-6",
      image: "../../assets/images/plats.png",
      choise: "Jag vill göra min behandling i",
      text: "I Halmstad finns det inte utrustning för att genomföra denna behandlingen, detta är platserna där du kan välja <br><br>",
      sections: [
        {
          title: "Malmö",
          choise: true
        }, {
          title: "Helsingborg",
          choise: true
        }, {
          title: "Göteborg",
          choise: true
        }, {
          title: "Borås",
          choise: true
        }
      ]
    }, {
     title: "Resa",
     class: "large-6",
     image: "../../assets/images/resa.png",
     choise: "Jag vill göra min behandling i",
     text: "Patienten kan själv ta tåget till platsen. Ersättning betalas ut mot upvisning av kvitton <br><br>",
     sections: [
       {
         title: "Tåg",
         choise: true
       },
       {
         title: "Bil",
         choise: true
       },
       {
         title: "Buss",
         choise: true
       },
     ]
   },{
     title: "Egenvård",
     class: "large-6",
     image: "../../assets/images/rehab.png",
     text: "Detta är åtgärder som du kan göra själv och tänka på, före, och efter behandlingen",
     sections: [{
       title: "Före behandlingen",
       text: "Detta är bra att tänka på",
       sections: [{
         title: "Röra på dig",
         text: "En promenad varje dag"
       },
       {
         title: "Mat",
         text: "Ät näringsnyttig mat"
       }]
     },{
       title: "Efter behandlingen",
       text: "Detta är bra att tänka på",
       sections: [{
         title: "Röra på dig",
         text: "En promenad varje dag"
       }]
     }]
   }
  ]),
  actions: {
    didChangeCheckbox: function() {
      this.toggleProperty("structure.person.content." + this.get("structure.active") + ".completed");
      this.set("structure.person.content", JSON.parse(JSON.stringify(this.get("structure.person.content"))));
      this.get("structure.person").save();
    }
  }
});
