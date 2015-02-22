from swampy.Lumpy import Lumpy


lumpy = Lumpy()
lumpy.make_reference()

n = 17
s = set(['a', 'b', 'c', 'b'])
pi = 3.1415926
lst = [1, 2, 3, 4]
d = {'a': 97, 'b': 98, 'c': 99}
tup = ('A', 65)
message = 'And now for something completely different'

lumpy.object_diagram()
