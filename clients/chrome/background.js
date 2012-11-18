function show() {
  var time = /(..)(:..)/.exec(new Date()); // The prettyprinted time.
  var hour = time[1] % 12 || 12; // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  var notification = window.webkitNotifications.createNotification('icon16.png', // The image.
  hour + time[2] + ' ' + period, // The title.
  'Time to make the toast.' // The body.
  );
  notification.show();
}



alert('hello!');

// Or create an HTML notification:

var notification = webkitNotifications.createHTMLNotification(
  'icon16.png', 'Notification Title', 'Notification content...'
);

// Then show the notification.
notification.show();

show();