async function a() {
    await console.log(1)
    console.log(2)
}

async function b() {
    await　a();
}

b();

setTimeont(function(){console.log(3)},0)


// 1 2 3