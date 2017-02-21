var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game = (function () {
    function Game() {
        this.c = document.getElementById('myCanvas');
        this.context = this.c.getContext('2d');
    }
    return Game;
}());
var Tile = (function () {
    function Tile(image, x, y) {
        var _this = this;
        this.unit = 50;
        this.image = new Image();
        this.image.src = image;
        this.image.height = this.unit;
        this.image.width = this.unit;
        this.x = x;
        this.y = y;
        this.w = this.unit;
        this.h = this.unit;
        this.image.addEventListener('load', function () {
            _this.drawTile();
        });
    }
    Tile.prototype.drawTile = function () {
        game.context.drawImage(this.image, this.x, this.y, this.w, this.h);
    };
    Tile.prototype.clearTile = function () {
        game.context.clearRect(this.x, this.y, this.w, this.h);
    };
    Tile.prototype.moveUp = function () {
        if (this.canMoveImage(this.image, 'up')) {
            this.clearTile();
            this.y -= this.unit;
            this.drawTile();
        }
    };
    Tile.prototype.moveDown = function () {
        if (this.canMoveImage(this.image, 'down')) {
            this.clearTile();
            this.y += this.unit;
            this.drawTile();
        }
    };
    Tile.prototype.moveLeft = function () {
        if (this.canMoveImage(this.image, 'left')) {
            this.clearTile();
            this.x -= this.unit;
            this.drawTile();
        }
    };
    Tile.prototype.moveRight = function () {
        if (this.canMoveImage(this.image, 'right')) {
            this.clearTile();
            this.x += this.unit;
            this.drawTile();
        }
    };
    Tile.prototype.canMoveImage = function (image, direction) {
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
    };
    return Tile;
}());
var Zombie = (function (_super) {
    __extends(Zombie, _super);
    function Zombie(image, x, y) {
        return _super.call(this, image, x, y) || this;
    }
    return Zombie;
}(Tile));
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(image, x, y) {
        var _this = _super.call(this, image, x, y) || this;
        _this.createControls();
        return _this;
    }
    Player.prototype.createControls = function () {
        var _this = this;
        document.addEventListener('keydown', function (event) {
            switch (event.key) {
                case 'ArrowUp':
                    _this.moveUp();
                    break;
                case 'ArrowDown':
                    _this.moveDown();
                    break;
                case 'ArrowLeft':
                    _this.moveLeft();
                    break;
                case 'ArrowRight':
                    _this.moveRight();
                    break;
            }
        }, true);
    };
    return Player;
}(Tile));
var CollisionDetection = (function () {
    function CollisionDetection(image, w, h) {
    }
    return CollisionDetection;
}());
var Wall = (function (_super) {
    __extends(Wall, _super);
    function Wall(image, x, y) {
        return _super.call(this, image, x, y) || this;
    }
    return Wall;
}(Tile));
var unit = 50;
var game = new Game();
var zombies = [
    new Zombie('zombie.gif', unit * 8, unit * 3),
    new Zombie('zombie.gif', unit * 5, unit * 2),
    new Zombie('zombie.gif', unit * 1, unit * 5),
    new Zombie('zombie.gif', unit * 4, unit * 7),
    new Zombie('zombie.gif', unit * 10, unit * 7),
    new Zombie('zombie.gif', unit * 13, unit * 5),
];
var wall = [
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
var player = new Player('player.png', unit * 1, unit * 1);
