import kotlinx.html.js.onClickFunction
import react.*
import styled.css
import styled.styledButton

class Info : RComponent<RProps, RState>() {
    private var canvas: Canvas
    private var gameSize: Int

    init {
        gameSize = 8
        canvas = Canvas(gameSize)
    }

    override fun RBuilder.render() {
        styledButton {
            css {
                +Style.restart
            }
            +"restart"
            attrs.onClickFunction = {
                canvas.destroy()
                canvas = Canvas(gameSize)
            }
        }
        styledButton {
            css {
                +Style.gameSize
            }
            +"6"
            attrs.onClickFunction = { gameSize = 6 }
        }
        styledButton {
            css {
                +Style.gameSize
            }
            +"8"
            attrs.onClickFunction = { gameSize = 8 }
        }
    }
}

fun RBuilder.info() = child(Info::class) {}