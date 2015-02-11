import string
import random


def make_words_dict( fname ):
    """Reads a file, break each line into words, strips whitespace and
    punctuation from the words, and converte them to lowercase.
    """
    d = {}
    fin = open( fname )
    for line in fin:
        words = line.replace( '-', ' ' )
        for word in words.split():
            word = word.strip( string.whitespace + string.punctuation ).lower()
            d[word] = d.get( word, 0 ) + 1

    return d


def print_word_count( d ):
    """Print the number of different words used in the book.
    """
    t = []
    for word, count in d.iteritems():
        t.append( ( count, word ) )

    t.sort( reverse = True )

    print 'The most common words are:'

    for count, word in t[:20]:
        print word, ':', count


def print_word_not_in_words ( book, words ):
    """Prints all the words in the book that are not in the word list.
    """
    d = make_words_dict( words )
    diff = set( book ) - set ( d )
    print 'The words in the book that aren\'t in the word list are:'

    for word in diff:
        print word,

def choose_from_hist( hist ):
    """Return a random value from the histogram
    chosen with probability in proportion to frequency.
    """
    t = []
    for word, freq in hist.iteritems():
        t.extend( [word] * freq )

    return random.choice( t )


book_dict = make_words_dict( 'emma.txt' )
print 'Total number of words:', sum( words_dict.values() )
print 'Number of different words:', len( words_dict.keys() )
print_word_count( words_dict )
print_word_not_in_words( book_dict, 'words.txt' )
print choose_from_hist( book_dict )
