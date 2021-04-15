import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.*
import org.w3c.dom.events.MouseEvent

class Canvas(private val gameSize: Int) {
    private val canvas = initializeCanvas()
    private val context = canvas.getContext("2d") as CanvasRenderingContext2D
    private val width = canvas.width / 2.0
    private val height = canvas.height.toDouble()
    private val boardSize = minOf(width, height)
    private val origin = canvas.width / 3.0
    private var gridSize = boardSize / gameSize
    private val interval = 1000 / 30
    private val game = Game(gameSize)

    init {
        canvas.onmousedown = { e: MouseEvent ->
        }

        canvas.onmousemove = { e: MouseEvent ->
        }

        window.setInterval({
            drawBoard()
        }, interval)
    }

    private fun initializeCanvas(): HTMLCanvasElement {
        val canvas = document.createElement("canvas") as HTMLCanvasElement
        val context = canvas.getContext("2d") as CanvasRenderingContext2D
        context.canvas.width = window.innerWidth
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
}