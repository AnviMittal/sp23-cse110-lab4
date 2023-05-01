for(let i in statistics){
    if (i.charAt(0) === 'r' || statistics[i] % 2 !== 0){
        console.log(statistics[i]);
    }
}
