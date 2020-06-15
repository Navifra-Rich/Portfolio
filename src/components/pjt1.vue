<template>
  <div>
<h1 id="spring-project">Spring Project</h1>
<h1>내용 보충중...</h1>
<h2 id="1-project-objective">1. Project Objective</h2>
<p>Spring Framework를 사용한 간단한 CRUD 기능이 있는 게시판이다.<br>
Oauth를 사용해서 구글 계정과 연동할 수 있고, GCP의 캘린더 API를 통해
게시글의 일정이 자동으로 자신 구글 계정과 연동되도록 제작했다.<br>
처음으로 진행한 웹 프로젝트이기 때문에 광범위하게 접근하지 않고,
정해진 범위 이내에서 깊이를 챙기는 것을 우선으로 진행했다.<br>
Spring + JSP + Oracle 스택을 사용했다.
<br>

</p>

<h2 id="2-">2. 개발 환경</h2>
<h3 id="-nbsp-nbsp-2-1-languague">&nbsp;&nbsp;2.1 Languague</h3>
<p><a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/java.png" widgth="100" height="100"></a>
<a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/jsp.png" widgth="100" height="100"></a>
<a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/javaScript.png" widgth="100" height="100"></a>
<a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/html.png" widgth="100" height="100"></a>
<a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/css.png" widgth="100" height="100"></a><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
<h3 id="-nbsp-nbsp-2-2-framework-library">&nbsp;&nbsp;2.2 Framework &amp; Library</h3>
<p><a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/spring.png" widgth="100" height="100"></a>
<a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/jquery.png" widgth="100" height="100"></a>
<a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/bootStrap.jfif" widgth="100" height="100"></a>
<a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/summerNote.png" widgth="100" height="100"></a>  </p>
<h3 id="-nbsp-nbsp-2-3-database">&nbsp;&nbsp;2.3 DataBase</h3>
<p><a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/oracle.png" widgth="100" height="100"></a>  </p>
<h3 id="-nbsp-nbsp-2-4-etc">&nbsp;&nbsp;2.4 ETC</h3>
<p><a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/jira.png" widgth="100" height="100"></a>
<a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/git.png" widgth="100" height="100"></a>
<a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/gcp.png" widgth="100" height="100"></a>  </p>
<h2 id="3-key-summary">3. Key Summary</h2>
<h3 id="-nbsp-nbsp-3-1-">&nbsp;&nbsp;3.1 웹 소켓을 이용한 실시간 알람 구현</h3>
<p>[사진]</p>
<p>웹 소켓을 이용해서 실시간 알람을 구현했다.
특정 client에게 전송해야 할 데이터가 있으면 client의 request 없이 server가 먼저 client에게 데이터를 전송한다.<br>본 프로젝트에서는 댓글 알람에만 웹 소켓 기능을 이용했지만 프로젝트의 특성에 따라서 실시간 채팅 기능을 구현하는 것도 가능하다.  </p>
<h3 id="-nbsp-nbsp-3-2-">&nbsp;&nbsp;3.2 구글 계정 연동</h3>
<h4 id="-nbsp-nbsp-nbsp-nbsp-3-2-1-oauth">&nbsp;&nbsp;&nbsp;&nbsp;3.2.1. Oauth</h4>
<p>[사진]</p>
<p>Oauth 인증을 사용해서 구글 계정에 접속할 수 있다.<br>Access token을 발급받고, 만료된 경우 Refresh token으로 재발급 받는 과정이 자동으로 진행되게 구현했다.</p>
<h4 id="-nbsp-nbsp-nbsp-nbsp-3-2-2-google-cloud-service-calendar-">&nbsp;&nbsp;&nbsp;&nbsp;3.2.2. Google cloud service(calendar)</h4>
<p>[사진]</p>
<p>GCP의 여러 기능 중에서 caledar 기능을 이용했다.<br>게시글에서 공지된 시간 정보를 얻어 해당 캘린더에 일정을 추가해준다.  </p>
<h3 id="-nbsp-nbsp-3-3-sha-">&nbsp;&nbsp;3.3 SHA방식 패스워드 해싱</h3>
<p>[사진]</p>
<p>SHA-256을 사용해서 패스워드를 해싱한 후 서버에 전송해서, 중간에 패킷이 탈취되어도 원래 패스워드는 알지 못한다.<br>다음 프로젝트에서는 비대칭키 방식을 사용해서 보안을 조금 더 강화하고 싶다.  </p>
<h3 id="-nbsp-nbsp-3-4-">&nbsp;&nbsp;3.4 파일 입출력 및 이미지 미리보기</h3>
<p>[사진]</p>
<p>게시글에 파일을 첨부할 수 있고, 이미지를 첨부할 경우 미리보기 기능을 제공한다.  </p>
<h3 id="-nbsp-nbsp-3-5-ajax-">&nbsp;&nbsp;3.5 AJAX를 이용한 댓글, 게시글 작성</h3>
<p>[]</p>
<p>댓글이나 게시글을 작성할 때 새로고침이나 앞뒤 이동으로 컨텐츠가 중복 생성되는 것을 방지하기 위해서<br>AJAX를 이용해 구현했다.  </p>
<h3 id="-nbsp-nbsp-3-jira-kanban-">&nbsp;&nbsp;3.6 에자일-칸반 방법론 사용</h3>
<p>[]</p>
<p>프로젝트 중간 부분부터 계획없는 개발에 단점이 부각되어 근본적인 부분부터 다시 세워가며 개발을 하기위해 Kanban방식을 도입했다.<br>
이슈트래커 툴을 결정하기 위해 조사해본 결과, 현업에서도 많이 쓰이고 양질의 서비스를 무료로 이용할 수 있는 JIRA 소프트웨어를 사용하기로 했다.<br>
매 주 첫날 업무 목록을 만들고, 업무 목록의 중요도나 긴급도를 파악해서 매일매일 할당된 만큼 개발을 진행했다.</p>
<h2 id="3-folder-structure">3. Folder structure</h2>
<h2 id="4-db-">4. DB 구조 (릴레이션 스키마)</h2>
<p><a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/erd.png" width="1000" height="800"></a></p>
<h2 id="5-">5. 클래스 및 패키지 구조</h2>
<h3 id="-nbsp-nbsp-5-1-classdiagram">&nbsp;&nbsp;5.1 ClassDiagram</h3>
<p><a href="url"><img src="https://raw.githubusercontent.com/Gnaseel/SpringProject/master/images/classDiagram.png" width="1000" height="800"></a></p>
<h2 id="6-">6. 유닛테스트</h2>
<h3 id="-nbsp-nbsp-6-1-code-coverage">&nbsp;&nbsp;6.1 code coverage</h3>
<h2 id="7-">7. 개선 가능한 기능</h2>
<h3 id="-nbsp-nbsp-7-1-cache-">&nbsp;&nbsp;7.1 Cache 기능</h3>
<p>즉각적인 반영이 필요없는 일부 데이터를 캐싱해서 사용하여 DB접근 횟수를 줄이고, 최적화 할 수 있다.</p>
<h3 id="-nbsp-nbsp-7-2-">&nbsp;&nbsp;7.2 보안 기능 강화</h3>
<p>SQL injection, XSS, CSRF등 front단에서 추가적으로 보안 확보 가능</p>
<h3 id="-nbsp-nbsp-7-3-">&nbsp;&nbsp;7.3 실제 배포</h3>
<p>로컬 환경이 아닌 실제 서버에 배포하는 과정</p>


  </div>
</template>

<script>
export default {

}
</script>

<style>
@import "../css/pjtReadmeCommon.css";
</style>