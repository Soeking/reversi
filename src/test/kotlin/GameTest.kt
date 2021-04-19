import kotlin.test.Test
import kotlin.test.assertEquals

class GameTest {
    @Test
    fun stonesTest() {
        val game = Game(8)
        assertEquals(game.getStones().size, 4)
    }
}