export const sayHello = (text?: string) => {
  console.log(`Hello, ${text ?? 'world'}`);
  return `Hello, ${text ?? 'world ja'}`;
};

export default sayHello;
