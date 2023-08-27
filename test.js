async function f() {
  return 1;
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done."), 1000);
  });
  let result = await promise;
  alert(result);
}

f();
