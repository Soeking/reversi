class Game(private var gameSize: Int) {
    //true => black, false => white
    private val stones = Array<Array<Boolean?>>(gameSize) { Array(gameSize) { null } }
}