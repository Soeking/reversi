import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.*
import org.w3c.dom.events.MouseEvent
import kotlin.math.PI

class Canvas(private val gameSize: Int) {
    private val canvas = initializeCanvas()
    private val context = canvas.getContext("2d") as CanvasRenderingContext2D
    private val width = canvas.width / 2.0
    private val height = canvas.height.toDouble()
    private val boardSize = minOf(width, height)
    private val origin = canvas.width / 3.0
    private val gridSize = boardSize / gameSize
    private val halfGridSize = gridSize / 2.0
    private val endAngle = 2 * PI
    private val interval = 1000 / 30
    private val game = Game(gameSize)

    init {
        canvas.onclick = { e: MouseEvent ->
            handleClick(e)
        }

        window.setInterval({
            drawBoard()
            drawStones()
        }, interval)
    }

    private fun initializeCanvas(): HTMLCanvasElement {
        val canvas = document.createElement("canvas") as HTMLCanvasElement
        val context = canvas.getContext("2d") as CanvasRenderingContext2D
        context.canvas.width = window.innerWidth * 9 / 10
        context.canvas.height = window.innerHeight * 7 / 10
        document.body!!.appendChild(canvas)
        return canvas
    }

    fun destroy() {
        document.body!!.removeChild(canvas)
    }

    private fun drawBoard() {
        context.fillStyle = "#30EE50"
        context.strokeStyle = "#000000"
        context.lineWidth = 1.0
        for (x in 0 until gameSize) {
            for (y in 0 until gameSize) {
                context.fillRect(origin + x * gridSize, y * gridSize, gridSize, gridSize)
                context.strokeRect(origin + x * gridSize, y * gridSize, gridSize, gridSize)
            }
        }
    }

    private fun drawStones() {
        game.getStones().forEach {
            drawCircle(origin + it.first * gridSize + halfGridSize, it.second * gridSize + halfGridSize, it.third)
        }
    }

    private fun drawCircle(x: Double, y: Double, color: Boolean) {
        context.fillStyle = if (color) "#000000" else "#FFFFFF"
        context.beginPath()
        context.arc(x, y, halfGridSize, 0.0, endAngle)
        context.fill()
    }

    private fun handleClick(event: MouseEvent) {
        val x = event.offsetX - origin
        val y = event.offsetY
        if ((x in 0.0..boardSize) && y in 0.0..boardSize) {
            game.clickBoard(x.toInt() / gridSize.toInt(), y.toInt() / gridSize.toInt())
        }
    }
}