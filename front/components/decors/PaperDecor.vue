<template lang="pug">
  canvas(ref="canvas" :width="this.width", :height="this.height")
</template>

<script>
import { useMainStore } from '@/store/main.js'
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
const radian = (degrees) => (-degrees - 180) * Math.PI / 180
const getColor = () => `rgb(${random(0, 256)},${random(0, 256)},${random(0, 256)})`
const calculateAngle = (A, B, C) => {
  const AB = { x: B.x - A.x, y: B.y - A.y }
  const CB = { x: B.x - C.x, y: B.y - C.y }

  const dotProduct = AB.x * CB.x + AB.y * CB.y
  const magnitudeAB = Math.sqrt(AB.x ** 2 + AB.y ** 2)
  const magnitudeCB = Math.sqrt(CB.x ** 2 + CB.y ** 2)

  return Math.acos(dotProduct / (magnitudeAB * magnitudeCB)) * (180 / Math.PI)
}
class Vector2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  rotate(angle, length) {
    const radian = -(angle + 180) * Math.PI / 180
    const nx = Math.sin(radian) * length
    const ny = Math.cos(radian) * length
    this.x += nx
    this.y += ny
  }
}
class Square {
  constructor(w, h, x = 0, y = 0) {
    this.w = w
    this.h = h
    this.lt = new Vector2(-w / 2 + x, -h / 2 + y)
    this.rt = new Vector2(w / 2 + x, -h / 2 + y)
    this.lb = new Vector2(-w / 2 + x, h / 2 + y)
    this.rb = new Vector2(w / 2 + x, h / 2 + y)

    this.top1 = new Vector2(random(-w / 2, 0) + x, -h / 2 + y)
    this.top2 = new Vector2(random(0, w / 2) + x, -h / 2 + y)
    this.bottom1 = new Vector2(random(-w / 2, 0) + x, h / 2 + y)
    this.bottom2 = new Vector2(random(0, w / 2) + x, h / 2 + y)
  }

  set() {
    const angleLeft = calculateAngle(this.lt, this.top1, this.bottom1)
    this.pointLT = new Vector2(this.top1.x, this.top1.y)
    this.pointLT.rotate(270 - angleLeft * 2, Math.abs(this.lt.x - this.top1.x))
    this.pointLB = new Vector2(this.bottom1.x, this.bottom1.y)
    this.pointLB.rotate(270 - angleLeft * 2, Math.abs(this.lb.x - this.bottom1.x))
    const angleRight = calculateAngle(this.rt, this.top2, this.bottom2)
    this.pointRT = new Vector2(this.top2.x, this.top2.y)
    this.pointRT.rotate(angleRight * 2 + 90, Math.abs(this.rt.x - this.top2.x))
    this.pointRB = new Vector2(this.bottom2.x, this.bottom2.y)
    this.pointRB.rotate(angleRight * 2 + 90, Math.abs(this.rb.x - this.bottom2.x))
  }

  draw(ctx) {
    let faceColor = random(0, 100) < 50 ? getColor() : '#eee'
    let assColor = faceColor == '#eee' ? getColor() : '#eee'
    if (random(0, 100) < 20) {
      faceColor = getColor()
      assColor = getColor()
    }
    const figures = []
    figures.push(new Figure(this.top1, this.top2, this.bottom2, this.bottom1, faceColor))
    figures.push(new Figure(this.top1, this.pointLT, this.pointLB, this.bottom1, assColor))
    figures.push(new Figure(this.top2, this.pointRT, this.pointRB, this.bottom2, assColor))

    const state = random(0, 100)

    if (state < 30) {
      figures[1].draw(ctx, )
      figures[0].draw(ctx, true)
      figures[2].draw(ctx, )
    }
    else if (state < 60) {
      figures[2].draw(ctx, )
      figures[0].draw(ctx, true)
      figures[1].draw(ctx, )
    }
    else {
      figures[1].draw(ctx, )
      figures[2].draw(ctx, )
      figures[0].draw(ctx, true)
    }
  }
}
class Figure {
  constructor(lt, rt, rb, lb, color) {
    this.lt = lt
    this.rt = rt
    this.rb = rb
    this.lb = lb
    this.color = color
  }

  draw(ctx, origin = false) {
    ctx.fillStyle = this.color
    ctx.lineWidth = 3
    // ctx.lineCap = 'round'

    ctx.beginPath()
    ctx.moveTo(this.lt.x, this.lt.y)
    ctx.lineTo(this.rt.x, this.rt.y)
    ctx.lineTo(this.rb.x, this.rb.y)
    ctx.lineTo(this.lb.x, this.lb.y)
    ctx.closePath()
    // ctx.stroke()
    ctx.fill()

    if (!origin) return
    ctx.save()
    ctx.clip()
    ctx.font = '13px Arial'
    ctx.fillStyle = getColor()
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('keencastor', 0, -8)
    ctx.fillText('paper', 0, 8)
    ctx.restore()
  }
}

export default {
  data() {
    return {
      isFirstFrame: true,
      store: true,
      width: 180,
      height: 180,
      canvas: null,
      context: null,
    }
  },
  mounted() {
    this.store = useMainStore()
    const dpr = window.devicePixelRatio || 1
    this.$refs.canvas.width = this.width * dpr
    this.$refs.canvas.height = this.height * dpr
    this.$refs.canvas.style.width = this.width + 'px'
    this.$refs.canvas.style.height = this.height + 'px'
    this.canvas = this.$refs.canvas
    this.context = this.$refs.canvas.getContext('2d')
    this.context.scale(dpr, dpr)

    this.canvas.addEventListener('click', () => {
      if (!this.isFirstFrame && !this.store.scripts) {
        return
      }
      this.context.clearRect(0, 0, this.width, this.height)
      this.render()
    })

    requestAnimationFrame(this.render)
  },
  beforeUnmount(){
    this.$refs.canvas.removeEventListener('click')
  },
  methods: {
    random(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    render() {
      if (!this.isFirstFrame && !this.store.scripts) {
        return
      }
      this.isFirstFrame = false
      this.context.clearRect(0, 0, this.width, this.height)

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const angle = random(-45, 45)
          const figure = new Square(60, 25)
          figure.set()
          this.context.save()
          this.context.translate(this.canvas.width / 2 + i * 52 - 140, this.canvas.height / 2 + j * 52 - 140)
          this.context.rotate(angle * Math.PI / 180)
          figure.draw(this.context)
          this.context.restore()
        }
      }
    },
  }
}
</script>

<style lang="sass" scoped>
canvas
  flex-shrink: 0
</style>
