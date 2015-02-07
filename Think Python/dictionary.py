import bisect
import time


def make_word_list():
    """Reads lines from a file and builds a sorted list using append."""
    word_list = []
    fin = open( 'words.txt', 'r' )
    for line in fin:
        word = line.strip()
        word_list.append( word )

    return word_list


def is_match_in_bisect( word_list, word ):
    """Checks whether a word is in a sorted list using bisection search.

    Precondition: the words in the list are sorted

    word_list: list of strings
    word: string
    """
    index = bisect.bisect_left( word_list, word )
    if index < len( word_list ) and word_list[index] == word:
        return True
    else:
        return False


def make_word_dictory():
    """Reads the words in words.txt and stores them as keys in a dictionary.
    """
    word_dictory = dict()
    fin = open( 'words.txt', 'r' )
    for line in fin:
        word = line.strip()
        word_dictory[word] = line

    return word_dictory


def histogram( s ):
    """Statistics count of letter in string using get method.

    s: String

    Return a storted result dictionary.
    """
    d = dict()
    for c in s:
        if d.get( c, 0 ) > 0:
            d[c] += 1
        else:
            d[c] = 1

    return d


def print_hist( d ):
    """Prints each key and corresponding value in alphabetical order in dictionary.

    d: dictionary
    """
    d_key_sorted_list = d.keys()
    d_key_sorted_list.sort()
    for key in d_key_sorted_list:
        print key, d[key]


def reverse_lookup( d, val ):
    """Builds and Returns a list of all keys that map to val,
    or an empty list if there are none.

    val: value in dictionary
    """
    keys_list = []
    for key in d:
        if d[key] == val:
            keys_list.append( key )

    return keys_list


def invert_dict( d ):
    """invert key and value in dictionary using setdefault method.
    """
    invert = dict()
    for key in d:
        val = d[key]
        if invert.setdefault( val, [key] ):
            invert[val].append( key )

    return invert


def fibonacci( n ):
    """Computes fibonacci n.
    """
    if n == 0:
        return 1
    elif n == 1:
        return 1
    else:
        return fibonacci( n - 1 ) + fibonacci( n - 2 )


fibonacci_memo = { 0: 1, 1: 1 }
def fibonacci_using_memo( n ):
    """Computes fibonacci n using memo.
    """
    if n in fibonacci_memo:
        return fibonacci_memo[n]

    res = fibonacci_using_memo( n - 1 ) + fibonacci_using_memo( n - 2 )
    fibonacci_memo[n] = res
    return res


known = {}
def ackermann( m, n ):
    """Memoize the Ackermann function.
    """
    if ( m, n ) in known:
        return known[( m, n )]
    if m == 0:
        #known[( m, n )] = n + 1
        return n + 1
    elif m > 0 and n == 0:
        #known[( m, n )] = ackermann( m - 1, 1 )
        return ackermann( m - 1, 1 )
    elif m > 0 and n > 0:
        known[( m, n )] = ackermann( m - 1, ackermann( m, n - 1 ) )
        return known[( m, n )]


def ackermann_no_memo( m, n ):
    """Evaluates Ackermann's function.
    """
    if m == 0:
        return n + 1
    elif m > 0 and n == 0:
        return ackermann_no_memo( m - 1, 1 )
    elif m > 0 and n > 0:
        return ackermann_no_memo( m - 1, ackermann_no_memo( m, n - 1 ) )


#h = histogram( 'parrot' )
#print invert_dict( h )
start = time.time()
print ackermann_no_memo( 3, 4 )
print time.time() - start

start = time.time()
print ackermann( 3, 4 )
print known
print time.time() - start

