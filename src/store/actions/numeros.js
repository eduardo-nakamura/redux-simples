export function alterarNumeroMin(num) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: num
    }
}

export function alterarNumeroMax(num) {
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: num
    }
}