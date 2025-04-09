<template lang="pug">
  canvas(ref="canvas" :width="this.width", :height="this.height")
</template>

<script>
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const radian = (degrees) => (-degrees - 180) * Math.PI / 180
class Petal {
  constructor(index, angleDiff, color, width, height) {
    const angle = (index * angleDiff) + random(-20, 21)
    const lengthA = 120 + random(-40, 41)
    const lengthB = 120 + random(-40, 41)

    this.sx = width / 2
    this.sy = height / 2

    const anx = this.sx + Math.sin(radian(angle - angleDiff / 2)) * lengthA + random(-20, 20)
    const any = this.sy + Math.cos(radian(angle - angleDiff / 2)) * lengthA + random(-20, 20)
    const bnx = this.sx + Math.sin(radian(angle + angleDiff / 2)) * lengthB + random(-20, 20)
    const bny = this.sy + Math.cos(radian(angle + angleDiff / 2)) * lengthB + random(-20, 20)

    this.ax = anx
    this.ay = any
    this.bx = bnx
    this.by = bny

    this.ex = this.sx
    this.ey = this.sy

    this.color = color
    this.target = this
  }
  set(context) {
    context.strokeStyle = 'black'
    context.lineWidth = 2
    context.fillStyle = this.color
    context.beginPath()
    context.moveTo(this.sx, this.sy)
    context.bezierCurveTo(this.ax, this.ay, this.bx, this.by, this.ex, this.ey)
    context.fill()
    context.stroke()
    context.closePath()
  }
  change() {
    this.ax += (this.target.ax - this.ax) / 20
    this.ay += (this.target.ay - this.ay) / 20
    this.bx += (this.target.bx - this.bx) / 20
    this.by += (this.target.by - this.by) / 20
  }
}

class Stem {
  constructor(width, height) {
    this.sx = width / 2, this.sy = height / 2
    this.ex = this.sx, this.ey = height + 20
    this.ax = this.sx + random(-100, 100), this.ay = this.sy + random(20, 100)
    this.bx = this.ex + random(-100, 100), this.by = this.ey - random(20, 100)
    this.thick = 20
    this.border = 2

    this.target = this
  }

  set(context) {
    context.lineWidth = this.thick + this.border * 2

    context.beginPath()
    context.moveTo(this.sx, this.sy)
    context.bezierCurveTo(this.ax, this.ay, this.bx, this.by, this.ex, this.ey)
    context.strokeStyle = 'black'
    context.stroke()
    context.closePath()

    context.lineWidth = this.thick

    context.beginPath()
    context.moveTo(this.sx, this.sy)
    context.bezierCurveTo(this.ax, this.ay, this.bx, this.by, this.ex, this.ey)
    context.strokeStyle = 'green'
    context.stroke()
    context.closePath()
  }

  change() {
    this.ax += (this.target.ax - this.ax) / 20
    this.ay += (this.target.ay - this.ay) / 20
    this.bx += (this.target.bx - this.bx) / 20
    this.by += (this.target.by - this.by) / 20
  }
}

class MiddleCircle {
  constructor(width, height) {
    this.cx = width / 2
    this.cy = height / 2
    this.radiusX = 20 + random(-10, 10)
    this.radiusY = 20 + random(-10, 10)
    this.angle = Math.random()
    this.thick = 2
    this.target = this
  }

  set(context) {
    context.fillStyle = 'yellow'
    context.strokeStyle = 'black'
    context.lineWidth = this.thick
    context.beginPath()
    context.ellipse(this.cx, this.cy, this.radiusX, this.radiusY, this.angle, 0, 2 * Math.PI);
    context.fill()
    context.stroke()
    context.closePath()
  }

  change() {
    this.radiusX += (this.target.radiusX - this.radiusX) / 20
    this.radiusY += (this.target.radiusY - this.radiusY) / 20
    this.angle += (this.target.angle - this.angle) / 20
  }
}

export default {
  data() {
    return {
      width: 180,
      height: 180,
      context: null,
    }
  },
  mounted() {
    const dpr = window.devicePixelRatio || 1
    this.$refs.canvas.width = this.width * dpr
    this.$refs.canvas.height = this.height * dpr
    this.$refs.canvas.style.width = this.width + 'px'
    this.$refs.canvas.style.height = this.height + 'px'
    this.context = this.$refs.canvas.getContext('2d')
    this.context.scale(dpr, dpr)

    this.flower = {
      petals: [
        new Petal(0, 60, 'red', this.width, this.height),
        new Petal(1, 60, 'red', this.width, this.height),
        new Petal(2, 60, 'red', this.width, this.height),
        new Petal(3, 60, 'red', this.width, this.height),
        new Petal(4, 60, 'red', this.width, this.height),
        new Petal(5, 60, 'red', this.width, this.height),
      ],
      stem: new Stem(this.width, this.height),
      middle: new MiddleCircle(this.width, this.height)
    }
    
  	setInterval(this.changeFlower,800)
    requestAnimationFrame(this.animate)
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.context.clearRect(0, 0, this.width, this.height)

      this.flower.stem.set(this.context)
      this.flower.stem.change()
      this.flower.petals.forEach((item) => item.set(this.context))
      this.flower.petals.forEach((item) => item.change())
      this.flower.middle.set(this.context)
		  this.flower.middle.change()  
    },
    changeFlower() {
		  this.flower.stem.target = new Stem(this.width,this.height)
		  this.flower.petals.forEach((item,index)=>item.target=new Petal(index,60,'red',this.width,this.height))
		  this.flower.middle.target = new MiddleCircle(this.width,this.height)
    }
  }
}
</script>

<style lang="sass" scoped>
canvas
  flex-shrink: 0
</style>
