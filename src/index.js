// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    return matrix.reduce((array, element, i) => {
        i % 2 === 0 ? array.push(...element) : array.push(...element.reverse());

        return array;
    }, []);
}
