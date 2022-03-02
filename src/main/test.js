// eslint-disable-next-line import/prefer-default-export
export function test(_args, Turing) {
  Turing.Pixel_FromScreen(0, 0, 1080, 960);
  Turing.Pixel_Preview();
  return Turing.Version();
}
