import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-play-table-game',
  templateUrl: './play-table-game.component.html',
  styleUrls: ['./play-table-game.component.css']
})
export class PlayTableGameComponent implements OnInit {

  tableNumber: number = 1;
  modalDisplay: string = 'none';
  multiplicationText: string = '';
  clickCount: number = 0;
  isClickAllowed: boolean = true;
  treeImage: string = '';
  sideImageLeft: string = '';
  sideImageRight: string = '';
  leftQuote: string = '';
  rightQuote: string = '';
  leftFooterImage: string = '';
  rightFooterImage: string = '';
  modalImage: string = '';
  baskets: any[] = new Array(12).fill(null);
  mobileMenuOpen = false;

  // Image and text data
  modalImages: { [key: number]: string } = {
    1: '../../assets/modalImages/monkey.avif',
    2: '../../assets/modalImages/thank you rabbit.gif',
    3: '../../assets/modalImages/thankyouballoon.jpg',
    4: '../../assets/modalImages/crayon-shinchan.gif',
    5: '../../assets/modalImages/johnny-bravo.gif',
    6: '../../assets/modalImages/popeye-spinach.gif',
    7: '../../assets/modalImages/doraemon-dora.gif',
    8: '../../assets/modalImages/dora-dora-the-explorer.gif',
    9: '../../assets/modalImages/harry-hermione-ron.gif',
    10: '../../assets/modalImages/bheem-laddoo.webp',
    11: '../../assets/modalImages/modalsponge.gif',
    12: '../../assets/modalImages/winniegroup.webp',
    13: '../../assets/modalImages/dance.gif',
    14: '../../assets/modalImages/simpcelebrate.gif',
    15: '../../assets/modalImages/unimodal.png',
    16: '../../assets/modalImages/mariomodal.gif'
  };

  images: { [key: number]: string } = {
    1: '../../assets/midImages/apple-tree.png',
    2: '../../assets/midImages/Carrots_in_woodenbox.jpg',
    3: '../../assets/midImages/BallloonBunch.png',
    4: '../../assets/midImages/Chocobi-final.png',
    5: '../../assets/midImages/chickenwitheggs.jpg',
    6: '../../assets/midImages/spinach.jpg',
    7: '../../assets/midImages/cookies.avif',
    8: '../../assets/midImages/crayons.webp',
    9: '../../assets/midImages/library.jpg',
    10: '../../assets/midImages/ganesha.jpg',
    11: '../../assets/midImages/spongebob.jpg',
    12: '../../assets/midImages/bananabox.jpg',
    13: '../../assets/midImages/flower.png',
    14: '../../assets/midImages/jalebiman.png',
    15: '../../assets/midImages/unicornballs.jpg',
    16: '../../assets/midImages/mushroompalace.jpg'
  };

  basketImages: { [key: number]: string } = {
    1: '../../assets/baskets/brown-basket.webp',
    2: '../../assets/baskets/Carrot_basket.png',
    3: '../../assets/baskets/Carrot_basket.png',
    4: '../../assets/baskets/Carrot_basket.png',
    5: '../../assets/baskets/Carrot_basket.png',
    6: '../../assets/baskets/brown-basket.webp',
    7: '../../assets/baskets/kitchen-bowl.webp',
    8: '../../assets/baskets/shopbag.png',
    9: '../../assets/baskets/open-box.png',
    10: '../../assets/baskets/empty-plates.png',
    11: '../../assets/baskets/bowl.png',
    12: '../../assets/baskets/brown-basket.webp',
    13: '../../assets/baskets/pot.png',
    14: '../../assets/baskets/empty-plates.png',
    15: '../../assets/baskets/empty-plates.png',
    16: '../../assets/baskets/Carrot_basket.png'
  };

