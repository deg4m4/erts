import { ipcRenderer } from "electron"

function ifdocisready(cb: Function) {
    setTimeout(() => {
        if (document.readyState !== "complete") {
            ifdocisready(cb)
            return;
        }
        cb()
    }, 100);
}

ifdocisready(frameutily)

let selFrame = false;


let pos = { x: 0, y: 0 }

function frameutily() {
    let frame = document.getElementById("winframe")

    frame?.addEventListener("mousedown", () => { selFrame = true; })
    frame?.addEventListener("mouseup", () => { selFrame = false; })
    frame?.addEventListener("mouseleave", () => { selFrame = false; })


    frame?.addEventListener("mousemove", (e) => {
        if (!selFrame) return;
        console.log(`${e.screenX} ${e.clientX}`);
        console.log(e);

        ipcRenderer.send("setpos", JSON.stringify({ x: e.clientX, y: e.clientY }))
    })

}

export { }
