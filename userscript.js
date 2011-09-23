"http://www.facebook.com/connect/uiserver.php?app_id=2345053339&next=https%3A%2F%2Fwww.facebook.com%2Fdevelopers&display=page&locale=en_US&return_session=0&canvas=1&legacy_return=1&method=permissions.request";

function mouse(name){
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent(name ? ('mouse'+name) : 'click', true, true, window, 0, 0, 0, 1, 1, false, false, false, false, 0, null);
  return evt;
}
function click(el){
  el.dispatchEvent(mouse('over'));
  el.dispatchEvent(mouse('down'));
  el.dispatchEvent(mouse('up'));
  el.dispatchEvent(mouse());
}

click(document.querySelector('input[name=grant_clicked]'));

"https://developers.facebook.com/apps"

click(document.querySelector('a[href="/ajax/create"]'))

var inputs = document.querySelectorAll('.createAppTextInputRow');
inputs[0].value = 'OpenGraph Application';
inputs[1].value = 'oga'+Math.random().toString(36).substr(2).replace(/[0-9]/g, '');
document.querySelector('#termsCheckbox').checked = true;

click(document.querySelector('input[name=create][value=Continue]'))


location = location.href.replace('/summary', '/opengraph/getting-started');
document.querySelector('input[name=action_type]').value = 'eat'
document.querySelector('input[name=object_type]').focus()
document.querySelector('input[name=object_type]').value = 'sandwich'
document.querySelector('input[name=object_type]').blur()
click(document.querySelector('input[type=submit]'))

click(document.querySelector('input[type=submit]'))

click(document.querySelector('input[type=submit]'))

click(document.querySelector('input[type=submit]'))


//then facebook home then click
