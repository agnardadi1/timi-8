function checkCharacter() {
  // 1. Ná í name, age og score
  console.log("Check character");
  let name = document.getElementById("name").value;
  let age = Number(document.getElementById("age").value);
  let score = Number(document.getElementById("score").value);

  // 2. Breyta age og score í Number

  // 3. Ef eitthvað vantar → sýna villu
  if (isNaN(age) || age === 0) {
    document.getElementById("output").innerText = "Sláðu inn aldurinn þinn!";
    return;
  }

  if (isNaN(score) || age === 0) {
    document.getElementById("output").innerText = "Sláðu inn score sauður!";
    return;
  }

  if (name === "") {
    document.getElementById("output").innerText = "Sláðu inn nafnið þinn!";
    return;
  }
  // 4. Nota if / else:
  // ef age < 18 skila þá "Of ung/ur til að spila"
  // ef score > 80 og age >= 18 "Pro"
  // ef score > 50 en < 80 "Normal"
  // annars skila "Beginner"
  let message = "";
  if (age < 18) {
    message = "Of ung/ur, hvar eru foreldrar þínir!";
  } else if (score > 80 && age >= 18) {
    message = "Fagmenni";
  } else if (score > 50 && age <= 80) {
    message = "Meðalmenni";
  } else {
    message = "Byrjenda búbbi! (nooob)";
  }

  // 5. Sýna niðurstöðu í output
  document.getElementById("output").innerText = message;
}
