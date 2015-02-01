from swampy.TurtleWorld import *
import math

#def polygon( t, length, n ):
    #max_cir_angle = 360
    #angle = max_cir_angle / n
    #for i in range( n ):
        #fd( t, length )
        #lt( t, angle )

def polyline ( t, length, n, angle ):
    """
    Draws n line segments with the given length and
    angle between them. t is a turtle.
    """
    for i in range( n ):
        fd( t, length )
        lt( t, angle )

def polygon( t, length, n ):
    max_cir_angle = 360
    angle = max_cir_angle / n
    polyline( t, length, n, angle )

def circle( t, r ):
    circumference = 2 * math.pi * r
    n = int( circumference / 3 ) + 1
    length = circumference / n
    polygon( t, length, n ) 

def arc( t, r, angle ):
    max_cir_angle = 360
    arc_length = 2 * math.pi * r * angle / max_cir_angle 
    n = int( arc_length / 3 ) + 1
    step_length = arc_length / n
    step_angle = float( angle ) / n
    
    #for i in range( n ):
        #fd( t, step_length )
        #lt( t, step_angle )

    polyline( t, step_length, n, step_angle )

world = TurtleWorld()
bob = Turtle()

bob.delay = 0.01
print bob

polygon( bob, length = 80, n = 5 )
circle( bob, r = 80 )
#arc( bob, r = 80, angle = 90 )

wait_for_user()
