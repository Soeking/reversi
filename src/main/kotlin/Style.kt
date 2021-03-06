import kotlinx.css.*
import styled.StyleSheet

object Style : StyleSheet("Style", isStatic = true) {
    private val style = CSSBuilder().apply {
        body {
            fontSize = 15.px
        }

        canvas {
            marginTop = 50.px
        }
    }

    val restart by css {
        width = 80.px
        textAlign = TextAlign.center
        padding(10.px)
        marginLeft = 500.px
        marginRight = 5.px
        hover {
            backgroundColor = rgba(200, 200, 200, 0.7)
        }
    }

    val gameSize by css {
        padding(10.px)
        margin(5.px)
        hover {
            backgroundColor = rgba(180, 180, 250, 0.8)
        }
    }

    fun applyStyle() {
        styled.injectGlobal(style.toString())
    }
} 
