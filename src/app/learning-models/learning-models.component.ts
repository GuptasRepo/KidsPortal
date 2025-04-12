import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-models',
  templateUrl: './learning-models.component.html',
  styleUrls: ['./learning-models.component.css']
})
export class LearningModelsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedImage: string = '../../assets/MainPageImages/select_image.jpg';
  isCardSelected: boolean = false;
  mobileMenuOpen = false;

  cards = [
    { id: 1, title: "Tables", image: "https://i.pinimg.com/originals/7f/2f/b4/7f2fb4c3b8252a73e15ab6cc6cbe28a2.gif" },
    { id: 2, title: "Addition", image: "https://cdn.dribbble.com/users/24711/screenshots/1509418/learngit-slider-elements.gif" },
    { id: 3, title: "Subtraction", image: "https://www.icegif.com/wp-content/uploads/2023/09/icegif-258.gif" },
    { id: 4, title: "Multiplication", image: "https://gomycode.com/ke/wp-content/uploads/sites/32/2024/03/5f2518fcc6deab3c595dc4d1_Version-control.gif" },
    { id: 5, title: "Division", image: "https://i.pinimg.com/originals/cd/59/d6/cd59d626dc86397fe45080e6e9c7027d.gif" },
    { id: 6, title: "Prime Numbers", image: "https://media.tenor.com/6EY-3VQx2EIAAAAM/internet-fast.gif" },
    { id: 7, title: "Prime Factors", image: "https://camo.githubusercontent.com/72a7dbd65295e4fc292169d45bafb9bd576d72bb5e2a2c60d0a9db8b62b6c16c/68747470733a2f2f646576776562616268692e6769746875622e696f2f496d616765732f6865726f2d6d652d6461726b2e676966" },
    { id: 8, title: "Divisibility Test", image: "https://media.tenor.com/njZDkdXxGFEAAAAM/suddenly-im-learning-spongebob.gif" },
    { id: 9, title: "Measurements", image: "https://www.vyond.com/wp-content/uploads/2024/11/Book-Club-8-480p-4fa264dd-e035-40cc-8907-e78d890c8c4e.gif" },
    { id: 10, title: "Time", image: "https://cdn-images-1.medium.com/v2/resize:fit:1000/1*EhAkkl6EpSYDak3dMEhOFQ.gif" }
  ];

  selectCard(image: string) {
    this.selectedImage = image;
    this.isCardSelected = true;
  }

  onLevelSelect(level: string) {
    window.location.href = '/tables/'+level;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollCarousel(direction: number) {
    const carousel = document.querySelector('.cards-carousel');
    if (carousel) {
      // Calculate scroll amount based on card width + gap
      const scrollAmount = (150 + 15) * direction; // 150px card width + 15px gap
      carousel.scrollBy({ 
        left: scrollAmount,
        behavior: 'smooth' 
      });
    }
  }

}
