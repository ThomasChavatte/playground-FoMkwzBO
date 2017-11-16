# Première étape.

Premièrement on crée la classe abstraite qui regroupe les méthodes et les attributs communs. Ce sont ces méthodes que l'on utilisera dans les autres classes
    
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
# Troisième étape 

A présent, on crée le Décorateur. Celui-ci possède une voiture en attribut et oblige la redéfinission de deux méthodes getLibelle() et getPrix(). 
    
```java Runnable
abstract class VoitureAvecOption extends Voiture{
	Voiture voiture;
}
```
# Quatrième étape

 On crée une classe pour chaque option que l'on souhaite aujouter. Chaque Option (ToitOuvrant, Climatisation, Régulateur...) doit hériter de la classe VoitureAvecOption.

```java Runnable
class ToitOuvrant extends VoitureAvecOption{
	
	int getPrix() {return voiture.getPrix() + 2000;}
	int getPoids() {return voiture.getPoids() + 15;}	
}
class Climatisation extends VoitureAvecOption{
	
	int getPrix() {return voiture.getPrix() + 1000;}
	int getPoids() {return voiture.getPoids() + 20;}	
}
class Regulateur extends VoitureAvecOption{
	
	int getPrix() {return voiture.getPrix() + 200;}
	int getPoids() {return voiture.getPoids() + 1;}	
}
```
# Cinquième étape 

Maintenant on implément le main pour utiliser notre décorateur
    
```java Runnable
class CorsaAvecToitOuvrantDecorator extends VoitureAvecToitOuvrant{
	public CorsaAvecToitOuvrantDecorator(Corsa cor) {
		this.voiture = cor;
	}
}
```

```java Runnable

Public class CorsaAvecToitOuvrantDecorator extends VoitureAvecToitOuvrant{
	public CorsaAvecToitOuvrantDecorator(Corsa cor) {
		this.voiture = cor;
	}
}

abstract class Voiture {
	String nom, marque; 
	abstract int getPrix();
	abstract int getPoids();
}
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

abstract class VoitureAvecOption extends Voiture{
	Voiture voiture;
}	
class ToitOuvrant extends VoitureAvecOption{
	
	int getPrix() {return voiture.getPrix() + 2000;}
	int getPoids() {return voiture.getPoids() + 15;}	
}
class Climatisation extends VoitureAvecOption{
	
	int getPrix() {return voiture.getPrix() + 1000;}
	int getPoids() {return voiture.getPoids() + 20;}	
}
class Regulateur extends VoitureAvecOption{
	
	int getPrix() {return voiture.getPrix() + 200;}
	int getPoids() {return voiture.getPoids() + 1;}	
}

```

```javascript runnable
var a = 2;
var b = 4;
console.log(a+b);
```


