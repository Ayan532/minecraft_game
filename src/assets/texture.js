import { NearestFilter, TextureLoader, RepeatWrapping } from 'three'
import { glass,dirt,grass,log,wood } from './images'



const dirtTexture = new TextureLoader().load(dirt)
const logTexture = new TextureLoader().load(log)
const grassTexture = new TextureLoader().load(grass)
const glassTexture = new TextureLoader().load(glass)
const woodTexture = new TextureLoader().load(wood)
const groundTexture = new TextureLoader().load(grass)

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

export {
	dirtTexture,
	logTexture,
	grassTexture,
	glassTexture,
	woodTexture,
	groundTexture
}