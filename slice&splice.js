//Slice & Splice
var day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// splice(firstindextm. how much element deleted, newElement1, newElemet2, ...)(will not make new array)
day.splice(7, 0, 'Another New Day');//will add 'Another New Day' into day array 
//slice(first, end)(will make new array)
//first index will encluded but excluded end index
day.splice(1,3) // console.log(day)= Tuesday, Wednesday