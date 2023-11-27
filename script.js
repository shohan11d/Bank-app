// 'use strict';

// // BANKIST APP

// // Account Data

// const account1 = {
//   owner: 'Mohammad Ariful',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Mohammad Tanver',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Rakibur Rahman',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Dola Wahid',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements with bad naming
// const inputUserEl = document.querySelector('.input__user');
// const inputpinEl = document.querySelector('.input__pin');
// const navBtnEl = document.querySelector('.nav__btn');
// const mainEl = document.querySelector('main');
// const navTextEl = document.querySelector('.nav__text');
// const viewEl = document.querySelector('.view');
// const inEl = document.querySelector('.in');
// const outEl = document.querySelector('.out');
// const interestEl = document.querySelector('.interest');
// const transferEl = document.querySelector('.tt');
// const reqLoanEl = document.querySelector('.reqloan');
// const transferBtnEl = document.querySelector('.transfer__submit');
// const loanEl = document.querySelector('.loanto');
// const loanBtnEl = document.querySelector('.loantoBtn');

// const closeuserEl = document.querySelector('.closeuser');
// const closePinEl = document.querySelector('.closepin');
// const closeBtnEl = document.querySelector('.closebtn');
// const sortEl = document.querySelector('.sort');

// // global variables
// let currenctAccount = '';
// let sort = false;

// // Function generating username
// const getUsername = function (accs) {
//   accs.forEach(acc => {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       //Problem 1
//       .map(names => names[0])
//       .join('');
//   });
// };
// getUsername(accounts);

// // Function loan

// loanBtnEl.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Number(loanEl.value);
//   currenctAccount.movements.push(amount);
//   updateUI(currenctAccount);
// });

// // Function close

// closeBtnEl.addEventListener('click', function (e) {
//   e.preventDefault();
//   const pin = Number(closePinEl.value);
//   if (
//     currenctAccount.username === closeuserEl.value &&
//     currenctAccount.pin === pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currenctAccount.username
//     );
//     console.log(index);

//     accounts.splice(index, 1);

//     // Hide UI
//     mainEl.style.opacity = 0;
//   }
// });

// // Function Display movments
// const displayMovments = function (acc, sort) {
//   mainEl.style.opacity = 1;
//   viewEl.textContent = '';

//   let mov = acc.movements;

//   mov = sort
//     ? acc.movements.slice().sort(function (a, b) {
//         return a - b;
//       })
//     : mov;

//   mov.forEach((mov, i) => {
//     const type = mov > 0 ? `deposit` : 'withdrawal';

//     const html = `
//     <div class="movements__row flex justify-between items-center p-5 border-b">
//                 <span class="text-sm ${type} text-white px-2 py-.5 rounded-full ">${type}</span> <span
//                     class="amount">${Math.abs(mov)}$</span>
//             </div>
//     `;
//     viewEl.insertAdjacentHTML('afterbegin', html);
//   });
// };

// // Function calcSummary
// const calcSummary = function (acc) {
//   const mov = acc.movements;

//   const incomes = acc.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   inEl.textContent = `${incomes}€`;

//   const negativeValue = acc.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => mov + acc, 0);
//   outEl.textContent = `${Math.abs(negativeValue)}$`;

//   const totalInterest = acc.movements
//     .filter(mov => mov > 0)
//     // Problem 2
//     .map(interest => (interest * acc.interestRate) / 100)
//     .filter(interest => interest >= 1)
//     .reduce((value, acc) => acc + value, 0);
//   interestEl.textContent = `${totalInterest}$(at 1.5% rate)`;
// };
// navBtnEl.addEventListener('click', function (e) {
//   e.preventDefault();
//   currenctAccount = accounts.find(acc => acc.username === inputUserEl.value);

//   if (currenctAccount.pin === Number(inputpinEl.value)) {
//     updateUI(currenctAccount);

//     navTextEl.textContent = `Welcome Back, ${
//       currenctAccount.owner.split(' ')[1]
//     }`;
//   }
// });

// // Function Update ui
// const updateUI = function (acc) {
//   displayMovments(acc);
//   calcSummary(acc);
// };
// // Function transfer

// transferBtnEl.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Number(reqLoanEl.value);
//   const receiverAccount = accounts.find(
//     acc => acc.username === transferEl.value
//   );
//   if (true) {
//     currenctAccount.movements.push(-amount);
//     receiverAccount.movements.push(amount);
//     console.log(currenctAccount);

