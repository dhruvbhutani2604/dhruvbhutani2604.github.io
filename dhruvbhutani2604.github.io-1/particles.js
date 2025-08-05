particlesJS("particles-js",
	{
		"particles": {
			"number": {
				"value": 150,
				"density": {
					"enable": true,
					"value_area": 1000
				}
			},
			"color": {
				"value": ["#ffffff", "#e0e0e0", "#b0b0b0"]
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 0
				}
			},
			"opacity": {
				"value": 0.8,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 0.5,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 2,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 2,
					"size_min": 0.5,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.2,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 0.8,
				"direction": "none",
				"random": true,
				"straight": false,
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 600
				}
			}
		},
		"interactivity": {
			// "detect_on":"canvas",
			"events": {
				"onhover": {
					"enable": false,
					"mode": "bubble"
				},
				"onclick": {
					"enable": false,
					"mode": "repulse"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 250,
					"size": 0,
					"duration": 2,
					"opacity": 0,
					"speed": 3
				},
				"repulse": {
					"distance": 400,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});
