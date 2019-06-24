export const LATEST_ADD = 'LATEST_ADD';

export function addLatest(latestMovie) {
  return {
    type: LATEST_ADD,
    latestMovie,
  };
}
