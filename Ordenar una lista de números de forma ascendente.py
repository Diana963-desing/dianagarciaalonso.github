>>> mi_lista = [7, 3, 5, 1]

>>> def ordenar_lista(x):
	x.sort()
	for elem in x:
		print(elem)

>>> ordenar_lista(mi_lista)
1
3
5
7


>>> mi_lista
[1, 3, 5, 7]