//reverse counting from 10-1

//using for loop
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//using recurrsion
function tampilAngka(n) {
    if (n <= 0) return;
    console.log(n);
    tampilAngka(n - 1);
}

tampilAngka(10);