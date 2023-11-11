## 암호화폐 시세 트래커

이 프로젝트에서는 React Query 를 이용하여 Crypto Price API 의 데이터를 가져오는 것을 배웠고, 또한 Styled Components 를 이용해 확장 가능한 디자인 시스템 그리고 다크모드 등을 만드는 방법을 배웁니다. 
마지막으로 Apex Charts 를 활용하여 암호화폐 시세 변화 데이터를 시각화 하는 방법을 구현했습니다.

https://crypto-tracker-l0vreom30-parkseokjins-projects.vercel.app/

<br/>

📅 기간 : 2023. 10. 10 ~ 2023. 10. 13

<br/>


## 구현 기능 

✔  Data Fetching
✔  Data Visualization
✔  Routing
✔  Dark Mode


<br/>

📌 Point


* npm install --save react-apexcharts apexcharts(차트 부분 ) 사용
* React Query를 사용하는 이유

react query는 데이터를 캐시에 저장해둔다.
리엑트 쿼리는 데이터를 파괴하지 않는다.
리엑트 쿼리는 데이터를 유지한다.

react query는 reponse를 caching 하고 있다. api로 부터 response를 받고 있어서
우리가 화면을 바꿧다가 돌아오더라도 react query는 우리가 원하는 data가 이미
캐시(cache)에 있다는 것을 알고있다. 그래서 리엑트 쿼리는 api에 접근하지 않음
이게 리엑트쿼리를 사용하느냐 안하느냐의 아주 큰 차이다.

* 왜 state management가 왜 필요한지 recoil
 https://blog.naver.com/skatksdml1/223242059648
  

<br/>