  sideImagesLeft: { [key: number]: string } = {
    1: '../../assets/leftSideImages/hi-monkey.gif',
    2: '../../assets/leftSideImages/carrot-bugs.png',
    3: '../../assets/leftSideImages/happy girl.gif',
    4: '../../assets/leftSideImages/kazama.png',
    5: '../../assets/leftSideImages/johnnybravo.png',
    6: '../../assets/leftSideImages/popeye.png',
    7: '../../assets/leftSideImages/nobita-nobi.png',
    8: '../../assets/leftSideImages/dora.png',
    9: '../../assets/leftSideImages/hermione.png',
    10: '../../assets/leftSideImages/chhotabheem.png',
    11: '../../assets/leftSideImages/patrickstar.png',
    12: '../../assets/leftSideImages/winnie.png',
    13: '../../assets/leftSideImages/cindrella.png',
    14: '../../assets/leftSideImages/simpsonfemale.png',
    15: '../../assets/leftSideImages/bloom.png',
    16: '../../assets/leftSideImages/mario.png'
  };

  sideImagesRight: { [key: number]: string } = {
    1: '../../assets/rightSideImages/hi-monkey.gif',
    2: '../../assets/rightSideImages/carrot-bugs.png',
    3: '../../assets/rightSideImages/happy girl.gif',
    4: '../../assets/rightSideImages/shinchandance.gif',
    5: '../../assets/rightSideImages/liitleSuzy.png',
    6: '../../assets/rightSideImages/olive.png',
    7: '../../assets/rightSideImages/shizuka.png',
    8: '../../assets/rightSideImages/Dora-Backpack.webp',
    9: '../../assets/rightSideImages/harry.png',
    10: '../../assets/rightSideImages/chutki-indumati.png',
    11: '../../assets/rightSideImages/krabs.png',
    12: '../../assets/rightSideImages/tiger.png',
    13: '../../assets/rightSideImages/prince.png',
    14: '../../assets/rightSideImages/simpsonmale.png',
    15: '../../assets/rightSideImages/flora.png',
    16: '../../assets/rightSideImages/luigi.png'
  };

  leftQuotes: { [key: number]: string } = {
    1: '"Hey, I am Sam. Please fill some apples in our baskets. We are hungry."',
    2: 'MMMM !! I smell carrots...',
    3: 'Hello ! I am Nina and this is my sister Tina. We are twin sisters',
    4: 'Hello ! Could you please collect some chochips for us',
    5: 'I am hungry . I need some protein',
    6: 'I need power to fight Bluto & save Olive',
    7: 'Shizuka made us cookies, lets go eat them, Yippeee!!!',
    8: 'Bagpack please give me colors !!!',
    9: 'Harry , lets go to the library.',
    10: 'Namastey Ganesh Ji !! Can we also have some laddoos?',
    11: 'Spongebob you traitor give some of those to me as well.',
    12: 'MMM!! Bananas lets have some.',
    13: 'OMG !! I need to leave before midnight.',
    14: 'Honey !! Time for some celebrations !!',
    15: 'Woah Unicorns!!',
    16: 'Luigi, we need to protect the mushroom palace.'
  };

  rightQuotes: { [key: number]: string } = {
    1: '"Hey, I am Ram. We are starving. Give us some apples please !!!"',
    2: 'Look there are those :)',
    3: 'It is our birthday today so please pick some balloons for our friends',
    4: 'Yum.......! chococip....',
    5: 'You can eat some eggs. It has protein',
    6: 'Ohhhh, Popeye help me!!! ',
    7: 'Nobita, Doraemon cookies are ready. Come fast!!',
    8: 'Here you go, Dora & boots',
    9: 'Ya sure Hermione me and Ron will read a book.',
    10: 'OOOOhhh laddooos!! Looks delicious',
    11: 'Scaredy Pants, will eat all cherries by himself, Pass here too.',
    12: 'Sure Pooh, I am hungry too',
    13: 'Help me pick flowers from the castle to ask Ms. for a dance',
    14: 'Yeah Marge !! Sweet sweets would be delightful.',
    15: 'Bloom lets play with them.',
    16: 'Correct Mario !! But how???'
  };

