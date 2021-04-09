import kotlinx.css.*
import styled.StyleSheet

object Style : StyleSheet("Style", isStatic = true) {
    val restart by css {
        fontSize = 15.px
        width = 30.px
        height = 80.px
        textAlign = TextAlign.center
        hover {
            backgroundColor = rgb(10, 10, 10)
        }
    }
} 
