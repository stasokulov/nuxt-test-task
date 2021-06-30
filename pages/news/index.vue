<template>
	<section>
		<h1>Новости</h1>
		<div class="margin-bottom">
			<span>Поиск по дате</span>
			<input type="date" v-model="searchDate" class="searchDate">
		</div>
		<div class="margin-bottom">
			<input type="text" v-model="searchTitle" class="searchTitle" placeholder="Поиск по тексту">
		</div>
		<div class="margin-bottom">
			<button @click="currentPage--" :class="{'disable': currentPage < 1}">Назад</button>
			<button v-for="page in pagesNumbersArray" :key="page" @click="currentPage = page - 1" :class="{'pagination__item_active': +currentPage === page - 1}" class="margin-right">
				{{page}}
		</button>
		<button @click="currentPage++" :class="{'disable': currentPage >= pagesNumbers - 1}">Вперед</button>
		</div>
		

		<ul>
			<li v-for="_new in currentNews" :key="_new.guid">
				<p>{{ new Date(_new.pubDate).toLocaleDateString() }}</p>
				<nuxt-link :to="`news/${_new.id}`">
					<h2>{{ _new.title['#cdata'] }}</h2>
				</nuxt-link>
				<p>{{ _new.description['#cdata'] }}</p>
			</li>
		</ul>


	</section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	async fetch({store}) {
		if(store.getters['news/getNews'].length === 0) {
			await store.dispatch('news/requestNews');
		}
	},
	data() {
		return {
			newsPerPage: 5,
			currentPage: 0,
			searchDate: null,
			searchTitle: null
		}
	},
	methods: {
		numberToArray(startNum, length) {
			const arr = [];
			for(let i = startNum; i<=startNum+length; i++) {
				arr.push(i);
			};
			return arr;
		}
	},
	computed: {
		...mapGetters({
			news: ['news/getNews']
		}),
		filtredNews: function() {
			this.currentPage = 0;
			let filtredNews = null;
			this.searchDate === null ?
			filtredNews = this.news :
			filtredNews = this.news.filter(item => new Date(item.pubDate).toLocaleDateString() === new Date(this.searchDate).toLocaleDateString());

			this.searchTitle === null ?
			filtredNews = filtredNews :
			filtredNews = filtredNews.filter(item => item.title['#cdata'].includes(this.searchTitle))
			return filtredNews;
		},
		newsNumbers: function() {
			return this.filtredNews.length;
		},
		pagesNumbers: function() {
			return Math.ceil(this.newsNumbers / this.newsPerPage);
		},
		pagesNumbersArray: function() {
			if (this.pagesNumbers < 10) { //Если страниц меньше 10, отображаем их все их номера.
				return this.pagesNumbers
			} else if (this.currentPage < 5) { // Иначе, если текущий номер страницы близок к началу, отображаем часть номеров, начиная с первого.
				return this.numberToArray(1, 10)
			} else if (this.currentPage > this.pagesNumbers - 5) { // Если текущий номер страницы близок к концу, отображаем часть номеров, заканчивая последним.
				return this.numberToArray(this.pagesNumbers - 10,  10) 
			} else { // Иначе отображаем часть номеров в районе текущего номера страницы.
				return this.numberToArray(this.currentPage - 5,  10)
			}
			
		},
		currentNews: function() {
			return this.filtredNews.slice(this.currentPage*this.newsPerPage, this.currentPage*this.newsPerPage + this.newsPerPage);
		},
	}
}
</script>

<style scoped lang="scss">
	.disable {
		pointer-events: none;
		opacity: 0.5;
	}
	.pagination__item_active {
		color: red;
	}
	.searchDate {
		padding: 5px;
		border: black 1px solid;
	}
	.searchTitle {
		padding: 5px;
		border: black 1px solid;
	}
	.margin-bottom {
		margin-bottom: 20px;
	}
	.margin-right {
		margin-right: 5px;
		margin-left: 5px;
	}
</style>
