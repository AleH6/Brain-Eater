interface IGame {
    c: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
}

interface ITile {
    unit: number;
    image: HTMLImageElement,
    x: number,
    y: number,
    w: number,
    h: number
}

class Game implements IGame {
    c: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('myCanvas');
    context: CanvasRenderingContext2D = this.c.getContext('2d');
}
class Tile implements ITile {
    unit: number = 50;
    image: HTMLImageElement;
    x: number;
    y: number;
    w: number;
    h: number;
    constructor(
        image: string,
        x: number,
        y: number
    ) {
        this.image = new Image();
        this.image.src = image;
        this.image.height = this.unit;
        this.image.width = this.unit;
        this.x = x;
        this.y = y;
        this.w = this.unit;
        this.h = this.unit;
        this.image.addEventListener('load', () => {
            this.drawTile();
        });
    }

    drawTile() {
        game.context.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    clearTile() {
        game.context.clearRect(this.x, this.y, this.w, this.h);
    }

    moveUp() {
        if (this.canMoveImage(this.image, 'up')) {
            this.clearTile();
            this.y -= this.unit;
            this.drawTile();
        }
    }

    moveDown() {
        if (this.canMoveImage(this.image, 'down')) {
            this.clearTile();
            this.y += this.unit;
            this.drawTile();
        }
    }

    moveLeft() {
        if (this.canMoveImage(this.image, 'left')) {
            this.clearTile();
            this.x -= this.unit;
            this.drawTile();
        }
    }

    moveRight() {
        if (this.canMoveImage(this.image, 'right')) {
            this.clearTile();
            this.x += this.unit;
            this.drawTile();
        }
    }

    canMoveImage(image: HTMLImageElement, direction: string) {
        switch (direction) {
            case 'up':
                return this.y > 0;
            case 'down':
                return (this.y + this.h) < game.c.height;
            case 'left':
                return this.x > 0;
            case 'right':
                return (this.x + this.w) < game.c.width;
        }
    }
}

class Zombie extends Tile {
    public image: HTMLImageElement
    constructor(
        image: string,
        x: number,
        y: number
    ) {
        super(image, x, y);
    }
}

class Player extends Tile {
    constructor(
        image: string,
        x: number,
        y: number
    ) {
        super(image, x, y);
        this.createControls();
    }

