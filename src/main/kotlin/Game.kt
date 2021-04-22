import kotlinx.html.I

class Game(private var gameSize: Int) {
    //true => black, false => white
    private val stones = Array<Array<Boolean?>>(gameSize) { Array(gameSize) { null } }
    private var turn = true

    init {
        if (gameSize == 8) {
            stones[3][3] = false
            stones[3][4] = true
            stones[4][3] = true
            stones[4][4] = false
        } else {
            stones[2][2] = false
            stones[2][3] = true
            stones[3][2] = true
            stones[3][3] = false
        }
    }

    fun getStones(): List<Triple<Double, Double, Boolean>> {
        return mutableListOf<Triple<Double, Double, Boolean>>().apply {
            for (x in 0 until gameSize) {
                for (y in 0 until gameSize) {
                    stones[x][y]?.let {
                        add(Triple(x.toDouble(), y.toDouble(), it))
                    }
                }
            }
        }
    }

    fun clickBoard(x: Int, y: Int): Pair<Int, Int>? {
        if (check(x, y)) {
            stones[x][y] = turn
            reverseStones(x, y)
            turn = !turn
            if (canSet().not()) turn = !turn
            if (canSet().not()) return endGame()
        }
        return null
    }

    private fun check(x: Int, y: Int): Boolean {
        if (stones[x][y] != null) return false
        if (checkAround(x, y, { it }, { it - 1 })) return true
        if (checkAround(x, y, { it + 1 }, { it - 1 })) return true
        if (checkAround(x, y, { it + 1 }, { it })) return true
        if (checkAround(x, y, { it + 1 }, { it + 1 })) return true
        if (checkAround(x, y, { it }, { it + 1 })) return true
        if (checkAround(x, y, { it - 1 }, { it + 1 })) return true
        if (checkAround(x, y, { it - 1 }, { it })) return true
        if (checkAround(x, y, { it - 1 }, { it - 1 })) return true
        return false
    }

    private fun checkAround(setX: Int, setY: Int, expX: (Int) -> Int, expY: (Int) -> Int): Boolean {
        var x = expX(setX)
        var y = expY(setY)
        if (x !in 0 until gameSize || y !in 0 until gameSize) return false
        if (stones[x][y] != !turn) return false
        x = expX(x)
        y = expY(y)
        while ((x in 0 until gameSize) && (y in 0 until gameSize)) {
            when (stones[x][y]) {
                null -> return false
                turn -> return true
            }
            x = expX(x)
            y = expY(y)
        }
        return false
    }

    private fun reverseStones(x: Int, y: Int) {
        if (checkAround(x, y, { it }, { it - 1 })) reverse(x, y, { it }, { it - 1 })
        if (checkAround(x, y, { it + 1 }, { it - 1 })) reverse(x, y, { it + 1 }, { it - 1 })
        if (checkAround(x, y, { it + 1 }, { it })) reverse(x, y, { it + 1 }, { it })
        if (checkAround(x, y, { it + 1 }, { it + 1 })) reverse(x, y, { it + 1 }, { it + 1 })
        if (checkAround(x, y, { it }, { it + 1 })) reverse(x, y, { it }, { it + 1 })
        if (checkAround(x, y, { it - 1 }, { it + 1 })) reverse(x, y, { it - 1 }, { it + 1 })
        if (checkAround(x, y, { it - 1 }, { it })) reverse(x, y, { it - 1 }, { it })
        if (checkAround(x, y, { it - 1 }, { it - 1 })) reverse(x, y, { it - 1 }, { it - 1 })
    }

    private fun reverse(setX: Int, setY: Int, expX: (Int) -> Int, expY: (Int) -> Int) {
        var x = expX(setX)
        var y = expY(setY)
        while ((x in 0 until gameSize) && (y in 0 until gameSize)) {
            if (stones[x][y] == turn) break
            stones[x][y] = turn
            x = expX(x)
            y = expY(y)
        }
    }

    private fun canSet(): Boolean {
        for (x in 0 until gameSize) {
            for (y in 0 until gameSize) {
                if (stones[x][y] == null) {
                    if (check(x, y)) return true
                }
            }
        }
        return false
    }

    private fun endGame(): Pair<Int, Int> {
        var black = 0
        var white = 0
        stones.forEach {
            it.forEach { b ->
                when (b) {
                    true -> black++
                    false -> white++
                }
            }
        }
        return Pair(black, white)
    }
}