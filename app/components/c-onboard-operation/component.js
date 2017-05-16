import Ember from 'ember';

export default Ember.Component.extend({
structure: Ember.inject.service(),
canChoose: true,
data: Ember.computed("structure.person.content", function () {
  return this.get("structure.person.content." + this.get("structure.active"));
}),
grid: Ember.A([
  {
    title: "Operation",
    image: "assets/images/skalpell.png",
    class: "large-6",
    text: "När man får behandling mot bröstcancer börjar det oftast med en operation. Ibland opereras bara en del av bröstet, andra gånger tas hela bröstet bort. Det beror bland annat på vilken sorts bröstcancer det är och vad man själv vill. <br><br> Före operationen läggs man in på en kirurgisk klinik, oftast samma dag som man ska opereras. Exakt vilka förberedelser som görs beror på vilken typ av operation det gäller, dessutom kan det variera mellan olika sjukhus. Om man är rökare bör man sluta röka eller göra ett uppehåll under några veckor för att resultatet av operationen ska bli så bra som möjligt. Om man tar medicin mot någon annan sjukdom kan man behöva göra ett uppehåll. <br><br>Under operationen är man sövd. Om enbart en bit av bröstet ska tas bort markeras området först så att kirurgen ska hitta rätt. Hur snittet blir beror bland annat på var i bröstet cancern finns. Om hela bröstet ska tas bort gör kirurgen oftast ett ovalt snitt runt bröstet. Vid de flesta bröstcanceroperationer opereras man också i armhålan för att se om cancern har spridit sig till lymfkörtlarna. Den så kallade portvaktskörteln undersöks. Har cancern spridit sig dit tas flera lymfkörtlar bort på en gång. Själva operationen tar ungefär en timme. Med alla förberedelser i operationssalen, sövning och väckning tar det runt två och en halv timme. Om hela bröstet tas bort kan man genomgå en bröstrekonstruktion. Det kan göras antingen i samband med canceroperationen eller senare.",
    choise: null
  }, {
    title: "Boende",
    image: "assets/images/hotell.png",
    class: "large-6",
    text: "Efter operation rekommenderas patient att övernatta på avdelningen"
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
