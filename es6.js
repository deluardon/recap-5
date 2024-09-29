const student = {
    name: "sachin",
    age: 19,
    city: "bangladesh"
}

// console.log(student.name='deluar',student.age='20+');






function add(x, y) {
    const result = x + y
    // console.log(result);
    return result
}

add(5, 0)
add(5, 0)

const number = (x, y) => x / y;
// console.log(number(5,5));


const number1 = [
    1, 2, 3]
    const number2 = [...number1]
    number2.push(4)
    // console.log(number2);


    const bangladesh={
        name:'don',
        age:20,
        city:'rajshahi',
        country:'bangladesh',
        village:'bagmara'

    }
    const key = Object.keys(bangladesh)
    console.log(key)
    const value = Object.values(bangladesh)
    console.log(value)
    const {village,city,age,name}=bangladesh
    console.log(village)
    console.log(city)
    console.log(age)
    console.log(name)