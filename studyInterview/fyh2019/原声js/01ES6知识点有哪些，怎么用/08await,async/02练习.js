async function a() {
    await console.log(1)
    console.log(2)
}

async function b() {
    await　a();
}

b();

console.log(3)

//  1  3  2
