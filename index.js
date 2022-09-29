'use strict'

const newspaper = {
    title: 'Yellow Press',
    articles: [
        {
            aithor: 'John Doe',
            text: 'Blablabla',
            date: 'today',
        },
        {
            aithor: 'Alex Doe',
            text: 'Blablabla',
            date: 'today',
        },
        {
            aithor: 'Michael Doe',
            text: 'Blablabla',
            date: 'today',
        },
        {
            aithor: 'Jo Doe',
            text: 'Blablabla',
            date: 'today',
        },
    ],
    showArticles: function (){
        this.articles.forEach((article)=>{
            console.log(`${this.title}, ${article.aithor}: ${article.text}`)
        });
    }
}