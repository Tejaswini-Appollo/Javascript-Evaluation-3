for(var i = 0; i < 10; i++) {
    let k = i;
    setTimeout(function() {
        console.log(k);
        k = k + 1;
    }, 10);
}