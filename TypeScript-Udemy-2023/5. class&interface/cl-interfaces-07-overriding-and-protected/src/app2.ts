// class Hello {
//     constructor(public name: string) {}
  
//     greet() {
//       console.log(`hi! ${this.name}, log: ${this.test()}`)
//     }
  
//     protected test() {
//       return 'test'
//     }
//   }

// class Hi extends Hello {
//     test() {
//       return 'override'
//     }
//   }
  
//   const hi = new Hi('howdy')
//   hi.greet() // output: 'hi howdy, log: override'
  
//   const test = hi.test()
//   console.log(test) // output: 'override'

//   class Hi2 extends Hello {
//     test() {
//       return {a:'override'}
//     }
//   }

//   const hi2 = new Hi2('howdy')
//   hi.greet()

//   class ClassExample {
//     public count: number = 0;
  
//     public static setCount() {
//       this.count += 1;
//       console.log(`count: ${this.count}`)
//     } 
//   }


//   class ClassExample2 {
//     public static count: number = 0;
  
//     public static setCount() {
//       this.count += 1;
//       console.log(`count: ${this.count}`)
//     } 
//   }
  
//   var classExample1 = new ClassExample2();
//   classExample1.setCount();

//   abstract class Person {
//     private _name: string;
//     private _age: number;
    
//     constructor (theName:string, theAge: number) {
//       this._name = theName;
//       this._age = theAge;
//     }
    
//     get name() {
//       return this._name;
//     }
    
//     set name(theName: string) {
//       this._name = theName;
//     }
    
//     get age() {
//       return this._age;
//     }
    
//     set age(theAge: number) {
//       this._age = theAge;
//     }
//   }
  
//   // new 키워드를 사용하여 클래스 인스턴스 객체 생성
//   const person = new Person('Bob', 20);

  

  class Hello {
    constructor(private name: string) {}
  }
  
//   const hello = new Hello('park')
//   hello.name // Property 'name' is private and only accessible within class 'Hello'.
//   // name을 가져오려 하려면, 위와 같은 에러가 뜬다.
  
//   class Hi extends Hello {
//     constructor(public name: string) {
//       super(name)
//     }
    // 서브클래스에서 name을 public으로 바꾸어주려고 해도 에러가 뜬다.
    // Class 'Hi' incorrectly extends base class 'Hello'.
    // Property 'name' is private in type 'Hello' but not in type 'Hi'.ts(2415)
//   }

  const hello2 = new Hello('park')
console.log(hello2['name']) // output: 'park'