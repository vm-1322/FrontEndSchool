export const formatTime = (seconds: number) => {
  const h = Math.floor((seconds % (60 * 60 * 24)) / 3600);
  const m = Math.floor(((seconds % 60) * 60) / 60);
  const s = Math.floor(seconds % 60);

  return (
    ('00' + h).slice(-2) +
    ':' +
    ('00' + m).slice(-2) +
    ':' +
    ('00' + s).slice(-2)
  );
};
