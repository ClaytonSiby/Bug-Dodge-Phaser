const GameLogic = (() => {
  function preload() {
    this.load.image(
      'bug1',
      'https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png',
    );
    this.load.image(
      'bug2',
      'https://content.codecademy.com/courses/learn-phaser/physics/bug_2.png',
    );
    this.load.image(
      'bug3',
      'https://content.codecademy.com/courses/learn-phaser/physics/bug_3.png',
    );
    this.load.image(
      'platform',
      'https://content.codecademy.com/courses/learn-phaser/physics/platform.png',
    );
    this.load.image(
      'codey',
      'https://content.codecademy.com/courses/learn-phaser/physics/codey.png',
    );
  }

  const gameState = { score: 0 };

  function create() {
    // Add your code below:
    gameState.player = this.physics.add.sprite(225, 440, 'codey').setScale(0.5);

    // set cursor object in the gameState object
    gameState.cursors = this.input.keyboard.createCursorKeys();

    const platforms = this.physics.add.staticGroup();
    platforms.create(225, 510, 'platform');

    gameState.player.setCollideWorldBounds(true);
    this.physics.add.collider(gameState.player, platforms);

    // create a group for enemy objects.
    const bugs = this.physics.add.group();

    // buglist
    const bugList = [ 'bug1', 'bug2', 'bug3' ];

    // callback to randomly place enemy objects on the game platform
    function bugGen() {
      const xCoordinate = Math.random() * 450;
      let randomBug = bugList[Math.floor(Math.random() * 3)];

      bugs.create(xCoordinate, 10, randomBug);
    }

    // object for that timely calls the bugGen method.
    const bugObject = {
      callback: bugGen,
      delay: 150,
      callbackScope: this,
      loop: true,
    };

    // call the .addEvent() & pass in the bugObject timely calling the bugs.
    const bugGenLoop = this.time.addEvent(bugObject);

    // display initial score: 0 text.
    gameState.scoreText = this.add.text(195, 485, 'Score: 0', {
      fontSize: '15px', fill: '#000000',
    });

    // add a collider object between bugs & platforms. Destroy the bug as it hits the platform.
    this.physics.add.collider(bugs, platforms, (bug) => {
      bug.destroy();

      gameState.score += 10;
      gameState.scoreText.setText(`Score: ${gameState.score}`);
    });

    this.physics.add.collider(gameState.player, bugs, () => {
      bugGenLoop.destroy();

      this.physics.pause();
      this.add.text(180, 250, 'Game Over',
        { fontSize: '15px', fill: 'red' });
      this.add.text(152, 270, 'Click to Restart',
        { fontSize: '15px', fill: '#000000' });

      this.input.on('pointerup', () => {
        gameState.score = 0;
        this.scene.restart();
      });
    });
  }

  function update() {
    if (gameState.cursors.left.isDown) {
      gameState.player.setVelocityX(-160);
    } else if (gameState.cursors.right.isDown) {
      gameState.player.setVelocityX(160);
    } else {
      gameState.player.setVelocityX(0);
    }
  }

  const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 500,
    backgroundColor: 'b9eaff',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 },
        enableBody: true,
        // debug: true,
      },
    },
    scene: {
      preload,
      create,
      update,
    },
  };

  const game = new Phaser.Game(config);

  return { game };
})();

export default GameLogic;
