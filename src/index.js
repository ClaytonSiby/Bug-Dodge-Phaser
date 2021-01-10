const gameState = {};

function preload() {
    this.load.image('bug1', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png');
    this.load.image('bug2', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_2.png');
    this.load.image('bug3', 'https://content.codecademy.com/courses/learn-phaser/physics/bug_3.png');
    this.load.image('platform', 'https://content.codecademy.com/courses/learn-phaser/physics/platform.png');
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/physics/codey.png');
}

function create() {
  this.physics.add.sprite(300, 200, 'codey');
}

function update() {}

const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 500,
    backgroundColor: '#b9eaff',
    physics: {
        arcade: {
            gravity: { y: 200 },
            enableBody: true,
        }
    },

    scene: {
        preload,
        create,
        update
    }
}
