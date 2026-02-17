import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function registerPlugins() {
	if (typeof window !== 'undefined') {
		gsap.registerPlugin(ScrollTrigger);
	}
}
