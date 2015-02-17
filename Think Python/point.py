class Point( object ):
    """Represents a Point with 2-D space.

    attribute: x, y
    """
    def __init__( self, x = 0, y = 0 ):
        self.x = x
        self.y = y

    def __add__( self, other ):
        if isinstance( other, Point ):
            return self.add_point( other )
        else:
            return self.add_tuple( other )

    def __radd__( self, other ):
        return self.__add__( other )

    def __str__( self ):
        return '( %d, %d )' % ( self.x, self.y )

    def add_point( self, other ):
        point = Point()
        point.x = self.x + other.x
        point.y = self.y + other.y
        return point

    def add_tuple( self, other ):
        point = Point()
        x, y = other
        point.x = self.x + x
        point.y = self.y + y
        return point


point = Point( x = 10, y = 10 )
print point
orig_point = Point()
print orig_point
print point + orig_point
print point + ( 2, 3 )
print ( 1, 4 ) + point
