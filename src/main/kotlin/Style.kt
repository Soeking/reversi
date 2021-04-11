import kotlinx.css.*
import styled.StyleSheet

object Style : StyleSheet("Style", isStatic = true) {
    private val style = CSSBuilder().apply {
        canvas {
            backgroundColor = Color.red
        }
    }

    val restart by css {
        fontSize = 15.px
        width = 80.px
        height = 30.px
        textAlign = TextAlign.center
        marginLeft = 500.px
        hover {
            backgroundColor = rgba(200, 200, 200, 0.7)
        }
    }

    fun applyStyle() {
        styled.injectGlobal(style.toString())
    }
} 
