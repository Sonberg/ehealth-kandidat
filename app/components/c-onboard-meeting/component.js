import Ember from 'ember';

export default Ember.Component.extend({
structure: Ember.inject.service(),
data: Ember.computed("structure.person.content", function () {
  return this.get("structure.person.content." + this.get("structure.active"));
}),
grid: Ember.A([
  {
    title: "Möte",
    image: "assets/images/mote.png",
    class: "large-12",
    text: null,
    sections: null
  }, {
    title: "Plats",
    image: "assets/images/plats.png",
    class: "large-6",
    text: null,
    sections: [
      {
        title: "Göteborg",
        text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt",
        choise: true
      },
      {
        title: "Malmö",
        text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt",
        choise: true
      },
      {
        title: "Lund",
        text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt",
        choise: true
      }
    ]
  }, {
    title: "Resa",
    image: "assets/images/resa.png",
    class: "large-6",
    text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt",
    sections: "Jag vill göra min behandling i"
  }, {
    title: "Boende",
    image: "assets/images/hotell.png",
    class: "large-6",
    text: "Vero chia cornhole, deep v seitan tumblr semiotics selfies biodiesel poutine letterpress deserunt",
    sections: null
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
