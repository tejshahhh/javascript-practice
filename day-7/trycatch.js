// Here try will not and catch will give output as "a" is not mention
try {
    console.log(a);
} catch {
    console.log("If try not works this will work");
}
// Here try will give output as "b" is mention
let b = 12;
try {
    console.log(b);
} catch {
    console.log("If try not works this will work");
}