var showTuchuangWindow = function() {
    chrome.windows.create({
        url: 'pages/tuchuang.html',
        width: 300,
        height: 300,
        focused: true,
        type: 'popup'
    });
}

chrome.contextMenus.create({
    "title": "围脖是个好图床",
    "onclick": function(info, tab) {
        showTuchuangWindow();
    }
});

chrome.browserAction.onClicked.addListener(function() {
    showTuchuangWindow();
});

chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    if (request.action === 'hello'){
        sendResponse('hello');
    } else {
        showTuchuangWindow();
    }
});