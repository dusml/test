new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    navigation: true,//슬라이드의 페이지 버튼
    navigationTooltips: ['HOME', 'ABOUT ME', 'SKILLS', 'PORTFOLIO', 'PHOTO GALLERY', 'CONTACT'],
    navigationPosition: 'left',
    slidesNavigation: true,// 서브 슬라이드의 페이지 버튼
    slidesNavPosition: 'bottom', // Default

    controlArrows:false, //슬라이더 양쪽 화살표
    /* sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],  각 섹션의 배경 설정*/

    //scrollBar:true, //스크롤 바가 생김
    fitToSection: true,//default - true
    fitToSectionDelay : 600,

    scrollingSpeed: 1000,//default - 700

    menu: '.menu',
    anchors:['home', 'aboutme', 'skills', 'portfolio', 'photogallery', 'contact'], //각섹션으로 가는 링크
    // scrollBar: true,
    responsiveWidth: 800,//화면 너비가 800이하일때 화면 스크롤바 생기게 된다. 페이지 바 없어짐
});