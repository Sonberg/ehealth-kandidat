export default function() {
  this.transition(
    this.hasClass('chat'),
    this.use('scale', {duration : 600}),
    this.reverse('scale', {duration : 600})
  );
  
  this.transition(
    this.hasClass('timeline'),
    this.use('toDown', {duration : 600}),
    this.reverse('toUp', {duration : 600})
  );
}