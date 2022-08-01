import * as flsFunctions from "./modules/functions.js";
import * as burger from "./modules/burger.js";
import * as tablinks from "./modules/tablinks.js";
import * as accordion from "./modules/accordion.js";
import * as video from "./modules/video.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper1', {
	modules: [Navigation],
	navigation: {
		nextEl: '.swiper-next1',
		prevEl: '.swiper-prev1',
	},
});

const swiper2 = new Swiper('.swiper2', {
	modules: [Navigation],
	navigation: {
		nextEl: '.swiper-next2',
		prevEl: '.swiper-prev2',
	},
	spaceBetween: 28,
	slidesPerView: 'auto',
});

const swiper3 = new Swiper('.swiper3', {
	modules: [Navigation],
	navigation: {
		nextEl: '.swiper-next3',
		prevEl: '.swiper-prev3',
	},
	slidesPerView: 1,
});