  leftFooterImages: { [key: number]: string } = {
    1: '../../assets/leftFooter/bushes.webp',
    2: '../../assets/leftFooter/bushes.webp',
    3: '../../assets/leftFooter/clip-confetti-gif-2.gif',
    4: '../../assets/leftFooter/clip-confetti-gif-2.gif',
    5: '../../assets/leftFooter/bushes.webp',
    6: '../../assets/leftFooter/bushes.webp',
    7: '../../assets/leftFooter/bushes.webp',
    8: '../../assets/leftFooter/bushes.webp',
    9: '../../assets/leftFooter/bushes.webp',
    10: '../../assets/leftFooter/bushes.webp',
    11: '../../assets/leftFooter/starfoot.png',
    12: '../../assets/leftFooter/bushes.webp',
    13: '../../assets/leftFooter/castle.png',
    14: '../../assets/leftFooter/diya.png',
    15: '../../assets/leftFooter/unifoot.png',
    16: '../../assets/leftFooter/mushhome.png'
  };

  rightFooterImages: { [key: number]: string } = {
    1: '../../assets/leftFooter/bushes.webp',
    2: '../../assets/leftFooter/bushes.webp',
    3: '../../assets/leftFooter/clip-confetti-gif-2.gif',
    4: '../../assets/leftFooter/clip-confetti-gif-2.gif',
    5: '../../assets/leftFooter/bushes.webp',
    6: '../../assets/leftFooter/bushes.webp',
    7: '../../assets/leftFooter/bushes.webp',
    8: '../../assets/leftFooter/bushes.webp',
    9: '../../assets/leftFooter/bushes.webp',
    10: '../../assets/leftFooter/bushes.webp',
    11: '../../assets/leftFooter/starfoot.png',
    12: '../../assets/leftFooter/bushes.webp',
    13: '../../assets/leftFooter/castle.png',
    14: '../../assets/leftFooter/diya.png',
    15: '../../assets/leftFooter/unifoot.png',
    16: '../../assets/leftFooter/mushhome.png'
  };

  items: { [key: number]: string } = {
    1: 'apples',
    2: 'carrots',
    3: 'balloons',
    4: 'chocochips',
    5: 'eggs',
    6: 'spinach',
    7: 'cookies',
    8: 'crayons',
    9: 'books',
    10: 'laddoos',
    11: 'cherries',
    12: 'bananas',
    13: 'flowers',
    14: 'jalebis',
    15: 'balls',
    16: 'mushrooms'
  };

