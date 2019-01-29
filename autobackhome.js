if(parent.dontback) {
    document.addEventListener("mousemove", parent.dontback, true)
} else {
    console.log("AutoBackHome could not find parent document.")
}