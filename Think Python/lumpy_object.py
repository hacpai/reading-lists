from swampy.Lumpy import *
import copy


class Point(object):
    """Represents a Point with 2-D space.

    attribute: x, y
    """


class Rectangle(object):
    """Represents a Rectangle.

    attribute: width, height, cornner of Point object
    """


def histogram(s):
    d = dict()
    for c in s:
        if c not in d:
            d[c] = 1
        else:
            d[c] += 1
    return d


def invert_dict(d):
    inv = dict()
    for key in d:
        val = d[key]
        if val not in inv:
            inv[val] = [key]
        else:
            inv[val].append(key)
    return inv


lumpy = Lumpy()
lumpy.make_reference()

empty = []

hist = histogram('parrot')
inverse = invert_dict(hist)

box = Rectangle()
box.width = 100.0
box.height = 200.0
box.corner = Point()
box.corner.x = 0.0
box.corner.y = 0.0

box2 = copy.copy(box)

lumpy.object_diagram()
