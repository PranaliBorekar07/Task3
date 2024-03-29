function insertvalue(value) {
    result.value += value;
}
function clearResult(value) {
    result.value = '';
}
function deleteResult(value) {
    result.value = result.value.slice(0, -1);
}
function calculate() {
    try {
        result.value = eval(result.value);

    } catch (error) {
        result.value = 'Error';
    }

}