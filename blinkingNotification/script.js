{
  

function showNotification(options) {
  let notification = document.createElement('div');

  notification.className = "notification " + options.className;
  notification.innerHTML = options.html;
  notification.style.top = options.top + 'px';
  notification.style.right = options.right + 'px';

  document.body.append(notification);  
  setTimeout(() => notification.remove(), 1000);
}

showNotification({
  top: 50,
  right: 50,
  html: "Hello!",
  className: "welcome"
});

let counter = 1;
setInterval(() => {
  showNotification({
    top: 50,
    right: 50,
    html: "Hello! " + counter++,
    className: "welcome"
  })
}, 2000);

}