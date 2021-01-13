import GameScene from './GameScene';

class EndScene extends Phaser.Scene {
  constructor () {
    super({ key: 'EndScene' })
  }

  create () {
    this.add.text(180, 250, 'Game Over', { fontSize: '15px', fill: 'red' })
    this.add.text(152, 270, 'Click to Restart', {
      fontSize: '15px',
      fill: '#000000'
    })

    this.input.on('pointerup', () => {
      this.scene.stop('EndScene')
      this.scene.start('GameScene')
    })
  }
}

export default EndScene
