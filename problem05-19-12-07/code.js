
function cons(a, b) {
    return (f) => f(a, b);
}

function car(pair) {
    return pair((a, b) => a);
}

function cdr(pair) {
    return pair((a, b) => b);
}

module.exports = {
    cons,
    car,
    cdr,
}
