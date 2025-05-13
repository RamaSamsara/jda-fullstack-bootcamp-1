for (let i = 0; i < 5; i++) {
    console.log('*');
}


let s1 = '';
for (let i = 0; i < 5; i++) {
    s1 += '*';
}
console.log(s1);


let s2 = '';
for (let i = 0; i < 5; i++) {
    s2 += '*\n';
}
console.log(s2);


let s3 = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        s3 += '*';
    }
    s3 += '\n';
}
console.log(s3);


let s4 = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        s4 += '*';
    }
    s4 += '\n';
}
console.log(s4);

let s5 = '';
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        s5 += '*';
    }
    s5 += '\n';
}
console.log(s5);

let s = '';
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            s += '#';
        } else {
            s += ' ';
        }
    }
    s += '\n';
}
console.log(s);

