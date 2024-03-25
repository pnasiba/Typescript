// Primative type
let fname: string = "Anna";
fname = "Lucy";


// Union type
let age: number | string;
age = 20;
age = "20";

// Dynamic type
let year: any = 2024;
year = true;

// Literal type
let direct: "Up" | "Down";
direct = "Up";

// Object
let person: {
  name: string;
  age: number;
  isStudent: boolean;
};

person = {
  name: "Ann",
  age: 22,
  isStudent: true,
};
console.log(person);

// Array
// Number
let arr: number[] = [1, 2, 3, 4];
console.log(arr);

// Number | String
let arrItem: (number | string)[] = [1, 2, 3, 4, "a"];
console.log(arrItem);

// Tuples
let option: [number, string];
option = [10, "smth"];

// Functions with return
function sumNumber(a: number, b: number): number {
  return a - b;
}

const result: number = sumNumber(10, 5);
console.log(result);

// Functions with void
function voidFunc(): void {
  console.log("This is void function");
}

voidFunc();

// Functions with Errors
function neverFunc(): never {
  throw new Error("These all Errors");
}

neverFunc();

// --------------------------------------------------------------
// Task-1
// interface language{
//   uz: string,
//   cyr: string,
//   ru: string
// }

// interface images{
//   image: string
// }

// interface interfaceFunc{
//   name: language,
//   category : string,
//   subCategory: string,
//   mainImage: string,
//   price: number,
//   isHavecolor: boolean,
//   image: images[],
//   deliveryInfo: language,
//   propertyInfo: language,
// }


// Task-2
interface brandColor {
  name: string;
  color: string;
}

interface units {
  title: string;
  sizes: size[];
}

interface size {
  name: string;
}

interface product {
  name: string;
  images: string[];
  price: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  subCategory: string;
  brand: string;
  count: number;
  colors: brandColor[];
  units: units;
}

let allProducts: product = {
  name: "Smartfon iPhone 14 Pro 128GB Purple",
  images: [
    "https://images.uzum.uz/ci1g91rltlh4bk4laa30/original.jpg",
    "https://images.uzum.uz/ci1g91r6edfostigj1u0/original.jpg",
    "https://images.uzum.uz/ci1g92bltlh4bk4laa4g/original.jpg",
  ],
  price: "15000000",
  shortDescription:
    "Markaziy protsessor Apple Bionic A16 Ekran o'lchamlari 2556x1179 CPU chastotasi 2300 MGts Eshitish vositasi chiqishi Lighting Aloqa standarti 2G 3G 4G LTE 5G",
  longDescription:
    "Markaziy protsessor Apple Bionic A16 Ekran o'lchamlari 2556x1179 CPU chastotasi 2300 MGts Eshitish vositasi chiqishi Lighting Aloqa standarti 2G 3G 4G LTE 5G",
  category: "64c6de0d4d748db5916c3d30",
  subCategory: "64c8d732b823d24b1c38835a",
  brand: "64ca3c52afa7a02dcbcf49c6",
  count: 10,
  colors: [
    {
      name: "Qora",
      color: "#000",
    },
    {
      name: "Oq",
      color: "#fff",
    },
  ],
  units: {
    title: "Xotira",
    sizes: [
      {
        name: "128GB",
      },
      {
        name: "256GB",
      },
    ],
  },
};

