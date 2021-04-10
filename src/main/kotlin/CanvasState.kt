import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.*
import org.w3c.dom.events.MouseEvent

class CanvasState {
    private val canvas = initializeCanvas()
    private val context = canvas.getContext("2d") as CanvasRenderingContext2D
    private var width = canvas.width / 2
    private var height = canvas.height / 2
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
        context.canvas.height = window.innerHeight
        document.body!!.appendChild(canvas)
        return canvas
    }

    private fun clear() {
        context.fillStyle = "#D0D0D0"
        context.fillRect(100.0, 100.0, width.toDouble(), height.toDouble())
        context.strokeStyle = "#000000"
        context.lineWidth = 4.0
        context.strokeRect(100.0, 100.0, width.toDouble(), height.toDouble())
    }
}