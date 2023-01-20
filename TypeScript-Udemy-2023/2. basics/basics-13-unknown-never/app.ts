let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);


let notSure: unknown;
notSure = 1;
notSure = "maybe a string instead";

// any type에는 unknown 타입 할당 가능
let anyType: any;
anyType = notSure;

// any, unknown 이외의 type에는 unknown 타입 할당 불가능
let numberType: number;
numberType = notSure; // Type 'unknown' is not assignable to type 'number'.


let foo: unknown = 10;

function hasXYZ(obj: any): obj is { x: any, y: any, z: any } {
    return !!obj &&
        typeof obj === "object" &&
        "x" in obj &&
        "y" in obj &&
        "z" in obj;
}

// Using a user-defined type guard...
if (hasXYZ(foo)) {
    // ...we're allowed to access certain properties again.
    foo.x.prop;
    foo.y.prop;
    foo.z.prop;
}

// We can also just convince TypeScript we know what we're doing
// by using a type assertion.
upperCase(foo as string);

function upperCase(x: string) {
    return x.toUpperCase();
}