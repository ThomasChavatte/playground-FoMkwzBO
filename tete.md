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
    	public Corsa() {
    		this.nom = "Corsa"; this.marque = "Opel";
    	}	
    	int getPrix() {return 5000;}	
    	int getPoids() {return 1500;}	
}
    class C2 extends Voiture{
    	public C2() {
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

public class Usine {
    public static void main(String[] args) {
		Voiture corsa = new Corsa();
		Voiture corsaOption = new CorsaAvecToitOuvrantDecorator(corsa);
		System.out.println(corsaOption.getPoids()+" - "+corsaOption.getPrix());
	}
}
class CorsaAvecToitOuvrantDecorator extends VoitureAvecToitOuvrant{
	public CorsaAvecToitOuvrantDecorator(Corsa cor) {
		this.voiture = cor;
	}
}
```

```java runnable
public class Usine {
	// Implémentation
	public static void main(String[] args) {
		Voiture corsa = new Corsa();
		Voiture corsaOption = new CorsaAvecToitOuvrantDecorator(ds);
		System.out.println(CorsaOption.getPoids()+" - "+CorsaOption.getPrix());
	}
}


class CorsaAvecToitOuvrantDecorator extends VoitureAvecToitOuvrant{
	public CorsaAvecToitOuvrantDecorator(Corsa cor) {
		this.voiture = cor;
	}
}

abstract class Voiture {
	String nom;
	int Poids;
	int Prix;
	abstract int getPrix();
	abstract int getPoids();
	abstract String getLibelle();
}
class 
Corsa extends Voiture{
    	public Corsa() {
    		this.nom = "Corsa";
    		this.Poids=1500;
    		this.Prix=5000;
    	}	
    	int getPrix() {return this.Prix ;}	
    	int getPoids() {return this.Poids;}	
    	String getLibelle() {return this.nom;}
}
class C2 extends Voiture{
    	public C2() {
    		this.nom = "C2";
    		this.Poids=1000;
    		this.Prix=4000;
    	}	
    	int getPrix() {return this.Prix;}	
    	int getPoids() {return this.Poids;}
    	String getLibelle() {return this.nom;}
}

abstract class VoitureAvecOption extends Voiture{
	Voiture voiture;
}	
class ToitOuvrant extends VoitureAvecOption{
	
	int getPrix() {return voiture.getPrix() + 2000;}
	int getPoids() {return voiture.getPoids() + 15;}
	String getLibelle() {return voiture.getLibelle() + "+ Toit Ouvrant";}
}
class GPS extends VoitureAvecOption{
	
	int getPrix() {return voiture.getPrix() + 1000;}
	int getPoids() {return voiture.getPoids() + 20;}
	String getLibelle() {return voiture.getLibelle() + "+ GPS";}
}
class Regulateur extends VoitureAvecOption{
	
	int getPrix() {return voiture.getPrix() + 200;}
	int getPoids() {return voiture.getPoids() + 1;}
	String getLibelle() {return voiture.getLibelle() + "+ Regulateur";}
}

```


