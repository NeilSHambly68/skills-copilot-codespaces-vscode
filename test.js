const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (number1) => {
  rl.question('Enter the operator ( +, -, *, / ): ', (operator) => {
    rl.question('Enter the second number: ', (number2) => {
      let result;

      switch(operator) {
        case '+':
          result = parseFloat(number1) + parseFloat(number2);
          break;
        case '-':
          result = parseFloat(number1) - parseFloat(number2);
          break;
        case '*':
          result = parseFloat(number1) * parseFloat(number2);
          break;
        case '/':
          if(number2 != 0) {
            result = parseFloat(number1) / parseFloat(number2);
          } else {
            console.log('Error! Division by zero is not allowed.');
            rl.close();
            return;
          }
          break;
        default:
          console.log('Invalid operator! Please enter one of +, -, *, /.');
          rl.close();
          return;
      }

      console.log(`The result of ${number1} ${operator} ${number2} is ${result}`);
      rl.close();
    });
  });
});