  tableMoveImages: { [key: number]: string } = {
    1: "../../assets/movingImages/apple-3155.png",
    2: "../../assets/movingImages/two-carrot.png",
    3: "../../assets/movingImages/threeballoon.png",
    4: "../../assets/movingImages/4chocochip.png",
    5: "../../assets/movingImages/5eggs.png",
    6: "../../assets/movingImages/6leaves.png",
    7: "../../assets/movingImages/7cookie.png",
    8: "../../assets/movingImages/8crayon.png",
    9: "../../assets/movingImages/9books.png",
    10: "../../assets/movingImages/10laddoo.png",
    11: "../../assets/movingImages/cherry.png",
    12: "../../assets/movingImages/movebanana.png",
    13: "../../assets/movingImages/bouquet.png",
    14: "../../assets/movingImages/jalebi.png",
    15: "../../assets/movingImages/balls.png",
    16: "../../assets/movingImages/mushroom.png"
  };

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const numberParam = params.get('id');
      console.log('Number from URL:', numberParam);
      this.tableNumber = numberParam ? +numberParam : 1;
      this.initGame();
    });
  }

  initGame(): void {

    this.treeImage = this.images[this.tableNumber] || this.images[1];
    this.sideImageLeft = this.sideImagesLeft[this.tableNumber];
    this.sideImageRight = this.sideImagesRight[this.tableNumber];
    this.leftQuote = this.leftQuotes[this.tableNumber];
    this.rightQuote = this.rightQuotes[this.tableNumber];
    this.leftFooterImage = this.leftFooterImages[this.tableNumber] || this.leftFooterImages[1];
    this.rightFooterImage = this.rightFooterImages[this.tableNumber] || this.rightFooterImages[1];
    this.modalImage = this.modalImages[this.tableNumber] || this.modalImages[1];

    this.setStylesBasedOnTableNumber();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  setStylesBasedOnTableNumber(): void {
    const modalImg = document.getElementById('modal_img') as HTMLImageElement;
    const tree = document.getElementById('tree') as HTMLImageElement;
    const sideImageLeft = document.getElementById('sideImageleft') as HTMLImageElement;
    const sideImageRight = document.getElementById('sideImageright') as HTMLImageElement;
    const leftFooter = document.getElementById('leftFooter') as HTMLImageElement;
    const rightFooter = document.getElementById('rightFooter') as HTMLImageElement;

    if (this.tableNumber === 2) {
      modalImg.style.width = '30%';
      tree.style.height = '350px';
      tree.style.width = '350px';
      sideImageLeft.style.height = '350px';
      sideImageLeft.style.width = '200px';
      sideImageRight.style.height = '350px';
      sideImageRight.style.width = '200px';
    } else if (this.tableNumber === 6 || this.tableNumber === 12 || this.tableNumber === 13) {
      modalImg.style.width = '70%';
    } else if (this.tableNumber === 9 || this.tableNumber === 11 || this.tableNumber === 14) {
      modalImg.style.width = '80%';
    }

    if (this.tableNumber === 3 || this.tableNumber === 4) {
      tree.style.height = '350px';
      tree.style.width = '400px';
      sideImageLeft.style.height = '300px';
      sideImageRight.style.height = '300px';
      leftFooter.style.width = '65%';
      rightFooter.style.width = '65%';
    } else if (this.tableNumber === 5) {
      tree.style.height = '330px';
      tree.style.width = '330px';
      sideImageRight.style.height = '350px';
    } else if (this.tableNumber === 6) {
      tree.style.height = '300px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '350px';
      sideImageLeft.style.width = '150px';
      sideImageRight.style.width = '150px';
      sideImageRight.style.height = '350px';
    } else if (this.tableNumber === 7) {
      tree.style.height = '350px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '250px';
      sideImageLeft.style.width = '200px';
      sideImageRight.style.width = '150px';
      sideImageRight.style.height = '250px';
    } else if (this.tableNumber === 8) {
      tree.style.height = '350px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '250px';
      sideImageLeft.style.width = '200px';
      sideImageRight.style.width = '200px';
      sideImageRight.style.height = '250px';
    } else if (this.tableNumber === 9) {
      tree.style.height = '300px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '250px';
      sideImageLeft.style.width = '200px';
      sideImageRight.style.width = '200px';
      sideImageRight.style.height = '250px';
    } else if (this.tableNumber === 10) {
      tree.style.height = '370px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '250px';
      sideImageLeft.style.width = '150px';
      sideImageRight.style.width = '200px';
      sideImageRight.style.height = '250px';
    } else if (this.tableNumber === 11) {
      tree.style.height = '350px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '300px';
      sideImageLeft.style.width = '200px';
      sideImageRight.style.width = '100px';
      sideImageRight.style.height = '300px';
      leftFooter.style.width = '200px';
      leftFooter.style.marginLeft = '50px';
      rightFooter.style.width = '200px';
      rightFooter.style.marginLeft = '50px';
    } else if (this.tableNumber === 12) {
      tree.style.height = '350px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '300px';
      sideImageLeft.style.width = '250px';
      sideImageRight.style.width = '250px';
      sideImageRight.style.height = '300px';
    } else if (this.tableNumber === 13) {
      tree.style.height = '320px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '300px';
      sideImageLeft.style.width = '270px';
      sideImageRight.style.width = '220px';
      sideImageRight.style.height = '300px';
      leftFooter.style.width = '250px';
      rightFooter.style.width = '250px';
    } else if (this.tableNumber === 14) {
      tree.style.height = '350px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '300px';
      sideImageLeft.style.width = '200px';
      sideImageRight.style.width = '150px';
      sideImageRight.style.height = '300px';
      leftFooter.style.width = '200px';
      leftFooter.style.marginLeft = '50px';
      rightFooter.style.width = '200px';
      rightFooter.style.marginLeft = '50px';
    } else if (this.tableNumber === 15) {
      tree.style.height = '350px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '300px';
      sideImageLeft.style.width = '280px';
      sideImageRight.style.width = '200px';
      sideImageRight.style.height = '300px';
      leftFooter.style.width = '150px';
      leftFooter.style.marginLeft = '60px';
      rightFooter.style.width = '150px';
      rightFooter.style.marginLeft = '60px';
    } else if (this.tableNumber === 16) {
      tree.style.height = '350px';
      tree.style.width = '450px';
      sideImageLeft.style.height = '300px';
      sideImageLeft.style.width = '200px';
      sideImageRight.style.width = '200px';
      sideImageRight.style.height = '300px';
      leftFooter.style.width = '150px';
      leftFooter.style.marginLeft = '60px';
      rightFooter.style.width = '150px';
      rightFooter.style.marginLeft = '60px';
    }
  }
  
  onTreeClick(event: MouseEvent): void {
    if (!this.isClickAllowed) return;
    this.isClickAllowed = false;
    this.clickCount++;
    const basketIndex = this.clickCount;
    const basket = document.getElementById(`basket${basketIndex}`);
  
    if (basket) {
      const appleOrFlower = document.createElement('img');
      appleOrFlower.src = this.tableMoveImages[this.tableNumber];
      appleOrFlower.className = 'moving-item';
  
      // Set initial size based on table number
      if (this.tableNumber === 2 || this.tableNumber === 4 || this.tableNumber === 5) {
        appleOrFlower.style.width = '50px';
        appleOrFlower.style.height = '50px';
      } else if (this.tableNumber === 3) {
        appleOrFlower.style.width = '60px';
        appleOrFlower.style.height = '60px';
      } else if (this.tableNumber === 7 || this.tableNumber === 13) {
        appleOrFlower.style.width = '50px';
        appleOrFlower.style.height = '50px';
      } else if (this.tableNumber === 8 || this.tableNumber === 14) {
        appleOrFlower.style.width = '40px';
        appleOrFlower.style.height = '40px';
      } else if (this.tableNumber === 11) {
        appleOrFlower.style.width = '35px';
        appleOrFlower.style.height = '35px';
      } else {
        appleOrFlower.style.width = '30px';
        appleOrFlower.style.height = '30px';
      }
  
      // Append the moving image to the body
      document.body.appendChild(appleOrFlower);
  
      // Get the tree and basket positions
      const treeRect = (event.target as HTMLElement).getBoundingClientRect();
      const basketRect = basket.getBoundingClientRect();
  
      // Set initial position to the tree's position
      appleOrFlower.style.position = 'absolute';
      appleOrFlower.style.left = `${treeRect.left + treeRect.width / 2}px`;
      appleOrFlower.style.top = `${treeRect.top + treeRect.height / 2}px`;
  
      // Calculate the end position (center of the basket)
      const endX = basketRect.left + basketRect.width / 2 - parseFloat(appleOrFlower.style.width) / 2;
      const endY = basketRect.top + basketRect.height / 2 - parseFloat(appleOrFlower.style.height) / 2;
  
      // Animate the movement
      requestAnimationFrame(() => {
        appleOrFlower.style.transition = 'all 1s ease-in-out';
        appleOrFlower.style.transform = `translate(${endX - treeRect.left - treeRect.width / 2}px, ${endY - treeRect.top - treeRect.height / 2}px)`;
      });
  
      // Handle the end of the animation
      appleOrFlower.addEventListener('transitionend', () => {
        document.body.removeChild(appleOrFlower);
  
        const appleHolder = document.getElementById(`apple-holder${basketIndex}`);
        const number = document.getElementById(`number${basketIndex}`);
        const display = document.createElement('h4');
        const result = this.tableNumber * this.clickCount;
        display.innerHTML = `${result}`;
        const multipliedText = document.createElement('p');
        multipliedText.innerHTML = `${this.tableNumber}x${this.clickCount}`;
        multipliedText.style.fontSize = '10px';
        const staticItem = document.createElement('img');
        staticItem.src = appleOrFlower.src;
        staticItem.style.width = appleOrFlower.style.width;
        staticItem.style.height = appleOrFlower.style.height;
  
        if (appleHolder && number) {
          appleHolder.appendChild(staticItem);
          number.appendChild(display);
          number.appendChild(multipliedText);
        }
  
        if (this.clickCount > 1 && this.clickCount <= 12) {
          this.displayPlusOne(this.clickCount - 1);
        }
  
        this.isClickAllowed = true;
      });
    }
  }

  displayPlusOne(basketIndex: number): void {
    let plusOneElement = document.getElementById(`plus-one-${basketIndex}`);
  
    if (!plusOneElement) {
      plusOneElement = document.createElement('div');
      plusOneElement.className = 'plus-one';
      plusOneElement.id = `plus-one-${basketIndex}`;
  
      // Apply the CSS styles dynamically
      plusOneElement.style.position = 'relative';
      plusOneElement.style.top = '10px';
      plusOneElement.style.left = '50%';
      plusOneElement.style.transform = 'translateX(-50%)';
      plusOneElement.style.color = 'rgb(248, 207, 132)';
      plusOneElement.style.fontWeight = 'bold';
      plusOneElement.style.fontSize = '20px';
  
      const plusOneText = document.createElement('span');
      plusOneText.innerText = `+${this.tableNumber}`;
      plusOneText.style.marginLeft = '10px';
  
      const plusOneImage = document.createElement('img');
      plusOneImage.src = '../assets/MainPageImages/pngegg.png';
      plusOneImage.style.width = '20px';
      plusOneImage.style.height = '60px';
      plusOneImage.style.marginLeft = '-20px';
  
      // Apply the CSS style for the image
      plusOneImage.style.transform = 'rotate(-90deg)';
  
      plusOneElement.appendChild(plusOneText);
      plusOneElement.appendChild(plusOneImage);
  
      const basket1 = document.getElementById(`basket${basketIndex}`);
      const basket2 = document.getElementById(`basket${basketIndex + 1}`);
  
      if (basket1 && basket2) {
        const basket1Rect = basket1.getBoundingClientRect();
        const basket2Rect = basket2.getBoundingClientRect();
  
        const plusOneX = (basket1Rect.right + basket2Rect.left) / 2;
        const plusOneY = basket1Rect.top - 60;
  
        plusOneElement.style.position = 'absolute';
        plusOneElement.style.left = `${plusOneX}px`;
        plusOneElement.style.top = `${plusOneY}px`;
  
        document.body.appendChild(plusOneElement);
      }
    }
  }

  clearBaskets(): void {
    this.clickCount = 0;
    const baskets = document.querySelectorAll('.baskets-container .apple-holder');
    const numbers = document.querySelectorAll('.baskets-container .number');
    const plusOnes = document.getElementsByClassName('plus-one');
  
    while (plusOnes[0]) {
      if (plusOnes[0].parentNode) {
        plusOnes[0].parentNode.removeChild(plusOnes[0]);
      }
    }
  
    baskets.forEach(holder => holder.innerHTML = '');
    numbers.forEach(num => num.innerHTML = '');
  }

  submitBaskets(): void {
    let total = 0;
    let totalCount = 0;

    for (let i = 1; i <= 12; i++) {
      const basket = document.getElementById(`apple-holder${i}`);
      total += basket?.querySelectorAll('.apple-holder img').length || 0;
    }

    totalCount = total * this.tableNumber;
    this.multiplicationText = `Thank you for filling my basket with ${this.tableNumber} x ${this.clickCount} = ${totalCount} ${this.items[this.tableNumber]}`;
    this.modalDisplay = 'block';
    this.speakModalContent();
  }

  speakModalContent(): void {
    const speech = new SpeechSynthesisUtterance();
    const content = this.multiplicationText;
    speech.text = content;
    window.speechSynthesis.speak(speech);
  }

  closeModal(): void {
    window.speechSynthesis.cancel();
    this.modalDisplay = 'none';
  }

}
