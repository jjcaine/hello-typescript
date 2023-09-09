// tuples - fixed
let user: [number, string] = [1, "John"];

//functions
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

//objects
// can annotate objects
let employee: {
  readonly id: number;
  name: string;
} = { id: 1, name: "John" };

employee.name = "John Caine";
