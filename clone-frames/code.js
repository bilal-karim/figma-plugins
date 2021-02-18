// Find Frames in the document
const frame = figma.currentPage.findChildren(n => n.type === 'FRAME');
// Specify number of clones (duplicates) for the Frame
var cloneCount = 4;
// Take the first Frame and clone it
for (var i in frame) {
    for (let x = 0; x < cloneCount; x++) {
        frame[i].clone().x;
    }
}
// Close plugin otherwise it will keep running, 
// which shows the cancel button at the bottom of the screen.
figma.closePlugin();
