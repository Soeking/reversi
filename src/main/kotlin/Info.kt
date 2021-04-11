import kotlinx.html.js.onClickFunction
import react.*
import styled.css
import styled.styledButton

class Info : RComponent<RProps, RState>() {
    companion object {
        var gameSize = 8
    }

    override fun RBuilder.render() {
        styledButton {
            css {
                +Style.restart
            }
            +"restart"
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
            attrs.onClickFunction = { gameSize = 6 }
        }
    }
}

fun RBuilder.info() = child(Info::class) {}