var hamburger, asideListSm, asideList;
hamburger = document.getElementById('hamburger');
asideListSm = document.querySelector('.aside-list-sm');
asideList = document.querySelector('.aside-list');

hamburger.addEventListener('click', function () {
    if (asideList.classList.contains('db')) {
        asideList.classList.remove('db');
        asideList.classList.add('dn');
    }
    if (asideListSm.classList.contains('dn')) {
        asideList.classList.remove('dn');
        asideList.classList.add('db');
    }
})