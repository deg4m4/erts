"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
function ifdocisready(cb) {
    setTimeout(function () {
        if (document.readyState !== "complete") {
            ifdocisready(cb);
            return;
        }
        cb();
    }, 100);
}
ifdocisready(frameutily);
var selFrame = false;
var pos = { x: 0, y: 0 };
function frameutily() {
    var frame = document.getElementById("winframe");
    frame === null || frame === void 0 ? void 0 : frame.addEventListener("mousedown", function () { selFrame = true; });
    frame === null || frame === void 0 ? void 0 : frame.addEventListener("mouseup", function () { selFrame = false; });
    frame === null || frame === void 0 ? void 0 : frame.addEventListener("mouseleave", function () { selFrame = false; });
    frame === null || frame === void 0 ? void 0 : frame.addEventListener("mousemove", function (e) {
        if (!selFrame)
            return;
        console.log("".concat(e.screenX, " ").concat(e.clientX));
        console.log(e);
        electron_1.ipcRenderer.send("setpos", JSON.stringify({ x: e.clientX, y: e.clientY }));
    });
}
