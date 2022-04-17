const list = [
  {
    instrument: 'EUR/USD',
    price: '1.17567',
    sentiment: 'bearish',
  },
  {
    instrument: 'Gold',
    price: '1794.67',
    sentiment: 'bullish',
  },
  {
    instrument: 'GBP/USD',
    price: '1.35467',
    sentiment: 'bearish',
  },
  {
    instrument: 'USD/JPY',
    price: '109.745',
    sentiment: 'mixed',
  },
  {
    instrument: 'Wall Street',
    price: '35377.4',
    sentiment: 'mixed',
  },
];

document.getElementById('btn-nav').onclick = function () {
  document.getElementById('nav').classList.toggle('show');
};

document.getElementById('btn-1').onclick = function () {
  document.getElementById('dropdown-1').classList.toggle('active');
};

document.getElementById('btn-2').onclick = function () {
  document.getElementById('dropdown-2').classList.toggle('active');
};

const renderTradingPairs = () => {
  const root = document.querySelector('.courses');
  root.innerHTML = '';
  list.forEach((elem) => {
    const { instrument, price, sentiment } = elem;
    root.insertAdjacentHTML(
      'beforeend',
      pairHtml(instrument, price, sentiment)
    );
  });
  root.insertAdjacentHTML(
    'beforeend',
    '<a href="#" class="courses__link">VIEW MORE ></a>'
  );
};
const pairHtml = (instrument, price, sentiment) => {
  return ` <div class="course-item">
  <div class="d-flex justify-beetwen">
      <div class="course-item__title">${instrument}</div>
      <div class="course-item__price">${price}</div>
  </div>
  <div class="d-flex justify-beetwen">
      <div class="course-item__status">${sentiment.toUpperCase()}</div>
      <div class="course-item__chart"><img src="img/chart-1.svg" alt="" class="img-fluid"></div>
  </div>
  </div>    `;
};
renderTradingPairs();
