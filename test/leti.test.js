import Leti from '../src/leti.js';

it("Sould define options object",()=>{
    const leti = new Leti();
    expect(leti.options).toBeDefined();
    expect(leti.options.types).toBeDefined();
});
it("Should define custom notifications",()=>{
    const options = {
        types: {
            custom: {}
        }
    };
    const leti = new Leti(options);
    expect(leti.custom).toBeDefined();
    expect(typeof leti.custom === "function").toBeTruthy();
})