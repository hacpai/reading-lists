from swampy.Lumpy import Lumpy


def countdown(n):
    if n <= 0:
        print 'Blastoff!'
        lumpy.object_diagram()
    else:
        print n
        countdown(n-1)


lumpy = Lumpy()
lumpy.make_reference()
countdown(3)
