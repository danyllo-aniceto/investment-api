export function parseDateIso(date: string) {
  return new Date(date).toISOString();
}
