function hsla(
  hue: number,
  saturation: number,
  lightness: number,
  alpha?: number,
): string {
  if (alpha !== undefined) {
    return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
  }
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function generateShades(hue: number, saturation: number) {
  const shades: Record<number, string> = {};
  [...Array(10)].forEach((_, index) => {
    const lightness = 10 * (index + 1);
    shades[lightness] = hsla(hue, saturation, lightness);
  });
  return shades;
}

export const color = {
  primary: generateShades(165, 100),
};
