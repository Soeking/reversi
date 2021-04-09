import react.*
import styled.css
import styled.styledButton

class Info : RComponent<RProps, RState>() {
    override fun RBuilder.render() {
        styledButton {
            css {
                +Style.restart
            }
            +"restart"
        }
    }
}

fun RBuilder.info() = child(Info::class) {}