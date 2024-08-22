function foo(a, b) {
    if (a > b) {
        alert(`${a} + > + ${b}`);
    } else if (a < b) {
        alert(`${a} < ${b}`);
    } else {
        alert('bu son barobar')
    }
}

foo(9, 5);
foo(30, 30);
foo(2, 3);
foo(50, 7);