import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController, ActionSheetController, Content } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { RedditService } from '../../providers/reddit-service/reddit-service';
import { FormControl } from '@angular/forms'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

    @ViewChild(Content) content: Content;

    public feeds: Array<any>;
    private url: string = "https://www.reddit.com/new.json";
    private postsAntigos: string = "https://www.reddit.com/new.json?after=";
    private postsNovos: string = "https://www.reddit.com/new.json?before=";

    public feedSemFiltro: Array<any>;
    public possuiFiltro: boolean = false;

    public termoBuscar: string = '';
    public termoBuscarControle: FormControl;

    constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController,
                public actionSheetCtrl: ActionSheetController, public redditService: RedditService) {

        this.carregarConteudo();

        this.termoBuscarControle = new FormControl();

        this.termoBuscarControle.
        valueChanges.
        debounceTime(1000).
        distinctUntilChanged().
        subscribe(busca => {
            if (busca !== '' && busca) {
                this.buscar();
            }
        })

    }

    buscar() {
        this.possuiFiltro = false;
        this.feeds = this.feedSemFiltro.filter((item) => {
            return item.data.title.toLowerCase().indexOf(this.termoBuscar.toLowerCase()) > -1;
        })
    }

    carregarConteudo():void {

        let carregando = this.loadingCtrl.create({
            content: "Carregando Conteúdo..."
        })

        this.redditService.carregarConteudo(this.url)
        .then(data => {

            this.feeds = data;
            this.feedSemFiltro = this.feeds
            carregando.dismiss();

        });        
    }

    selecionarItem(url: string):void {        
        let browser = new InAppBrowser();
        browser.create(url, '_system');
    }

    doInfinito(scrollInfinito) {
        let paramsUrl = (this.feeds.length > 0) ? this.feeds[this.feeds.length - 1].data.name : "";

        this.http.get(this.postsAntigos + paramsUrl)
        .map(res => res.json())
        .subscribe(data => {
            this.feeds = this.feeds.concat(data.data.children);

            this.feeds.forEach((e,i,a) => {
                if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1) {
                    e.data.thumbnail = 'http://www.redditstatic.com/icon.png';
                }
            })
            
            this.feedSemFiltro = this.feeds;
            this.possuiFiltro = false;
            scrollInfinito.complete();
        });
    }

    doRefresh(refresher) {
        let paramsUrl = this.feeds[0].data.name;

        this.http.get(this.postsNovos + paramsUrl).map(res => res.json())
        .subscribe(data => {
        
            this.feeds = data.data.children.concat(this.feeds);
            
            this.feeds.forEach((e, i, a) => {
                if (!e.data.thumbnail || e.data.thumbnail.indexOf('b.thumbs.redditmedia.com') === -1 ) {  
                    e.data.thumbnail = 'http://www.redditstatic.com/icon.png';
                }
            })
            
            this.feedSemFiltro = this.feeds;
            this.possuiFiltro = false;            
            refresher.complete();
        });         
    }

    mostrarFiltros():void {

        this.content.scrollToTop();

        let actionSheet = this.actionSheetCtrl.create({
            title: 'Opções de Filtro:',
            buttons: [
                {
                    text: 'Música',
                    handler: () => {
                        this.feeds = this.feedSemFiltro.filter((item) => item.data.subreddit.toLowerCase() === "music");
                        this.possuiFiltro = true;
                    }
                },
                {
                    text: 'Filmes',
                    handler: () => {
                        this.feeds = this.feedSemFiltro.filter((item) => item.data.subreddit.toLowerCase() === "movies");
                        this.possuiFiltro = true;
                    }                    
                },
                {
                    text: 'Games',
                    handler: () => {
                        this.feeds = this.feedSemFiltro.filter((item) => item.data.subreddit.toLowerCase() === "gaming");
                        this.possuiFiltro = true;
                    }                    
                },
                {
                    text: 'Livros',
                    handler: () => {
                        this.feeds = this.feedSemFiltro.filter((item) => item.data.subreddit.toLowerCase() === "books");
                        this.possuiFiltro = true;
                    }                    
                },                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: () => {
                        this.feeds = this.feedSemFiltro
                        this.possuiFiltro = false;
                    }
                },
            ]
        });

        actionSheet.present();

    }
}
