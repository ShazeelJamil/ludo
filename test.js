var redUnkillableStops = [14, 4, 8, 9, 10, 11, 12];
var greenUnkillableStops = [22, 32, 26, 27, 28, 29, 30];
var blueUnkillableStops = [40, 50, 44, 45, 46, 47, 48];
var yellowUnkillableStops = [58, 68, 62, 63, 64, 65, 66];

var unkillables =
    [
        yellowUnkillableStops,
        blueUnkillableStops,
        greenUnkillableStops,
        redUnkillableStops
    ]


// console.log(unkillables)

// if (unkillables.some(row => row.includes(68))) {
if (unkillables.includes(68)) {
    console.log("includes")
}
else
    console.log("not includes")
