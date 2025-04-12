import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-levels',
  templateUrl: './table-levels.component.html',
  styleUrls: ['./table-levels.component.css']
})
export class TableLevelsComponent implements OnInit {

  levelSelected: string = 'Beginner';
  mobileMenuOpen = false;

  images = [
    '../../assets/tableCounts/one.gif',
    '../../assets/tableCounts/two.gif',
    '../../assets/tableCounts/three.gif',
    '../../assets/tableCounts/four.gif',
    '../../assets/tableCounts/five.gif',
    '../../assets/tableCounts/six.gif',
    '../../assets/tableCounts/seven.gif',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzg5OXRldjg2YjU3cmVoY21wcHdqbndqcTh3ZjFjeXpwOWI0dGtyeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/B6bnealXUbW18QjPCd/giphy.webp',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXVxcTd2NHk1eDRlZWNnMWN1eHpwMWIwcWprdDJhNXh5ZG80NDZoeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6OyrnAKxd46Rfall6K/giphy.webp',
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzc4amJpd2pycDZ1OHdiYW5vamZ2N2Fvam4zYWlkb3JtcnRtbWFkayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/L6H0acoYt82e4r0Sgn/giphy.webp',
    'https://media.baamboozle.com/uploads/images/234511/1624722436_235960_gif-url.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmd4MWMxdmJoYTZzOW14ZWRucHF6Z2d0MjQwaHVsYzVxbjYycHR4NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/0yp1UzqC8z5bskNExG/giphy.webp',
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpyaHZiZnhhamx4bGJ4a2tka3JzZ3hwaHQ0Ynh0dmpvaWFva3hycyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8PuWB2Qq49GQ8/giphy.webp',
    'https://cdn.dribbble.com/users/75310/screenshots/3726278/traxio2.gif',
    'https://media.tenor.com/jk3PWuS9kq4AAAAM/google15years.gif',
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmZzMjZxa20xMWxsb2ttb3hkNHg1b3RtbGp5MHIwZmZpeGZwcDdzayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4U4hy63YFqpmgN90mg/giphy.webp'
];


  constructor() { }

  ngOnInit(): void {
    const url = window.location.pathname; 
    const lastSlashIndex = url.lastIndexOf('/');
    const level = url.slice(lastSlashIndex + 1);
    if(level === 'Advanced'){
      this.levelSelected = 'Advanced';
      this.images = this.images.slice(10, 16);
    } 
    else if(level === 'Intermediate'){
      this.levelSelected = 'Intermediate';
      this.images = this.images.slice(5, 10);
    }
    else if(level === 'Beginner'){
      this.levelSelected = 'Beginner';
      this.images = this.images.slice(0, 5);
    }
  }

  getAdjustedIndex(i: number): number {
    if (this.levelSelected === 'Intermediate') {
      return i + 5;
    } else if (this.levelSelected === 'Advanced') {
      return i + 10;
    }
    return i;
  }

  goToPlay(id:number){
    window.location.href = '/play/' + id;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

}
