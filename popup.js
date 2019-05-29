// Copyright 2018 @hjnp.

'use strict';

let changeColor = document.getElementById('changeColorX');
console.log("TCL: changeColor", changeColor)

chrome.storage.sync.get('color', function (data) {
    console.log("TCL: data", data)
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});


changeColor.onclick = function (element) {
    let color = element.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        console.log("TCL: changeColor.onclick -> tabs", tabs)
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'document.body.style.backgroundColor = "' + color + '";'
            });
    });
};
