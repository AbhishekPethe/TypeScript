enum SeatChoice {
    AISLE = 10,
    MIDDLE,
    WINDOW = 2,
    FOURTH
}
console.log(SeatChoice);

const seat = SeatChoice.AISLE
console.log(seat); // 10

console.log(SeatChoice.MIDDLE);  //11
console.log(SeatChoice.WINDOW);  //2
console.log(SeatChoice.FOURTH);  //3



enum textChoice {
    AISLE = "a",
    MIDDLE = 10,
    WINDOW,
    FOURTH
}
// when we assign the text value , we need to give the mext element some value as well , if it is text , we need to continue , if its number , no need to specify each element

console.log(textChoice);
