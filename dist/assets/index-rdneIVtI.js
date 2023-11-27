(function () {
  const n = document.createElement('link').relList;
  if (n && n.supports && n.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver(e => {
    for (const o of e)
      if (o.type === 'childList')
        for (const u of o.addedNodes)
          u.tagName === 'LINK' && u.rel === 'modulepreload' && s(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(e) {
    const o = {};
    return (
      e.integrity && (o.integrity = e.integrity),
      e.referrerPolicy && (o.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : e.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const o = r(e);
    fetch(e.href, o);
  }
})();
const h = {
    owner: 'Mohammad Ariful',
    movements: [200, 450, -400, 3e3, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
  },
  q = {
    owner: 'Mohammad Tanver',
    movements: [5e3, 3400, -150, -790, -3210, -1e3, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  },
  S = {
    owner: 'Rakibur Rahman',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  },
  w = {
    owner: 'Dola Wahid',
    movements: [430, 1e3, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  },
  l = [h, q, S, w],
  m = document.querySelector('.input__user'),
  d = document.querySelector('.input__pin'),
  $ = document.querySelector('.nav__btn'),
  E = document.querySelector('main'),
  g = document.querySelector('.nav__text'),
  f = document.querySelector('.view'),
  x = document.querySelector('.in'),
  L = document.querySelector('.out'),
  _ = document.querySelector('.interest'),
  p = document.querySelector('.tt'),
  v = document.querySelector('.reqloan'),
  M = document.querySelector('.transfer__submit'),
  y = document.querySelector('.loanto'),
  R = document.querySelector('.loantoBtn'),
  N = document.querySelector('.closeuser'),
  B = document.querySelector('.closepin'),
  C = document.querySelector('.closebtn'),
  O = document.querySelector('.sort');
let c = '',
  i = !1;
const A = function (t) {
  t.forEach(n => {
    n.username = n.owner
      .toLowerCase()
      .split(' ')
      .map(r => r[0])
      .join('');
  });
};
A(l);
const b = function (t, n = !1) {
    (E.style.opacity = 1), (f.textContent = '');
    let r = t.movements;
    (r = n
      ? t.movements.slice().sort(function (s, e) {
          return s - e;
        })
      : r),
      r.forEach((s, e) => {
        const o = s > 0 ? 'deposit' : 'withdrawal',
          u = `
    <div class="movements__row flex justify-between items-center p-5 border-b">
                <span class="text-sm ${o} text-white px-2 py-.5 rounded-full ">${o}</span> <span
                    class="amount">${Math.abs(s)}$</span>
            </div>
    `;
        f.insertAdjacentHTML('afterbegin', u);
      });
  },
  D = function (t) {
    t.movements;
    const n = t.movements.filter(e => e > 0).reduce((e, o) => e + o, 0);
    x.textContent = `${n}€`;
    const r = t.movements.filter(e => e < 0).reduce((e, o) => o + e, 0);
    L.textContent = `${Math.abs(r)}$`;
    const s = t.movements
      .filter(e => e > 0)
      .map(e => (e * t.interestRate) / 100)
      .filter(e => e >= 1)
      .reduce((e, o) => o + e, 0);
    (_.textContent = `${s}$(at ${t.interestRate} rate)`),
      (t.balance = n + s - Math.abs(r)),
      console.log(
        `balance ${t.balance} incomes ${n} totalInterset ${s} outcome ${r}`
      );
  };
$.addEventListener('click', function (t) {
  t.preventDefault(),
    (c = l.find(n => n.username === m.value)),
    c.pin === Number(d.value) &&
      ((m.value = d.value = ''),
      a(c),
      (g.textContent = `Welcome Back, ${c.owner.split(' ')[1]}`));
});
M.addEventListener('click', function (t) {
  t.preventDefault();
  const n = Number(v.value),
    r = l.find(s => s.username === p.value);
  c.balance > n &&
    r &&
    ((v.value = p.value = ''), c.movements.push(-n), r.movements.push(n), a(c));
});
O.addEventListener('click', function () {
  (i = !i), console.log(i), b(c, i);
});
R.addEventListener('click', function (t) {
  t.preventDefault();
  const n = Number(y.value);
  c.movements.push(n), a(c), (y.value = '');
});
C.addEventListener('click', function (t) {
  t.preventDefault();
  const n = Number(B.value);
  if (c.username === N.value && c.pin === n) {
    const r = l.findIndex(s => s.username === c.username);
    console.log(r), l.splice(r, 1), (E.style.opacity = 0);
  }
});
const a = function (t) {
  b(t), D(t);
};
