<template>
	<section>
		<nuxt-link to="/news">
			Назад к списку новостей
		</nuxt-link>
		<h1>{{_new.title['#cdata']}}</h1>
		<p>{{ new Date(_new.pubDate).toLocaleDateString() }}</p>
		<p v-if="_new.author">Автор: {{ _new.author }}</p>
		<p>{{ _new.description['#cdata'] }}</p>
		<div v-if="_new.enclosure">
			<div class="slider-wrapper">
				<div class="slider">
					<ul class="slider-list">
						<li v-for="(slide, index) in imgArray"
							:key="index"
							class="slide"
							:class="{active: slide.isActive, big: slide.isBig}"
						>
							<img :src="slide['@url']" class="img" @click="bigSlide === null ? bigSlide = activeSlide : bigSlide = null">
						</li>
					</ul>
					<div v-if="imgArray.length > 1" @click="changeSlide('prev')" class="arrow arrow-left"></div>
					<div v-if="imgArray.length > 1" @click="changeSlide('next')" class="arrow arrow-right"></div>
				</div>
			</div>
		</div>
		<a :href="`${_new.link}`" target="_blank">Ссылка на оригинальную новость на сайте РБК.</a>


	</section>	
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	validate({params}) {
		return /^\d+$/.test(params.id)
	},
	async fetch({store}) {
		if(store.getters['news/getNews'].length === 0) {
			await store.dispatch('news/requestNews');
		}
	},
	data() {
		return {
			activeSlide: 0,
			bigSlide: null
		}
	},
	computed: {
		...mapGetters({
			news: ['news/getNews']
		}),
		_new: function() {
			return this.news.find(item => +item.id === +this.$route.params.id)
		},
		imgArray: function() {
			let imgArray = [];
			if (this._new.enclosure) { // Если раздел с фото вообще есть в новости
				if ( this._new.enclosure.hasOwnProperty('@type') ) { // Если у раздела есть свойство @type, значит это один объект, а не массив объектов.
					if ( this._new.enclosure['@type'].includes('image') ) { // Если тип контента в этом объекте - изображение, то возвращаем этот объект, как единственный элемент массива.
						imgArray = [this._new.enclosure]
					}
				} else { // Иначе это массив. Возвращаем массив только с теми элементами, где есть изображение.
					imgArray = this._new.enclosure.filter(item => item['@type'].includes('image'))
				}
			};
			imgArray.forEach(img => {
				img.isActive = false;
				img.isBig = false;
			});
			imgArray[this.activeSlide].isActive = true;
			if (this.bigSlide !== null) {
				imgArray[this.bigSlide].isBig = true;
			}
			return imgArray;
		}
	},
	methods: {
		changeSlide(what) {
			if(what === 'next') {
				this.activeSlide === this.imgArray.length - 1 ?
				this.activeSlide = 0 :
				this.activeSlide++
			}
			if(what === 'prev') {
				this.activeSlide === 0 ?
				this.activeSlide = this.imgArray.length - 1 :
				this.activeSlide--
			}
		},
		q(index) {
			console.log(index);
		}
	}
}
</script>

<style scoped>
.slider-wrapper {
	display: flex;
	justify-content: center;
	margin-bottom: 50px;
}
.slider {
	position: relative;
	width: 640px;
	height: 450px;
	font-family: 'RotondaC', sans-serif;
	font-style: normal;
}
.slider-list {
	position: relative;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	list-style: none;
}
.slide {
	display: flex;
    justify-content: center;
    align-items: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	opacity: 0;
	background-color: #fff;
	padding: 40px;
	transition: opacity, 1s;
	box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
}
.active {
	opacity: 1;
}
.big {
	position: fixed;
	display: flex;
    justify-content: center;
    align-items: center;
	top: 64px;
	bottom: 0;
	left: 0;
	right: 0;
	transform: none;
	transition: none;
	background-color: rgba(0, 0, 0, 0.5);
}
.img {
	display: block;
	width: 100%;
	height: auto;
}
.arrow {
	position: absolute;
	top: 50%;
	width: 20px;
	height: 40px;
	transform: translate(0, -50%);
	cursor: pointer;
}
.arrow:before {
	content: '';
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='44' fill='none'%3E%3Cpath d='M2 2l20 20L2 42' stroke='%23D0D5CD' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
}
.arrow-left {
	right: calc(100% + 30px);
}
.arrow-left::before {
	transform: rotate(-180deg);
}
.arrow-right {
	left: calc(100% + 30px);
}

@media (max-width: 1024px) {
	.slider {
		width: 280px;
		height: 350px;
		padding-bottom: 62px;
	}
	.slide {
		padding: 20px;
	}
	.arrow {
		top: auto;
		bottom: 0;
		transform: none;
		width: 14px;
		height: 28px;
	}
	.arrow-left {
		right: auto;
		left: calc(50% - 30px - 14px);
	}
	.arrow-right {
		right: calc(50% - 30px - 14px);
		left: auto;
	}
}
</style>