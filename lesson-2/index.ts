let baseUrl = "https://jsonplaceholder.typicode.com"


// async function responseData(items:string) {    
//   let response = await fetch(items + "/users");
//   let result = await response.json();
//   console.log(result);

// }
// responseData(baseUrl);



interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: geo;
}

interface geo {
  lat: string;
  lng: string;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  company: Company;
}


// let allUsers: Users 