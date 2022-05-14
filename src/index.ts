function data(n: number) : string | number {
    if (n % 15 === 0){
        return 'FizzBuzz'
    }else if(n % 5 === 0){
        return 'Buzz'
    }else if(n % 3 === 0){
        return 'Fizz'
    }
    return n
}

for(let i : number = 1; i <= 15; i++){
    console.log(data(i))
}