<template lang="pug">
    canvas(ref="canvas" :width="this.width", :height="this.height")
</template>

<script>
class Point{
	constructor(x,y,angle){
		this.x=x
		this.y=y
		this.angle=angle
	}
}

export default {
  data() {
    return {
        width: 180,
        height: 100,
        frame: 0,
        image: [
            new Point(-295, 87, this.random(0, 360)),
            new Point(-296, -114, this.random(0, 360)),
            new Point(-213, -98, this.random(0, 360)),
            new Point(-179, -18, this.random(0, 360)),
            new Point(-161, -116, this.random(0, 360)),
            new Point(-102, -114, this.random(0, 360)),
            new Point(-110, -35, this.random(0, 360)),
            new Point(-85, -88, this.random(0, 360)),
            new Point(-20, -114, this.random(0, 360)),
            new Point(49, -79, this.random(0, 360)),
            new Point(47, -119, this.random(0, 360)),
            new Point(98, -117, this.random(0, 360)),
            new Point(133, 18, this.random(0, 360)),
            new Point(161, -61, this.random(0, 360)),
            new Point(191, 28, this.random(0, 360)),
            new Point(209, -145, this.random(0, 360)),
            new Point(280, -125, this.random(0, 360)),
            new Point(234, 110, this.random(0, 360)),
            new Point(170, 110, this.random(0, 360)),
            new Point(162, 73, this.random(0, 360)),
            new Point(140, 118, this.random(0, 360)),
            new Point(68, 119, this.random(0, 360)),
            new Point(62, 56, this.random(0, 360)),
            new Point(-13, 110, this.random(0, 360)),
            new Point(-98, 104, this.random(0, 360)),
            new Point(-114, 41, this.random(0, 360)),
            new Point(-121, 109, this.random(0, 360)),
            new Point(-173, 111, this.random(0, 360)),
            new Point(-231, 10, this.random(0, 360)),
            new Point(-230, 89, this.random(0, 360))
        ],
        colors: ['black', '#35fe02', 'red', '#0008ff', '#ff0095'],
        color: null,
        shiftX: 3,
        shiftY: 4,
        context: null,
    }
  },
  mounted(){
    this.color = this.colors[this.random(0,this.colors.length)]
    this.context = this.$refs.canvas.getContext('2d')
    requestAnimationFrame(this.animate)
  },
  methods:{
    random(min, max){
      return Math.floor(Math.random()*(max-min)+min)
    },
    animate(){
        requestAnimationFrame(this.animate)
		this.context.clearRect(0,0,this.width,this.height)

		//NOW
		const zoom = 3.4
		this.context.beginPath()
		for(let i = 0; i < this.image.length; i++)
		{
			const dot = this.image[i]
			const nx=Math.sin(this.frame+dot.angle)*4/zoom+this.shiftX
			const ny=Math.cos(this.frame+dot.angle)*4/zoom+this.shiftY
			const x = (dot.x/zoom)+this.width/2+nx
			const y = (dot.y/zoom)+this.height/2+ny
			if(i == 0) this.context.moveTo(x,y)
			else this.context.lineTo(x,y)
		}
		this.context.fillStyle = this.color
		this.context.closePath()
		this.context.fill()

		// EYE
		const radius = 110/zoom
		const ungap = radius/2
		this.context.fillStyle = 'white'
		this.context.beginPath()
		const PI = Math.PI
		this.context.arc(this.width/2-16/zoom+this.shiftX,this.height/2-ungap+this.shiftY,radius,PI/6,5*PI/6)
		this.context.closePath()
		this.context.fill()
		this.context.beginPath()
		this.context.arc(this.width/2-16/zoom+this.shiftX,this.height/2+ungap+this.shiftY,radius,-5*PI/6,-PI/6)
		this.context.closePath()
		this.context.fill()

		this.context.fillStyle = 'black'
		this.context.beginPath()
		this.context.arc(this.width/2-16/zoom+this.shiftX,this.height/2+this.shiftY,55/zoom,0,2*Math.PI)
		this.context.closePath()
		this.context.fill()

		// SETTINGS
		this.frame+=.1
    }
  }
}
</script>

<style lang="sass">
canvas
    flex-shrink: 0
</style>
