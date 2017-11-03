const program = require("./hello.js");
let outputData = “”
const storeLog = inputs => (outputData += inputs);
test("console log Hello World", () => {
  console["log"] = jest.fn(storeLog);
  program();
  expect(console.log).toBeCalled();
  expect(outputData).toBe("Hello World");
});
