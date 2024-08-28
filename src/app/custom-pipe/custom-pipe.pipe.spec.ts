import { MyCustomPipes } from "./custom-pipe.pipe";


describe('MyCustomPipes', () => {
  it('create an instance', () => {
    const pipe = new MyCustomPipes();
    expect(pipe).toBeTruthy();
  });
});
