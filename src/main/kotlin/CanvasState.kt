import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.*
import org.w3c.dom.events.MouseEvent

class CanvasState {
    private val canvas = initializeCanvas()
    private val context = canvas.getContext("2d") as CanvasRenderingContext2D
    private val width = canvas.width / 2.0
    private val height = canvas.height / 2.0
    private val boardSize = minOf(width, height)
    private val interval = 1000 / 30

    init {
        canvas.onmousedown = { e: MouseEvent ->
        }

        canvas.onmousemove = { e: MouseEvent ->
        }

        window.setInterval({
//            draw()
        }, interval)
        clear()
    }

    private fun initializeCanvas(): HTMLCanvasElement {
        val canvas = document.createElement("canvas") as HTMLCanvasElement
        val context = canvas.getContext("2d") as CanvasRenderingContext2D
        context.canvas.width = window.innerWidth
        context.canvas.height = window.innerHeight * 4 / 5
        document.body!!.appendChild(canvas)
        return canvas
    }

    private fun clear() {
        context.fillStyle = "#30EE50"
        context.fillRect(width, 0.0, boardSize, boardSize)
        context.strokeStyle = "#000000"
        context.lineWidth = 2.0
        context.strokeRect(width, 0.0, boardSize, boardSize)
    }
}