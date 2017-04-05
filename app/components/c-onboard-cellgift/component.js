import Ember from 'ember';

export default Ember.Component.extend({
structure: Ember.inject.service(),
canChoose: true,
data: Ember.computed("structure.person.content", function () {
  return this.get("structure.person.content." + this.get("structure.active"));
}),
grid: Ember.A([
  {
    title: "Cellgift",
    image: "../../assets/images/behandling.png",
    class: "large-6",
    text: "Cytostatika kan bota flera typer av cancer. Ungefär hälften av alla patienter med cellgiftsbehandling får denna i botande syfte – de bedöms kunna bli helt friska. I övriga fall är syftet att bromsa sjukdomen eller lindra besvären. <br><br> Men risken för biverkningar är stor, eftersom cytostatika även påverkar normala cellers tillväxt. Skadorna kan drabba blodet, mag-tarmkanalen, levern, njurarna och nervsystemet. Ökad risk för infektioner är vanligt. Medlen kan också ge håravfall. <br><br>Avvägningen mellan sannolik nytta och risken för skada är svår - särskilt i fall då cancern inte går att bota och behandling endast skulle kunna förlänga livet och/eller lindra den sjukes besvär.",
    choise: null
  }, {
    title: "Plats",
    class: "large-6",
    image: "../../assets/images/plats.png",
    text: "Behandling genomför i Halmstad",
  }, {
    title: "Resa",
    class: "large-6",
    image: "../../assets/images/resa.png",
    text: "Patienten ansvarar själv för transport till mottagningen",
    choise: "Jag vill göra min behandling i"
  }
]),
 actions: {
   didChangeCheckbox: function () {
     this.toggleProperty("structure.person.content." + this.get("structure.active") + ".completed");
   }
 }
});
