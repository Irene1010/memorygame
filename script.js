document.addEventListener('DOMContentLoaded', () => {
  const cardArray=[
    {
      name: 'army',
      img: 'images/army.png'
    },
    {
      name: 'army',
      img: 'images/army.png'
    },
    {
      name: 'bts',
      img: 'images/bts.jpg'
    },
    {
      name: 'bts',
      img: 'images/bts.jpg'
    },
    {
      name: 'dynamite',
      img: 'images/dynamite.jpg'
    },
    {
      name: 'dynamite',
      img: 'images/dynamite.jpg'
    },
    {
      name: 'jhope',
      img: 'images/jhope.jpg'
    },
    {
      name: 'jhope',
      img: 'images/jhope.jpg'
    },
    {
      name: 'jimin',
      img: 'images/jimin.jpg'
    },
    {
      name: 'jimin',
      img: 'images/jimin.jpg'
    },
    {
      name: 'jin',
      img: 'images/jin.jpg'
    },
    {
      name: 'jin',
      img: 'images/jin.jpg'
    },
    {
      name: 'jungkook',
      img: 'images/jungkook.jpg'
    },
    {
      name: 'jungkook',
      img: 'images/jungkook.jpg'
    },
    {
      name: 'rm',
      img: 'images/rm.jpg'
    },
    {
      name: 'rm',
      img: 'images/rm.jpg'
    },
    {
      name: 'suga',
      img: 'images/suga.jpg'
    },
    {
      name: 'suga',
      img: 'images/suga.jpg'
    },
    {
      name: 'v',
      img: 'images/v.jpg'
    },
    {
      name: 'v',
      img: 'images/v.jpg'
    }
  ];
  cardArray.sort(function(a, b){return 0.5 - Math.random()});
  const grid = document.querySelector('.grid');
  const result = document.querySelector('#result');
  var chosenCard=[];
  var chosenCardId=[];
  var foundCards=[];

  function createGrid(){
    for(let i=0; i<cardArray.length; i++){
      var card = document.createElement('img');
      card.setAttribute('src','images/blank.jpg');
      card.setAttribute('data-id',i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function checkMatched(){
    const firstOne = chosenCardId[0];
    const secondOne = chosenCardId[1];
    var cards = document.querySelectorAll('img');
    if(firstOne===secondOne){
      cards[firstOne].setAttribute('src', 'images/blank.jpg');
      cards[secondOne].setAttribute('src', 'images/blank.jpg');
      alert('똑같은 카드를 선택했습니다.');
    }
    else if(chosenCard[0]===chosenCard[1]){
      alert('한 쌍을 찾았습니다.');
      cards[firstOne].setAttribute('src','images/white.jpg');
      cards[secondOne].setAttribute('src','images/white.jpg');
      cards[firstOne].removeEventListener('click', flipCard);
      cards[secondOne].removeEventListener('click', flipCard);
      foundCards.push(chosenCard[0]);
    }else{
      cards[firstOne].setAttribute('src', 'images/blank.jpg');
      cards[secondOne].setAttribute('src', 'images/blank.jpg');
      alert('틀렸습니다.');
    }
    chosenCard=[];
    chosenCardId=[];
    result.textContent = foundCards.length;
    if(foundCards.length==cardArray.length/2){
      alert('모두 다 찾았습니다!');
    }

  }

  function flipCard(){
    var cardId = this.getAttribute('data-id');
    chosenCard.push(cardArray[cardId].name);
    chosenCardId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(chosenCard.length===2){
      setTimeout(checkMatched, 500);
    }
  }

  createGrid();
});
