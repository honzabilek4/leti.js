const Leti = require('../src/leti.js');

it("Sould take options argument",()=>{
    const obj = new Leti("options");
    expect(obj.options).toBe("options");
});