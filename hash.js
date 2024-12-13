//Імпортував бібліотеку

const crypto = require("crypto");

//Функція приймає повідомлення і зашифрофує його

function hashMessageSHA256(message) {
  // Створили обєкт хешу для sha256

  const hash = crypto.createHash("sha256");

  // Хешуємо

  hash.update(message);

  // hex - це вивід у шістнадцятковому форматі

  return hash.digest("hex");
}

// Використання

//Повідомлення для шифрування

const messageToHash = "Please hash me :)";

/* Зашифрували повідомлення шляхом виклику функції hashMessageSHA256 і зберегли його //в hashedMessage */

const hashedMessage = hashMessageSHA256(messageToHash);

console.log(`Hashed message: ${hashedMessage}`);

