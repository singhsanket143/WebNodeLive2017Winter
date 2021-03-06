function download (url) {
    return new Promise(function (resolve, reject) {
        if (!url.startsWith("http")) {
            reject(new Error("Url does not start with http"));
        } else {
            console.log("Start download : " + url);
            setTimeout(function () { // fake 3 second download task
                console.log("Inside settimeout of download");
                let fileName = url.split("/").pop();
                resolve(fileName);
            }, 3000)
        }
    });
}

function resize (fileName) {
    return new Promise(function (resolve, reject) {
        if (!fileName.endsWith(".png")) {
            reject(new Error("file is not png"));
        } else {
            console.log("Start resize : " + fileName);
            setTimeout(function () { // fake 3-sec resize task
                // change x.png -> x-resized.png
                console.log("Inside settimeout of resize");
                let resizeFile = fileName.split(".")[0] + "-resized.png";
                resolve(resizeFile);
            }, 3000)
        }
    })
}

function upload (resizedFileName) {
    return new Promise(function (resolve, reject) {
        console.log("Start upload : " + resizedFileName);
        setTimeout(function() { // fake 3-sec upload task
            console.log("Inside settimeout of upload");
            let uploadedUrl = "http://imgur.com/" + resizedFileName;
            resolve(uploadedUrl);
        }, 3000)
    })
}

download('http://cb.lk/logo.png')
    .then(resize)
    .then(upload)
    .then(function(uploadedUrl) {
        console.log("File was uploaded to : " + uploadedUrl)
    })
    .catch(function (err) {
        console.error(err)
    });