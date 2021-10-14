registerPaint('smooth-corners', class {
    static get inputProperties() {
        return [
            '--smooth-corners'
        ]
    }

    paint(ctx, geom, properties) {
        const c = properties.get('--smooth-corners').toString()

        ctx.fillStyle = 'black'

        const n = c
        let m = n
        if (n > 100) m = 100
        if (n < 0.00000000001) m = 0.00000000001
        const r = geom.height / 2
        const w = geom.width / 2
        const h = geom.height / 2
        const diff = w - r

        ctx.beginPath()

        for (let i = 0; i < (2 * r + 1); i++) {
            let x = (i - r) + w - diff
            if (x > r) {
                x += 2 * diff
            }

            const y = (Math.pow(Math.abs(Math.pow(r, m) - Math.pow(Math.abs(i - r), m)), 1 / m)) + h

            if (i == 0)
                ctx.moveTo(x, y)
            else
                ctx.lineTo(x, y)
        }

        for (let i = (2 * r); i < (4 * r + 1); i++) {
            let x = (3 * r - i) + w + diff
            if (x < 2 * w - r) {
                x -= 2 * diff
            }

            const y = (-Math.pow(Math.abs(Math.pow(r, m) - Math.pow(Math.abs(3 * r - i), m)), 1 / m)) + h
            ctx.lineTo(x, y)
        }

        ctx.closePath()
        ctx.fill()
    }
})
