// fct add 2 numbers
const add = (firstNum,secondNum) => {
    const result = firstNum + secondNum ;
    return result;
}

let firstresult = add(5,6);
console.log(firstresult);

// fct count avg of ratings a movie
const calculAverageRating = (ratings) => {
    if(ratings.length === 0){
        return 0;
    }
    let sum = 0;
    for( let rating of ratings){
        sum += rating;
    }
    return sum/rating.length;
}
export{ calculAverageRating };