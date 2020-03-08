const factorial = (begin, end) => {
    if (begin > end) {
        return NaN;
    }
    if (begin === end) {
        return begin;
    }
    return begin * factorial(begin + 1, end);
};
