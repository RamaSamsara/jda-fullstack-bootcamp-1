//array 


//regular var declaration
var day1 = Monday
var day2 = Tuesday
var day3 = Wednesday
var day4 = Thursday
var day5 = Friday
var day6 = Saturday
var day7 = Sunday

//with regular var array concept
var day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

// Array Manipulation 

// - Adding Array
var day = []
day[0] = "Monday"
day[1] = "Tuesday"
day[2] = "Wednesday"
day[3] = "Thursday"
day[4] = "Friday"
day[5] = "Saturday"
day[6] = "Sunday"

// how to delete array on index 1 
var day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
arr[1] = undefined;
//when running the code by type console.log(day[1]) will result = undefined

//showing array 
var day = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
for(var i = 0; i < day.length; i++ ) {
    console.log(day);
}

