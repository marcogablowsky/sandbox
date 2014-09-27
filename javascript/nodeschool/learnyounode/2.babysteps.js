var sum = 0,
    counter = 2;

for(counter; counter < process.argv.length; counter++){
    sum += Number(process.argv[counter]);
}
console.log(sum);