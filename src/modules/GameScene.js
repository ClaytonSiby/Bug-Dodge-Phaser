class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })

    this.gameState = { score: 0 }
  }

  preload () {
    this.load.image(
      'bug1',
      'https://content.codecademy.com/courses/learn-phaser/physics/bug_1.png'
    )
    this.load.image(
      'bug2',
      'https://content.codecademy.com/courses/learn-phaser/physics/bug_2.png'
    )
    this.load.image(
      'bug3',
      'https://content.codecademy.com/courses/learn-phaser/physics/bug_3.png'
    )
    this.load.image(
      'platform',
      'https://content.codecademy.com/courses/learn-phaser/physics/platform.png'
    )
    this.load.image(
      'codey',
      'https://content.codecademy.com/courses/learn-phaser/physics/codey.png'
    )
  }

  create () {
    // Add your code below:
    this.gameState.player = this.physics.add.sprite(225, 440, 'codey').setScale(0.5)

    // set cursor object in the this.gameState object
    this.gameState.cursors = this.input.keyboard.createCursorKeys()

    const platforms = this.physics.add.staticGroup()
    platforms.create(225, 510, 'platform')

    this.gameState.player.setCollideWorldBounds(true)
    this.physics.add.collider(this.gameState.player, platforms)

    // create a group for enemy objects.
    const bugs = this.physics.add.group()

    // buglist
    const bugList = ['bug1', 'bug2', 'bug3']

    // callback to randomly place enemy objects on the game platform
    function bugGen () {
      const xCoordinate = Math.random() * 450
      let randomBug = bugList[Math.floor(Math.random() * 3)]

      bugs.create(xCoordinate, 10, randomBug)
    }

    // object for that timely calls the bugGen method.
    const bugObject = {
      callback: bugGen,
      delay: 150,
      callbackScope: this,
      loop: true
    }

    // call the .addEvent() & pass in the bugObject timely calling the bugs.
    const bugGenLoop = this.time.addEvent(bugObject)

    // display initial score: 0 text.
    this.gameState.scoreText = this.add.text(195, 485, 'Score: 0', {
      fontSize: '15px',
      fill: '#000000'
    })

    // add a collider object between bugs & platforms. Destroy the bug as it hits the platform.
    this.physics.add.collider(bugs, platforms, bug => {
      bug.destroy()

      this.gameState.score += 10
      this.gameState.scoreText.setText(`Score: ${this.gameState.score}`)
    })

    this.physics.add.collider(this.gameState.player, bugs, () => {
      bugGenLoop.destroy()

      this.physics.pause()

      this.input.on('pointerup', () => {
        this.gameState.score = 0
        this.scene.restart()
      })

      this.scene.stop('GameScene');
      this.scene.start('EndScene');
    })
  }

  update () {
    if (this.gameState.cursors.left.isDown) {
      this.gameState.player.setVelocityX(-160)
    } else if (this.gameState.cursors.right.isDown) {
      this.gameState.player.setVelocityX(160)
    } else {
      this.gameState.player.setVelocityX(0)
    }
  }
}

export default GameScene;
