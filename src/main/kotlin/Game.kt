class Game(private var gameSize: Int) {
    //true => black, false => white
    val stones = Array<Array<Boolean?>>(gameSize) { Array(gameSize) { null } }

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
}