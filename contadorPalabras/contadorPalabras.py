import string

def contador_palabras(arc):
    contador = {}

    with open(arc, "r", encoding="utf-8") as a:
        for renglon in a:
            renglon = renglon.lower().translate(str.maketrans("","",string.punctuation))
            palabras = renglon.split()

            for palabra in palabras:
                contador[palabra] = contador.get(palabra, 0) + 1

    masApariciones = sorted(contador.items(), key=lambda x:x[1], reverse=True)[:10]
    return masApariciones



def main(archivo):
    print(contador_palabras(archivo))

pruebatxt = "archivoPrueba.txt"
main(pruebatxt)