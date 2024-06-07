//Question 1

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//Question 2

// const getGrade = (score) => {
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' : 'F';
//   };
  
//   console.log(getGrade(85)); // Output: B

  //Question 3

//   const car = {
//     companyName: "Toyota",
//     model: "Camry",
//     year: 2020
//   };
  
//   const changeYear = (car, newYear) => {
//     car.year = newYear;
//   };
  
//   changeYear(car, 2022);
  
//   const { model, year } = car;
//   console.log(`Model: ${model}, Year: ${year}`); // Output: Model: Camry, Year: 2022

  //Question 4

//   const isPrime = (num) => {
//     if (num <= 1) return false;
//     if (num === 2) return true; // 2 is a prime number
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };
  
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const primeNumbers = numbers.filter(isPrime);
//   console.log(primeNumbers); // Output: [2, 3, 5, 7]
  

  //Question 5

//   map: Transforms each element of an array individually, returning a new array of the same length.
// Example: Converting an array of temperatures in Celsius to Fahrenheit.

// filter: Creates a new array with elements that pass the condition implemented by the provided function.
// Example: Filtering out all even numbers from an array.

// reduce: Reduces the array to a single value by applying a function to each element and accumulating the result.
// Example: Summing up all the numbers in an array.

//Question 6

// const fetchData = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
//   fetchData();

//Question 7

const person = {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    },
    contact: {
      email: 'john.doe@example.com',
      phone: '555-555-3333'
    }
  };
  
  // Using optional chaining to safely access the phone number
  const phoneNumber = person.contact?.phone;
  console.log(phoneNumber); // Output: 555-555-3333
  
  // Accessing a non-existent property using optional chaining
  const alternatePhoneNumber = person.contact?.alternatePhone;
  console.log(alternatePhoneNumber); // Output: undefined
  


  


