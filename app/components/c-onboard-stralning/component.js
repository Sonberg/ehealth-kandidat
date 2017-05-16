import Ember from 'ember';

export default Ember.Component.extend({
structure: Ember.inject.service(),
canChoose: true,
data: Ember.computed("structure.person.content", function () {
  return this.get("structure.person.content." + this.get("structure.active"));
}),
grid: Ember.A([
  {
    title: "Strålning",
    image: "assets/images/stralbehandling.png",
    class: "large-6",
    text: "Strålbehandling började användas för behandling av cancer redan i slutet av 1800-talet. Sedan dess har metoderna naturligtvis utvecklats mycket. Ny utrustning med bland annat högre energi ger effektivare behandling med mindre biverkningar. <br><br> I dag står strålbehandlingen för 30 procent av all bot mot cancer och hälften av alla cancerpatienter får någon gång strålbehandling. Det kan röra sig om så kallad extern strålbehandling, där strålkällan finns utanför kroppen, eller brakyterapi, där strålkällan placeras invid eller i tumören.  Strålbehandling kan kombineras med cytostatika, hormonbehandling eller annan medicinsk behandling. <br> <br>Strålbehandling kan ges för att bota en cancersjukdom. Man talar då om kurativ behandling. Strålbehandling kan också ges för att lindra en obotlig cancersjukdom. Då säger man att behandlingen är palliativ. ",
    choise: null
  }, {
    title: "Plats",
    class: "large-6",
    image: "assets/images/plats.png",
    choise: "Jag vill göra min behandling i",
    text: "I Halmstad finns det inte utrustning för att genomföra denna behandlingen, detta är platserna där du kan välja <br><br>",
    sections: [
      {
        title: "Göteborg",
        choise: true
      },
      {
        title: "Lund",
        text: "För patienter från Halmstad är det vanligast att behandlingen genomförs här",
        choise: true
      },
      {
        title: "Borås",
        choise: true
      },
      {
        title: "Växjö",
        choise: true
      },
    ]
  }, {
   title: "Resa",
   class: "large-6",
   image: "assets/images/resa.png",
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
 }, {
    title: "Boende",
    image: "assets/images/hotell.png",
    class: "large-6",
    text: "I Lund finns det hotell för patienter där du kan övernatta",
  },{
    title: "Egenvård",
    class: "large-6",
    image: "assets/images/rehab.png",
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
   didChangeCheckbox: function () {
     this.toggleProperty("structure.person.content." + this.get("structure.active") + ".completed");
     this.set("structure.person.content", JSON.parse(JSON.stringify(this.get("structure.person.content"))));
     this.get("structure.person").save();
   }
 }
});
