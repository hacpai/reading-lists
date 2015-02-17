import random


class Card( object ):
    """Represents a card.

    attributes: suit, rank
    """
    suit_name = { 0:'Clubs', 1:'Diamonds', 2:'Hearts', 3:'Spades'}
    rank_name = {1: 'Ace', 2: '2', 3: '3', 4: '4', 5: '5',
            6: '6', 7: '7', 8: '8', 9: '9',
            10: '10', 11: 'J', 12: 'Q', 13: 'K' }
    def __init__( self, suit = 0, rank = 2 ):
        self.suit = suit
        self.rank = rank

    def __str__( self ):
        return '%s of %s' % ( Card.rank_name[self.rank], 
                Card.suit_name[self.suit] )

    def __cmp__( self, other ):
        """Compare a card.
        """
        return cmp( ( self.suit, self.rank ), ( other.suit, self.rank ) )


class Deck( object ):
    """Represents cards in a deck.
    """
    def __init__( self ):
        self.cards = []
        for suit in range( 4 ):
            for rank in range( 1, 14 ):
                self.cards.append( Card(suit, rank) )

    def __str__( self ):
        res = []
        for card in self.cards:
            res.append( str( card ) )

        return '\n'.join( res )

    def pop_card( self ):
        """Removes a card from the deck and return it.
        """
        return self.cards.pop()

    def add_card( self, card ):
        """Add a card to the deck.
        """
        self.cards.append( card )

    def shuffer( self ):
        """Shuffer the card deck.
        """
        random.shuffle( self.cards )

    def sort( self ):
        """Sorts cards in a deck.
        """
        self.cards.sort()

    def move_card( self, hand, num ):
        """Modifies both self and hand

        hand: a Hand object
        num: the number of cards to deal
        """
        for i in range( num ):
            hand.add_card( self.pop_card() )

    def deal_hands( self, num_of_hand, num_of_cards ):
        """Creates new Hand object, deals the appropriate number of cards per hand.

        num_of_hand: the number of hands
        num_of_cards: the number of cards per hand

        return a list of Hand object
        """
        hand_list = []
        for i in range( num_of_hand ):
            hand = Hand(i)
            self.move_card( hand, num_of_cards )
            hand_list.append( hand )

        return hand_list


class Hand( Deck ):
    """Represents the card of hand.
    """
    def __init__( self, label = '' ):
        self.cards = []
        self.label = label

class PockerHand( Hand ):
    """Represents a card of pocker.
    """
    def shuffer( self ):
        return 'hello'

class BridgeHand( Hand ):
    """Represents a card of Bridge.
    """

def find_defining_class( obj, meth_name ):
    print type( obj ).mro()
    for ty in type( obj ).mro():
        if meth_name in ty.__dict__:
            return ty


#pocker = PockerHand()
#birdage = BridgeHand()
#hand = Hand()
#find_defining_class( pocker,''  )
##print find_defining_class( pocker, 'shuffer' )
##print find_defining_class( birdage, 'shuffer' )
