![logo](https://user-images.githubusercontent.com/96946274/174237065-9722ad60-97ad-494a-b100-7ff799ee1692.png)
# OurTrip

#### 프로젝트 소개
- 항공권 숙박, 티켓, 투어, 액티비티 등을 예매할 수 있는 '마이리얼트립'을 모티브로 한 여행 예약 플랫폼 사이트 '아워트립' 제작
- 개발 기간 : 2022/06/07 ~ 2022/06/16 (10일)
- 시연 영상 : https://www.youtube.com/watch?v=n8d-xT8DhpA


# 팀원

**Front-end**
|손가영|유하은|윤경연|최현민
|---|---|---|---|
|<img src="https://user-images.githubusercontent.com/96946274/174240493-1cfec6ab-792a-4c0a-8971-5943c2339be3.png" width=100px>|<img src="https://user-images.githubusercontent.com/96946274/174240826-5ad95862-9744-4315-ab3b-32b0a2c9fb54.png" width=100px>|<img src="https://user-images.githubusercontent.com/96946274/174240948-089eaf31-0c99-4c2e-a84e-95c0dc4cbd33.png" width=100px>|<img src="https://user-images.githubusercontent.com/96946274/174241448-6d768383-2589-4273-ad6d-0b942d98927f.png" width=90px>|

**Back-end**
|정병휘|최바다
|---|---|
|<img src="https://user-images.githubusercontent.com/96946274/174241508-8505d072-8289-461e-a178-89283323e66a.png" width=100px>|<img src="https://user-images.githubusercontent.com/96946274/174241538-48573a90-4cb4-463c-ac35-ae12cffda43a.png" width=100px>|

# 기술 스택

**Front-end**
- HTML5
- Styled-Component
- JavaScript(ES6)
- React.js
- react-router
- slick (*library*)

**Back-end**
- Python
- Django
- MySQL
- Bcrypt
- pyjwt
- RESTful

**Collaboration Tools**
- Git
- GitHub
- Slack
- Trello

# 구현 페이지
- **메인페이지 여행일정 선택 패널**
    - useRef를 활용하여 메인 옵션 패널의 위치를 동적으로 계산하고, 상세 옵션 패널의 위치를 조정하여 시각적 일관성을 유지했습니다.
    - Antd의 DatePicker 라이브러리를 적용하여 기간 선택 패널을 구현했습니다.
    <br>
- **메인페이지 여행 상품 리스트 섹션**
    - map 메서드를 이용하여 여행 상품 목록을 동적으로 생성했습니다.
    - 카드 섹션을 컴포넌트화하여 여러 여행 주제에 재사용했습니다.
---

# Reference
- 이 프로젝트는 마이리얼트립 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
