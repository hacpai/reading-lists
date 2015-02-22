from swampy.Lumpy import *
import copy


lumpy = Lumpy()
lumpy.make_reference()


class Card(object):
    """Represents a Poker Card.
    """
    labels = ['straightflush', 'fourkind', 'fullhouse', 'flush',
            'straight', 'threekind', 'twopair', 'pair', 'highcard']


    def __init__(self, suit, rank):
        self.suit = suit
        self.rank = rank

class Rectangle(object):
    """Represents a Rectangle.

    attribute: width, height, cornner of Point object
    """


class Point(object):
    """Represents a Point with 2-D space.

    attribute: x, y
    """


box = Rectangle()
box.width = 100.0
box.height = 200.0
box.corner = Point()
box.corner.x = 0.0
box.corner.y = 0.0
card =Card(1,2)
card.label = Card.labels[1]

lumpy.class_diagram()
