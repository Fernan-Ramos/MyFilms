export const LIST_ADD = 'LIST_ADD';
export const LIST_DELETE = 'LIST_DELETE';

export function addList(list, id) {
  return {
    type: LIST_ADD,
    list,
    id,
  };
}

export function deleteList(label) {
  return {
    type: LIST_DELETE,
    label,
  };
}
