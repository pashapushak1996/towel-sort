// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    const array = [];

    for (let i = 0; i < matrix.length; i++) {
        const matrixElement = matrix[i];

        if (i % 2 === 0) {
            array.push(...matrixElement);
        } else {
            array.push(...matrixElement.reverse());
        }
    }

    return array;
}
