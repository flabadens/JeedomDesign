/*
  Menu name : Menu style Indus
  Author : geqr
  Website : www.ma-maison-intelligente.fr
  Tutorial : http://ma-maison-intelligente.fr/2020/03/ameliorer-son-design-jeedom-avec-un-menu/
	Origin : https://codepen.io/AlbertFeynman/pen/mjXeMV
  Last Update : 20200318 - creation
 */

const lis = document.querySelectorAll(".buttons-container li");
const a = document.querySelectorAll(".buttons-container li a");

for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    for (let i = 0; i < lis.length; i++) {
      lis[i].classList.remove("active");
      a[i].classList.remove("active-text");
    }
    this.classList.add("active");
    a[i].classList.add("active-text");
  });
}