    createControls() {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    this.moveUp();
                    break;
                case 'ArrowDown':
                    this.moveDown();
                    break;
                case 'ArrowLeft':
                    this.moveLeft();
                    break;
                case 'ArrowRight':
                    this.moveRight();
                    break;
            }
        }, true);
    }
}
class CollisionDetection {
  constructor(
    image, w, h
  ) {}
}
class Wall extends Tile {
    constructor(
        image, x, y
    ) {
        super(image, x, y);
    }
}
const unit = 50;
let game: IGame = new Game();
let zombies: Array<ITile> = [
    new Zombie('zombie.gif', unit * 8, unit * 3),
    new Zombie('zombie.gif', unit * 5, unit * 2),
    new Zombie('zombie.gif', unit * 1, unit * 5),
    new Zombie('zombie.gif', unit * 4, unit * 7),
    new Zombie('zombie.gif', unit * 10, unit * 7),
    new Zombie('zombie.gif', unit * 13, unit * 5),
];
let wall: Array<ITile> = [
    new Wall('bricks.jpg', unit * 0, unit * 0),
    new Wall('bricks.jpg', unit * 13, unit * 1),
    new Wall('bricks.jpg', unit * 0, unit * 1),
    new Wall('bricks.jpg', unit * 0, unit * 2),
    new Wall('bricks.jpg', unit * 0, unit * 3),
    new Wall('bricks.jpg', unit * 0, unit * 5),
    new Wall('bricks.jpg', unit * 1, unit * 0),
    new Wall('bricks.jpg', unit * 2, unit * 0),
    new Wall('bricks.jpg', unit * 3, unit * 0),
    new Wall('bricks.jpg', unit * 4, unit * 0),
    new Wall('bricks.jpg', unit * 5, unit * 0),
    new Wall('bricks.jpg', unit * 6, unit * 0),
    new Wall('bricks.jpg', unit * 7, unit * 0),
    new Wall('bricks.jpg', unit * 8, unit * 0),
    new Wall('bricks.jpg', unit * 9, unit * 0),
    new Wall('bricks.jpg', unit * 11, unit * 0),
    new Wall('bricks.jpg', unit * 12, unit * 0),
    new Wall('bricks.jpg', unit * 13, unit * 0),
    new Wall('bricks.jpg', unit * 14, unit * 0),
    new Wall('bricks.jpg', unit * 15, unit * 0),
    new Wall('bricks.jpg', unit * 2, unit * 1),
    new Wall('bricks.jpg', unit * 6, unit * 1),
    new Wall('bricks.jpg', unit * 7, unit * 1),
    new Wall('bricks.jpg', unit * 8, unit * 1),
    new Wall('bricks.jpg', unit * 9, unit * 1),
    new Wall('bricks.jpg', unit * 14, unit * 1),
    new Wall('bricks.jpg', unit * 15, unit * 1),
    new Wall('bricks.jpg', unit * 2, unit * 2),
    new Wall('bricks.jpg', unit * 3, unit * 2),
    new Wall('bricks.jpg', unit * 4, unit * 2),
    new Wall('bricks.jpg', unit * 10, unit * 2),
    new Wall('bricks.jpg', unit * 11, unit * 2),
    new Wall('bricks.jpg', unit * 15, unit * 2),
    new Wall('bricks.jpg', unit * 4, unit * 3),
    new Wall('bricks.jpg', unit * 7, unit * 3),
    new Wall('bricks.jpg', unit * 10, unit * 3),
    new Wall('bricks.jpg', unit * 12, unit * 3),
    new Wall('bricks.jpg', unit * 13, unit * 3),
    new Wall('bricks.jpg', unit * 15, unit * 3),
    new Wall('bricks.jpg', unit * 0, unit * 4),
    new Wall('bricks.jpg', unit * 1, unit * 4),
    new Wall('bricks.jpg', unit * 2, unit * 4),
    new Wall('bricks.jpg', unit * 6, unit * 4),
    new Wall('bricks.jpg', unit * 7, unit * 4),
    new Wall('bricks.jpg', unit * 13, unit * 4),
    new Wall('bricks.jpg', unit * 15, unit * 4),
    new Wall('bricks.jpg', unit * 4, unit * 5),
    new Wall('bricks.jpg', unit * 5, unit * 5),
    new Wall('bricks.jpg', unit * 6, unit * 5),
    new Wall('bricks.jpg', unit * 8, unit * 5),
    new Wall('bricks.jpg', unit * 9, unit * 5),
    new Wall('bricks.jpg', unit * 10, unit * 5),
    new Wall('bricks.jpg', unit * 11, unit * 5),
    new Wall('bricks.jpg', unit * 15, unit * 5),
    new Wall('bricks.jpg', unit * 0, unit * 6),
    new Wall('bricks.jpg', unit * 3, unit * 6),
    new Wall('bricks.jpg', unit * 4, unit * 6),
    new Wall('bricks.jpg', unit * 10, unit * 6),
    new Wall('bricks.jpg', unit * 14, unit * 6),
    new Wall('bricks.jpg', unit * 15, unit * 6),
    new Wall('bricks.jpg', unit * 0, unit * 7),
    new Wall('bricks.jpg', unit * 1, unit * 7),
    new Wall('bricks.jpg', unit * 7, unit * 7),
    new Wall('bricks.jpg', unit * 8, unit * 7),
    new Wall('bricks.jpg', unit * 13, unit * 7),
    new Wall('bricks.jpg', unit * 14, unit * 7),
    new Wall('bricks.jpg', unit * 15, unit * 7),
    new Wall('bricks.jpg', unit * 0, unit * 8),
    new Wall('bricks.jpg', unit * 4, unit * 8),
    new Wall('bricks.jpg', unit * 6, unit * 8),
    new Wall('bricks.jpg', unit * 7, unit * 8),
    new Wall('bricks.jpg', unit * 10, unit * 8),
    new Wall('bricks.jpg', unit * 15, unit * 8),
    new Wall('bricks.jpg', unit * 0, unit * 9),
    new Wall('bricks.jpg', unit * 1, unit * 9),
    new Wall('bricks.jpg', unit * 2, unit * 9),
    new Wall('bricks.jpg', unit * 3, unit * 9),
    new Wall('bricks.jpg', unit * 4, unit * 9),
    new Wall('bricks.jpg', unit * 5, unit * 9),
    new Wall('bricks.jpg', unit * 6, unit * 9),
    new Wall('bricks.jpg', unit * 7, unit * 9),
    new Wall('bricks.jpg', unit * 8, unit * 9),
    new Wall('bricks.jpg', unit * 9, unit * 9),
    new Wall('bricks.jpg', unit * 10, unit * 9),
    new Wall('bricks.jpg', unit * 11, unit * 9),
    new Wall('bricks.jpg', unit * 12, unit * 9),
    new Wall('bricks.jpg', unit * 13, unit * 9),
    new Wall('bricks.jpg', unit * 14, unit * 9),
    new Wall('bricks.jpg', unit * 15, unit * 9),
];
let player: ITile = new Player('player.png', unit * 1, unit * 1);
