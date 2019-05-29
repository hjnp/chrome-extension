 chrome.storage.sync.get('color', function (data) {
     console.log("TCL: LOADED COLOR", data)
     document.body.style.backgroundColor = data.color;
 });
