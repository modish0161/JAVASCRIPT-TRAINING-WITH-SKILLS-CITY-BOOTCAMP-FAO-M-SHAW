function varTest() {
    var x = 1;
    {
        var x = 2;
        console.log(x); // Outputs 2, as it modifies the outer variable x
    }
    console.log(x); // Outputs 2, as the inner block affects the outer variable x
}