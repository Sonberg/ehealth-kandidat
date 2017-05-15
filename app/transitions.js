export default function() {
  this.transition(
    this.hasClass('progress'),
    this.use('scale', {duration : 600}),
    this.reverse('scale', {duration : 600})
  );
}
