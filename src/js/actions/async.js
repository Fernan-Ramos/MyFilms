export const ASYNC_ADD = 'ASYNC_ADD';
export const ASYNC_DELETE = 'ASYNC_DELETE';

export function addAsync(label) {
    return {
        type: ASYNC_ADD,
        label,
    };
}

export function deleteAsync(label) {
    return {
        type: ASYNC_DELETE,
        label,
    };
}