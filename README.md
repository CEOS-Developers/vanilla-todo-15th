# 1. Mission

### Deployment

https://vanilla-todo-15th-beta.vercel.app/

### TODO

- [x] 입력 버튼과 엔터 키로 투두 추가
- [x] 휴지통 아이콘 클릭 시 투두 삭제
- [x] 투두 텍스트 클릭 시 목록간 이동
- [x] 진행 중인 투두와 완료한 투두 목록 분리
- [x] 진행 중인 투두와 완료한 투두의 개수 카운팅

### Reference

- [HTML/CSS 기초](https://heropy.blog/2019/04/24/html-css-starter/)
- [HTML 태그](https://heropy.blog/2019/05/26/html-elements/)
- [FlexBox 가이드](https://heropy.blog/2018/11/24/css-flexible-box/)
- [JS를 통한 DOM 조작](https://velog.io/@bining/javascript-DOM-조작하기#append)
- [localStorage, sessionStorage](https://www.daleseo.com/js-web-storage/)

* [웹브라우저 작동원리와 Todo List](https://medium.com/@asiloveyou/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-todo-%EB%A7%8C%EB%93%A4%EA%B8%B0-466ec50c889)

* [querySelector vs. getElementById: A Comparison](https://careerkarma.com/blog/javascript-queryselector-vs-getelementbyid/)

* [WATCHA 개발 지식 — px | em | rem](https://medium.com/watcha/watcha-%EA%B0%9C%EB%B0%9C-%EC%A7%80%EC%8B%9D-px-em-rem-f569c6e76e66)

* [배열에 항목 제거하기](https://react.vlpt.us/basic/14-array-remove.html)

* [자바스크립트에서 불변성(Immutability)이란](https://sustainable-dev.tistory.com/156)

<br>

# 2. Key Questions

### DOM은 무엇인가요?

서버에서 HTML 문서를 전달받은 브라우저는 js가 문서에 접근 할 수 있도록 DOM이라는 인터페이스를 제공한다. HTML이 단순히 문서의 구조를 표현한다면, DOM은 HTML로 작성된 웹페이지를 객체로 만들어 표현하고, 저장하고, 조작하는 메서드를 갖고 있다.

### HTML (tag) Element를 JavaScript로 생성하는 방법은 어떤 것이 있고, 어떤 방법이 가장 적합할까요?

* **insertAdjacentHTML**: target HTML Element의 특정 위치에 원하는 node를 추가

  * 장정: 가독성이 좋다.

  * 단점: 보안 이슈가 있다. (XSS 공격에 취약)

* **createElement**: 지정 tagName의 HTML Element를 생성

  * 장점: HTML element를 생성해 append하기 때문에 node만 삽입이 가능하다.

  * 단점: 가독성이 좋지 않다. HTML element 생성할 때마다 dom tree 자료구조를 탐색해야 하기 때문에 성능저하로 이어진다.

### Semantic tag에는 어떤 것이 있으며, 이를 사용하는 이유는 무엇일까요?

시멘틱 테그에는 header, nav, aside, section, article, footer 가 있다. 시멘틱 웹이란 형식에 맞추어 html 코드를 작성함으로서, 검색엔진 등에서 작성한 웹페이지를 더욱 잘 이해할 수 있게 하는 기술로 생각할 수 있다. 이는 각 부분을 지정하는데에만 사용되며, 실제 위치와 웹상의 표현 등은 전적으로 css를 통해 작성해야 한다.

### Flexbox Layout은 무엇이며, 어떻게 사용하나요?

flexbox는 뷰포트나 요소의 크기가 불명확하거나 동적으로 변할 때에도 효율적으로 요소를 배치, 정렬, 분산할 수 있는 방법을 제공하는 CSS3의 새로운 레이아웃 방식이다. flexbox는 복수의 자식 요소인 flex item과 그 상위 부모 요소인 flex container로 구성된다. flexbox에서 사용하는 속성은 부모 요소인 flex container에 정의하는 속성과 자식 요소인 flex item에 정의하는 속성으로 나누어진다. 전체적인 정렬이나 흐름에 관련된 속성은 flex container에 정의하고, 자식 요소의 크기나 순서에 관련된 속성은 flex item에 정의한다.

### JavaScript가 다른 언어들에 비해 주목할 만한 점에는 어떤 것들이 있나요?

* **Hoisting**: 일반적인 언어는 함수, 변수 선언 이후 라인에서 해당 함수와 변수를 사용할 수 있으나, JS에서는 함수 또는 변수 선언 전에 해당 함수 또는 변수를 사용해도 에러를 내지 않는 현상을 의미한다. 의도치 않은 동작을 방지하기 위해 변수 선언의 경우 var 키워드 사용을 지양해야 한다. 또한 함수 선언의 경우 함수 표현식으로 사용하는것을 지향해야 한다.

* **비동기 처리**: 대부분의 프로그래밍 언어는 동기적 처리를 지향한다. 하지만 JS의 경우 실행이 오래걸리는 동작의 경우 이를 온전히 기다릴 필요 없이 다음 작업 실행이 가능하도록 비동기적인 처리도 가능하도록 설계되어 있다. 비동기 처리를 위한 방법으로는 callback,async/await, promise 등이 있으며, 호환성 이슈로 promise 사용을 지향해야 한다.

### 코드에서 주석을 다는 바람직한 방법은 무엇일까요?

다음 내용은 클린코드(로버트 마틴 저)의 주석 관련 내용을 발췌한 것입니다.

* 주석이 필요한 코드는 코드 그 자체로 의도를 분명히 드러내지 못했다는 말이다.

* 부적절한 정보

다른 시스템에 (예를 들어, 소스코드 관리 시스템, 버그 추적 시스템, 이슈 추적 시스템, 기타 기록 관리 시스템에) 저장할 정보는 주석으로 적절하지 못하다. 예를 들어, 변경 이력은 장황한 날짜와 따분한 내용으로 소스 코드만 번잡하게 만든다. 일반적으로 작성자, 최종 수정일, SPR 번호 등과 같은 메타 정보만 주석으로 넣는다. 주석은 코드와 설계에 기술적인 설명을 부연하는 수단이다.

* 쓸모 없는 주석

오래된 주석, 엉뚱한 주석, 잘못된 주석은 더 이상 쓸모가 없다. 주석은 빨리 낡는다. 쓸모 없어질 주석은 아예 달지 않는 편이 가장 좋다. 쓸모 없어진 주석은 재빨리 삭제하는 편이 가장 좋다. 쓸모 없는 주석은 일단 들어가고 나면 코드에서 쉽게 멀이진다. 코드와 무관하게 혼자서 따로 놀며 코드를 그릇된 방향으로 이끈다.

* 성의 없는 주석

작성할 가치가 있는 주석은 잘 작성할 가치도 있다. 주석을 달 참이라면 시간을 들여 최대한 멋지게 작성한다. 단어를 신중하게 선택한다. 문법과 구두점을 올바로 사용한다. 주절대지 않는다. 당연한 소리를 반복하지 않는다. 간결하고 명료하게 작성한다.

* 주석 처리된 코드

코드를 읽다가 주석으로 처리된 코드가 줄줄이 나오면 신경이 아주 거슬린다. 얼마나 오래된 코드인지, 중요한 코드인지 아닌지, 알 길이 없다. 그럼에도 아무도 삭제하지 않는다. 누군가에게 필요하거나 다른 사람이 사용할 코드라 생각하기 때문이다.

그래서 코드는 그 자리에 남아 매일매일 낡아간다. 더 이상 존재하지 않는 함수를 호출한다. 이름이 바뀐 변수를 사용한다. 더 이상 사용하지 않는 표기법을 따른다. 자신이 포함된 모듈을 오염시킨다. 읽는 사람을 헷갈리게 만든다. 주석으로 처리된 코드는 흉물 그 자체다.
