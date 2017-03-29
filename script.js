console.log("This is a test");

var intArr = [25, 8, 7, -2, 25, -55, 34, -9];

console.log(intArr);

// function myZigZag(sorted) {
//     var shifted = sorted.shift();
//     console.log(shifted);
//     var popped = sorted.pop();
//     var pushed;
//     pushed += empty.push(shifted);
//     pushed += empty.push(popped);
//     console.log(empty);
//     console.log(sorted);
// }

function zigZag() {
    var sorted = intArr.sort(function(a,b) {return b-a});
    console.log(sorted);
    // console.log(sorted.length);
    var empty = [];

    // function myZigZag() {
    //     console.log(sorted.length);
    //     var shifted = sorted.splice(0, 1);
    //     console.log(shifted);
    //     var popped = sorted.splice(-1, 1);
    //     console.log(popped);
    //     console.log(sorted);
    //     var first = shifted.shift();
    //     var last = popped.pop();
    //     var pushed;
    //     pushed += empty.push(first);
    //     pushed += empty.push(last);
    //     console.log(empty);
    //     console.log(empty.length);
    //     console.log(sorted);
    //     console.log(sorted.length);
    // }

    // var wtf2 = myZigZag(sorted);
    // sorted.forEach(myZigZag);


    // for(i=0; i <= sorted.length; i++) {
    //     var accum = sorted.splice(0, 1);
    //     console.log(accum);
    //     var accum2= accum.push(sorted.splice(-1, 1));
    //     console.log(accum2);
    //     // var pushed;
    //     // console.log(sorted);
    //     // pushed += empty.push(shifted);
    //     // pushed += empty.splice(-1, 1, popped);
    //     // console.log(pushed);
    //     // console.log(empty);
    //     console.log(sorted);
    // }

    for(i=0; i <= sorted.length+2; i++) {
        console.log(sorted.length);
        var shifted = sorted.splice(0, 1);
        console.log(shifted);
        var popped = sorted.splice(-1, 1);
        console.log(popped);
        console.log(sorted);
        var first = shifted.shift();
        var last = popped.pop();
        var pushed;
        pushed += empty.push(first);
        pushed += empty.push(last);
        console.log(empty);
        console.log(empty.length);
        console.log(sorted);
        console.log(sorted.length);
    }

}

zigZag(intArr);
