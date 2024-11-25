interface User {
    name: string,
    age: number,
    email: string,
    address?: {
        city:string,
        country: string,
}}

let userDetails: User;

userDetails = {
        name: 'Mango',
        age: 30,
        email: 'john@example.com',
        address: {
            city: 'New York',
            country: 'USA'
        }
    };
    
  userDetails = {
        name: 'Mango',
        age: 30,
        email: 'john@example.com'
    };
    