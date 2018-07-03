function staircase(n) {
    let s = '';
    for (var i = 1; i <= n; i++) {
            s += ' '.repeat(n - i) + '#'.repeat(i)  + '\n';
    }
    console.log(s);
}