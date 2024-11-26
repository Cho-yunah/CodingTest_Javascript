function solution (arr) {
    let x = 0;
    let prev = [...arr];

    while (true) {
        const next = prev.map((item) => {
            if (item >= 50 && item % 2 === 0) {return item / 2}
            else if (item < 50 && item % 2 === 1) { return item * 2 + 1}
            else return item;
        });

        const isEqual = prev.every((item, idx) => item === next[idx]);

        if (isEqual) break;
        prev = next;
        x++;
        // console.log('arr, prev, next : ', arr, prev, next)
    }

    return x;
}

  