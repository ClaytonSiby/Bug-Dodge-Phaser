const LoadAssetsAndCreate = (() => {
  const preload = () => {
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
  };

  const create = () => {};

  return { preload, create };
})();

export default LoadAssetsAndCreate;
