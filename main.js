/*

Proxy object in JavaScript

Proxy object allows a block of code to be executed each time operations are performed on the object

*/

// let user = {
//     name: 'Mike',
//     age: 44,
// }

// let userProxy = new Proxy(user, {
//     get: (obj, key) => {
//         console.log('Getting', key);
//         return obj[key];
//     },
//     set: (obj, key, value) => {
//         console.log('Setting', key);
//         obj[key] = value;
//         return true;
//     }
// });

// userProxy.name = 'John';
// userProxy.name;

// console.log(user);
// console.log(userProxy);




// ------------------




// let user = {
//     name: 'Mike',
//     age: 44,
//     drink: {
//         type: 'Coffee'
//     },
// }

// let userProxy = new Proxy(user, {
//     get: (obj, key) => {
//         console.log('Getting', key);
//         return obj[key];
//     },
//     set: (obj, key, value) => {
//         console.log('Setting', key);
//         obj[key] = value;
//         return true;
//     }
// });

// userProxy.drink.type = 'Tea';

// console.log(user);
// console.log(userProxy);




// ------------------




// let user = {
//     name: 'Mike',
//     age: 44,
//     drink: {
//         type: 'Coffee',
//     },
// }

// let userProxy = deepProxy(user);

// userProxy.drink.type = 'Tea';

// console.log(user);
// console.log(userProxy);

// function deepProxy(obj) {
//     let handler = {
//         get: (obj, key) => {
//             console.log('Getting', key);
//             if (obj[key] !== null && typeof obj[key] === 'object' && !obj[key][symbol]) {
//                 obj[key][symbol] = true;
//                 obj[key] = new Proxy(obj[key], handler);
//             }
//             return obj[key];
//         },
//         set: (obj, key, value) => {
//             console.log('Setting', key, value);
//             obj[key] = value;
//             return true;
//         }
//     };

//     const symbol = Symbol('isProxy');
//     return new Proxy(obj, handler);
// }




// ------------------




// let user = {
//     name: 'Mike',
//     age: 44,
//     drink: {
//         type: 'Coffee',
//     },
// }

// let userProxy = deepProxy(user, (_obj, key, _value) => {
//     if (key === 'type') throw new Error('Drink type cannot be modified');
//     sendAlert();
// });

// userProxy.drink.type = 'Tea';

// function sendAlert() {
//     fetch('https://alerts.com/api/alert', { method: 'POST', body: { alert: 'Alert!' } });
// }

// function deepProxy(obj, setCallback) {
//     let handler = {
//         get: (obj, key) => {
//             console.log('Getting', key);
//             if (obj[key] !== null && typeof obj[key] === 'object' && !obj[key][symbol]) {
//                 obj[key][symbol] = true;
//                 obj[key] = new Proxy(obj[key], handler);
//             }
//             return obj[key];
//         },
//         set: (obj, key, value) => {
//             // console.log('Setting', key, value);
//             setCallback(obj, key, value);
//             obj[key] = value;
//             return true;
//         }
//     };

//     const symbol = Symbol('isProxy');
//     return new Proxy(obj, handler);
// }
