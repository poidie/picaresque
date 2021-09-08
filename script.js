$(function() {

  var quotes = [{
    quote: '나는 불행해질 권리를 요구하겠어요.',
    author: '야만인 존',
    link: 'https://ko.wikipedia.org/wiki/%EB%A9%8B%EC%A7%84_%EC%8B%A0%EC%84%B8%EA%B3%84'
  }, {
    quote: '우리의 경솔함에 건배.',
    author: '테디 플러드',
    link: 'https://www.hbo.com/westworld/cast-and-crew/teddy'
  }, {
    quote: '제가 누구인지 알게 되면 자유가 될 거예요.',
    author: '돌로레스 애버내시',
    link: 'https://www.hbo.com/westworld/cast-and-crew/dolores'
  },{
    quote: '여호와 하나님이 동방의 에덴에 동산을 창설하시고 그 지으신 사람을 거기 두시니라.',
    author: '창세기 제2 장 8 절',
    link: 'https://ko.wikipedia.org/wiki/%EC%B0%BD%EC%84%B8%EA%B8%B0'
  }, {
    quote: '9 월 15 일 22 시 인트로 밴드 링크 오픈',
    link: '#'
  }, {
    quote: '9 월 15 일 23 시 가입 신청 일괄 수락',
    link: '#'
  }, {
    quote: '근미래 배경 디스토피아, 사이버펑크',
    link: '#'
  }, {
    quote: '12 인 소수 괄호체 추리, 생존, 탈출?',
    link: '#'
  }, {
    quote: '이입글 업로드 후 롤 카드 배부, 다이스 판정, 시나리오 위주',
    link: '#'
  }, {
    quote: '캐릭터 상해 또는 사망, 모럴리스 및 트리거 유발 소재 주의',
    link: '#'
  }, {
    quote: '17 일 밤부터 19 일 새벽까지 짧은 러닝이 예정돼 있습니다',
    link: '#'
  }, {
    quote: '개인의 선택이 스토리 흐름을 좌우하므로 해당 기간 동안 활발한 참여가 어려우신 분은 가입을 지양해 주세요',
    link: '#'
  }, {
    quote: '본 밴드는 매우 비윤리적인 서사를 다루고 있으나 운영진은 이를 지지하거나 옹호하지 않음을 밝힙니다',
    link: '#'
  }, {
    quote: '밴드 가입 시 임관 이름과 컬러 보정으로 프로필 설정 바랍니다'+'<br/>'+'<br/>'+'가입 질문 양식  [임관/내부 연락 상대 유무/有일 경우 상대방 임관]',
    link: '#'
  }];

  // vars
  var i = 0;
  var x = 0;
  var result = [];
  var $element = $('#quote');
  var htmlOutput;
  // IIFE - get array of random numbers
  (function() {

    var minNum = 0;
    var maxNum = quotes.length;
    var randomNum = 0;

    while (result.length < maxNum) {
      randomNum = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
      // if random number doesnt exists in array push it to array
      if (result.indexOf(randomNum) > -1) continue;
      result.push(randomNum);
    }
  })();


  function output() {
    // x iterates quotes obj
    if (x < quotes.length) {
      var num = result[x];

      if (quotes[num].link == '#') {
        htmlOutput = '<p>' + quotes[num].quote + '</p>' + '<footer><a href="#" class="brackets author">' + quotes[num].author + '</a><span class="cursor blink">&#9646;</span></footer>';
      } else {
        htmlOutput = '<p>' + quotes[num].quote + '</p>' + '<footer><a href="' + quotes[num].link + '" target="_blank" class="brackets author">' + quotes[num].author + '</a><span class="cursor blink">&#9646;</span></footer>';
      }
      $('#' + num).addClass('opened');
      
    } else {
      htmlOutput = '<div class="warning"><span>WARNING</span><p> No more new notices <span class="cursor blink">&#9646;</span></p></div>';
    }
    //$element.html(htmlOutput);
    x++;
    return render();
  };

  output();


  var isTag, char, text;

  function render() {
    //console.log('i',i);

    text = htmlOutput.slice(0, i++);

    if (text === htmlOutput) return i = 0;

    $element.html(text + '&#9646;');

    char = text.slice(-1);

    if (char === '<') isTag = true;
    if (char === '>') isTag = false;

    if (isTag) return render();

    return setTimeout(render, 20);
  };

  $('#newQuoteBtn').on('click', function() {

    output();

  });


});