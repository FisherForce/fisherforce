export function computeScore({ watchTime, likes, comments }) {
  return watchTime * 2 + likes * 3 + comments * 4;
}
