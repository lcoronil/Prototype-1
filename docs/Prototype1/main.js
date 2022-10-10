title = "Ghost Hunt";

description = `
[Hold]
	Use Flashlight 

Goal:
	Destroy Ghosts
`;

characters = [];

options = {
	isPlayingBgm: true,
	isReplayEnabled: true,
	seed: 3,
	theme: "dark",
};

/** @type {{pos: Vector, radius: number, isDestroyed: boolean}[]} */
let planets;
let nextPlanetDist;
/** @type {{planet: any, angle: number, av: number, pos: Vector, target: Vector}} */
let man;
let flyingTicks;
let multiplier;
/** @type {{pos: Vector, vy: number}[]} */
let stars;

function update() {
  if (!ticks) {
    planets = [{ pos: vec(50, 0), radius: 5, isDestroyed: false }];
    nextPlanetDist = 20;
    man = {
      planet: planets[0],
      angle: PI / 2,
      av: 1,
      pos: vec(50, 0),
      target: vec(50, 0),
    };
    flyingTicks = 0;
    multiplier = 1;
    stars = times(20, () => {
      return { pos: vec(rnd(99), rnd(99)), vy: rnd(3, 6) };
    });
  }
}
