document.querySelector('link[rel*="icon"]').href = "https://pbs.twimg.com/media/F12BhZ7aEAIc1bQ?format=png&name=small";
document.querySelector('link[rel*="shortcut icon"]').href = "https://pbs.twimg.com/media/F12BhZ7aEAIc1bQ?format=png&name=small";
document.querySelector('link[rel*="apple-touch-icon"]').href = "https://pbs.twimg.com/media/F12BhZ7aEAIc1bQ?format=png&name=small";

function sleep(time) {
    return (new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(); }, time);
    }));
}
sleep(1000).then(function() {
    loading();
});
document.body.onclick = function (e) {
    loading();
};
async function loading() { 
    sleep(1000).then(function () {
        let titleDOM = document.querySelector('title').textContent;
        let prefix = '';
        for (let i = 0; i < titleDOM.length-1; i++) {
            prefix += titleDOM[i];
        }
        prefix += "Twitter";
        console.log(prefix);
        document.title = prefix;
    })
}