def has_no_e( word ):
    """Retruns True if the given word have no 'e', False otherwise.
    """
    for i in word:
        if i == 'e':
            return False
    return True


def avoids( word, letters ):
    """Retruns True if the word doesn't use any of the letters.
    """
    for letter in letters:
        if letter in word:
            return False
    return True


def uses_only( word, letters ):
    """Return True if the word contains only letters in the list.
    """
    for w in word:
        if w not in letters:
            return False
    return True


def uses_all( word, letters ):
    """Return True if the word uses all the required letters.
    """
    for letter in letters:
        if letter not in word:
            return False
    return True


def is_abecedarian( word ):
    """Return True if the letters in a word appear in alphabetical order.
    """
    now_letter = word[0]
    for w in word:
        if now_letter > w:
            return False
        now_letter = w
    return True


#letters = raw_input( 'Enter a string of forbidden letters: ' )
#fin = open( 'word.txt', 'r' )
#sum_counter = 0
#no_letters_counter = 0
#for line in fin:
    #word = line.strip()
    #if avoids( word, letters ):
        #no_letters_counter += 1
    #sum_counter += 1
#print 'The number of words that don\'t contain any of', letters, \
        #'is', sum_counter - no_letters_counter
print is_abecedarian( 'anc' )
print is_abecedarian( 'bcd' )
print is_abecedarian( 'aabbcc' )