//     updateUI(currenctAccount);
//   }
// });

// sortEl.addEventListener('click', function () {
//   sort = !sort;
//   console.log(sort);
//   displayMovments(currenctAccount, sort);
// });

'use strict';

// BANKIST APP

// Account Data

const account1 = {
  owner: 'Mohammad Ariful',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Mohammad Tanver',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Rakibur Rahman',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Dola Wahid',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements with bad naming
const inputUserEl = document.querySelector('.input__user');
const inputpinEl = document.querySelector('.input__pin');
const navBtnEl = document.querySelector('.nav__btn');
const mainEl = document.querySelector('main');
const navTextEl = document.querySelector('.nav__text');
const viewEl = document.querySelector('.view');
const inEl = document.querySelector('.in');
const outEl = document.querySelector('.out');
const interestEl = document.querySelector('.interest');
const transferEl = document.querySelector('.tt');
const reqLoanEl = document.querySelector('.reqloan');
const transferBtnEl = document.querySelector('.transfer__submit');
const loanEl = document.querySelector('.loanto');
const loanBtnEl = document.querySelector('.loantoBtn');

const closeuserEl = document.querySelector('.closeuser');
const closePinEl = document.querySelector('.closepin');
const closeBtnEl = document.querySelector('.closebtn');
const sortEl = document.querySelector('.sort');

// global variables
let currentAccount = '';
let sort = false;

// Function generating username
const getUsername = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      //Problem 1
      .map(names => names[0])
      .join('');
  });
};
getUsername(accounts);

// Function Display movments
const displayMovments = function (acc, sort = false) {
  mainEl.style.opacity = 1;
  viewEl.textContent = '';

  let mov = acc.movements;

  mov = sort
    ? acc.movements.slice().sort(function (a, b) {
        return a - b;
      })
    : mov;

  mov.forEach((mov, i) => {
    const type = mov > 0 ? `deposit` : 'withdrawal';

    const html = `
    <div class="movements__row flex justify-between items-center p-5 border-b">
                <span class="text-sm ${type} text-white px-2 py-.5 rounded-full ">${type}</span> <span
                    class="amount">${Math.abs(mov)}$</span>
            </div>
    `;
    viewEl.insertAdjacentHTML('afterbegin', html);
  });
};

// Function calcSummary
const calcSummary = function (acc) {
  const mov = acc.movements;

  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  inEl.textContent = `${incomes}€`;

  const negativeValue = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => mov + acc, 0);
  outEl.textContent = `${Math.abs(negativeValue)}$`;

  const totalInterest = acc.movements
    .filter(mov => mov > 0)
    // Problem 2
    .map(interest => (interest * acc.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((value, acc) => acc + value, 0);
  interestEl.textContent = `${totalInterest}$(at ${acc.interestRate} rate)`;

  acc.balance = incomes + totalInterest - Math.abs(negativeValue);
  console.log(
    `balance ${acc.balance} incomes ${incomes} totalInterset ${totalInterest} outcome ${negativeValue}`
  );
};

// Login Button Event Handler
navBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputUserEl.value);

  if (currentAccount.pin === Number(inputpinEl.value)) {
    inputUserEl.value = inputpinEl.value = '';

    updateUI(currentAccount);

    navTextEl.textContent = `Welcome Back, ${
      currentAccount.owner.split(' ')[1]
    }`;
  }
});

// Transfer Event Handler
transferBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(reqLoanEl.value);
  const receiverAccount = accounts.find(
    acc => acc.username === transferEl.value
  );
  if (currentAccount.balance > amount && receiverAccount) {
    reqLoanEl.value = transferEl.value = '';
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    updateUI(currentAccount);
  }
});

sortEl.addEventListener('click', function () {
  sort = !sort;
  console.log(sort);
  displayMovments(currentAccount, sort);
});

// Loan Button Event Handler
loanBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(loanEl.value);
  currentAccount.movements.push(amount);
  updateUI(currentAccount);
  loanEl.value = '';
});

// Close Button Event Handler
closeBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  const pin = Number(closePinEl.value);
  if (
    currentAccount.username === closeuserEl.value &&
    currentAccount.pin === pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);

    // Hide UI
    mainEl.style.opacity = 0;
  } else {
  }
});

// Function UpdateUI
const updateUI = function (acc) {
  displayMovments(acc);
  calcSummary(acc);
};
