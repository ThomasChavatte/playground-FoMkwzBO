# Première étape

```java Runnable
public abstract class Voiture {
	String nom, marque; 
	abstract int getPrix();
	abstract int getPoids();
}
```

```java Runnable
    class Corsa extends Voiture{
    	public DS() {
    		this.nom = "Corsa"; this.marque = "Opel";
    	}	
    	int getPrix() {return 5000;}	
    	int getPoids() {return 1500;}	
}
```

```java Runnable
abstract class VoitureAvecOption extends Voiture{
	Voiture voiture;
}
```

```java Runnable
class VoitureAvecToitOuvrant extends VoitureAvecOption{
	
	int getPrix() {return voiture.getPrix() + 10000;}
	int getPoids() {return voiture.getPoids() + 15;}	
}
```

```java Runnable
class CorsaAvecToitOuvrantDecorator extends VoitureAvecToitOuvrant{
	public CorsaAvecToitOuvrantDecorator(Corsa cor) {
		this.voiture = cor;
	}
}


