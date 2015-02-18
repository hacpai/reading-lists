class Time( object ):
    """Represents the time of day.

    attributes: hour, minute, second
    """


def print_time( time ):
    """Prints it in the from hour:minute:second.
    """
    print '%.2d:%.2d:%.2d' % ( time.hour, time.minute, time.second )


def is_after( t1, t2 ):
    """Returns True if t1 follow t2 chronologically and False otherwise.

    don't use an if staatement.

    t1: Time object
    t2: Time object
    """
    return ( t1.hour, t1.minute, t1.second ) > ( t2.hour, t2.minute, t2.second )


def increment_modifier( time, second ):
    """Adds a given number of seconds to a Time object.

    doesn't contain any loops
    """
    total_second = time.hour * 60 * 60 + time.minute * 60 + time.second \
            + second
    minute, time.second = divmod( total_second, 60 )
    time.hour, time.minute = divmod( minute, 60 )


def increment_pure( time, second ):
    """Returns a new time Object that adds a given number of seconds to a Time object.

    doesn't contain any loops
    """
    new_time = copy.copy( time )
    total_second = time.hour * 60 * 60 + time.minute * 60 + time.second \
            + second
    minute, new_time.second = divmod( total_second, 60 )
    new_time.hour, new_time.minute = divmod( minute, 60 )

    return new_time


def time_to_int( time ):
    """Converts Times to integers.
    """
    minute = time.hour * 60 + time.minute
    second = minute * 60 + time.second
    return second


def int_to_time( second ):
    """Converts int to Time.
    """
    time = Time()
    minute, time.second = divmod( second, 60 )
    time.hour, time.minute = divmod( minute, 60 )
    return time


def increment_using_time_to_int_and_int_to_time( time, second ):
    """Returns a new time Object that adds a given number of seconds to a Time object.

    doesn't contain any loops
    """
    seconds = time_to_int( time ) + second
    return int_to_time( seconds )

class Time( object ):
    """Represents a Time object.

    attribute: hour, minute, second

    method: time_to_int
    """
    def time_to_int( self ):
        minute = self.hour * 60 + self.minute
        return minute * 60 + self.second


class Time( object ):
    """Represents a time of whole day.

    attributes: seconds
    """
    def __init__( self, hour, minute, second ):
        minutes = hour * 60 + minute
        self.seconds = minutes * 60 + second

    def __comp__( self, other ):
        """Returns a positive number if the first object is greater,
        a negative number if the second object is greater,
        and 0 if they are equal to each other.
        """
        return cmp( self.seconds, other.seconds )
