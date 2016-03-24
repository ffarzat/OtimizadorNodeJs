//Represents a Abstract Heuristic
abstract class IHeuristc {

    //Obliagtes every Heuristic to Hanlde it own setup based in same configuration file
    public abstract Setup(configuration: Configuration): boolean;

}