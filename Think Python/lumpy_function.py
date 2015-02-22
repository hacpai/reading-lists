from swampy.Lumpy import *
import copy


lumpy = Lumpy()
lumpy.make_reference()


class Rectangle(object):
    """Represents a Rectangle.

    attribute: width, height, cornner of Point object
    """


class Point(object):
    """Represents a Point with 2-D space.

    attribute: x, y
    """


def instantiate(constructor):
    """Instantiates a new object."""
    obj = constructor()
    lumpy.object_diagram()
    return obj

point = instantiate(Point)
