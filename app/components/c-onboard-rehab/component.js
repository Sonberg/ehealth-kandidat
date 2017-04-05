import Ember from 'ember';

export default Ember.Component.extend({
structure: Ember.inject.service(),
data: Ember.computed("structure.person.content", function () {
  return this.get("structure.person.content." + this.get("structure.active"));
}),
grid: Ember.A([
  {
    title: "Rehablitering",
    image: "../../assets/images/rehab.png",
    class: "large-6",
    text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt",
    choise: null
  }, {
    title: "Plats",
    class: "large-6",
    image: "../../assets/images/plats.png",
    text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt",
    choise: "Jag vill göra min behandling i"
  }, {
    title: "Resa",
    class: "large-6",
    image: "../../assets/images/resa.png",
    text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt",
    choise: "Jag vill göra min behandling i"
  }, {
    title: "Boende",
    image: "../../assets/images/hotell.png",
    class: "large-6",
    text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt",
    choise: "Jag vill göra min behandling i"
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
