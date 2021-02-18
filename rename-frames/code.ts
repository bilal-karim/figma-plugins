// This plugin creates 5 rectangles on the screen.
// const numberOfRectangles = 5

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).

// const nodes: SceneNode[] = [];
// for (let i = 0; i < numberOfRectangles; i++) {
//   const rect = figma.createRectangle();
//   rect.x = i * 150;
//   rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
//   figma.currentPage.appendChild(rect);
//   nodes.push(rect);
// }
// figma.currentPage.selection = nodes;
// figma.viewport.scrollAndZoomIntoView(nodes);

// console.log(figma.currentPage);
// console.log(figma.currentPage.name);

// DUPLICATE ARTBOARDS
// const frame = figma.currentPage.findChildren(n => n.type === 'FRAME');
// var keyToFind = '#account_id';
// var numberofAccounts = 299;
// for (var i in frame) {
//     for (let x = 0; x < numberofAccounts; x++) {
//         const w = frame[i].width;
//         frame[i].clone().x;
//     }
// }

// console.log(figma.currentPage.children[0].clone());
// console.log(figma.currentPage.children[0].name);
// figma.currentPage.children[0].name = '#test';

// const nodes = figma.currentPage.findAll(n => n.type === 'FRAME' )
// console.log(nodes[0].name.includes('#'));

// WORKING CODE
const selection = figma.currentPage.selection;
console.log(selection);

for (var x in selection) {
    // var frameName = selection[x].name;
    const layer = selection[x]['children'];
    // const textLayer = layer.find('TextNode');
    console.log(layer);
    console.log(layer[14]['children'][1]['characters']);
    selection[x].name= layer[14]['children'][1]['characters'];
}

// const frame = figma.currentPage.findChildren(n => n.type === 'FRAME');
// const layer = figma.currentPage.findAll(n => n.type === 'TEXT')
// var keyToFind = '#account_id';
// for (var x in frame) {
//     console.log(frame[x]);
    
//     for (var i in layer) {
//         if (layer[i].name == keyToFind) {
//             // console.log(layer[i].name);
//             console.log(layer[i]);
//             console.log(layer[i]['characters']);
//         }
//     }
//     frame[x].name = layer[i]['characters'];
// }

// console.log(layer);

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
