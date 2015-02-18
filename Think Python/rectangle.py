import copy


class Point( object ):
    """Represents a Point with 2-D space.

    Attribute: x, y
    """


class Rectangle( object ):
    """Represents a Rectangle.

    Attribute: width, height, corner
    """


def distance_between_point( pa, pb ):
    """Competes the distance between two Point object.
    """
    return math.sqrt( ( pa.x - pb.x ) ** 2 + ( pa.y - pb.y ) ** 2 )


def move_rectangle( rect, dx, dy ):
    """Move the Rectangle by modifying its corner object.

    rect: Rectangle object
    dx: change in x coordinate
    dy: change in y coordinate
    """
    rect_copy = copy.deepcopy( rect )
    rect_copy.corner.x += dx
    rect_copy.corner.y += dy

    return rect_copy


origin = Point()
origin.x = 0
origin.y = 0

square = Rectangle()
square.width = 20
square.height = 20
square.corner = origin
print square.corner.x, square.corner.y

print 'move'
new_square = move_rectangle( square, 10, 10 )
print new_square.corner.x, new_square.corner.y
