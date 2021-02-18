// Get current page selection
const selection = figma.currentPage.selection;
for (var x in selection) {
    const layer = selection[x]['children'];
    selection[x].name = layer[14]['children'][1]['characters'];
}
// Close plugin otherwise it will keep running, 
// which shows the cancel button at the bottom of the screen.
figma.closePlugin();
