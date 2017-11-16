# Première étape.

Premièrement on crée la classe abstraite qui regroupe les méthodes et les attributs communs. Ce sont ces méthodes que l'on utiliserait dans les autres classes
    
```java Runnable
public abstract class Voiture {
	String nom, marque; 
	abstract int getPrix();
	abstract int getPoids();
}
```

# Deuxieme étape 

    Maintenant on crée la classe Corsa et la classe C2 qui correspond aux classes Composant Concret. Elle héritent de la classe voiture. Dans le constructeur de ces classes on met à jour les attributs défini dans Voiture à l’aide des accesseurs

```java Runnable
    class Corsa extends Voiture{
    	public DS() {
    		this.nom = "Corsa"; this.marque = "Opel";
    	}	
    	int getPrix() {return 5000;}	
    	int getPoids() {return 1500;}	
}
    class C2 extends Voiture{
    	public DS() {
    		this.nom = "C2"; this.marque = "Citroën";
    	}	
    	int getPrix() {return 4000;}	
    	int getPoids() {return 1000;}	
}
```
# Troiseème étape 

    
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


