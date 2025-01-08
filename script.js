document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const uid = document.querySelector('#uid').value;
  alert(`UID Submitted: ${uid}`);
});