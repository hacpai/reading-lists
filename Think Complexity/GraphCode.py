class Graph(dict):
    """A Graph is a dictionary of dictionaris. The outer dictionary maps
    from a vertex to an inner dictionary.
    The inner dictionary maps from other vertices to edges.

    For vertices a and b, graph([a, b], [ab]) maps to the edge that
    connects a->b, if it exists."""

    def __init__(self, vs=[], es=[]):
        """Creates a new graph.
        vs: list of vertices;
        es: list of edge.
        """
        for v in vs:
            self.add_vertex(v)

        for e in es:
            self.add_edge(e)

    def add_vertex(self, v):
        """Add a vertex to the graph."""
        self[v] = {}

    def add_edge(self, e):
        """Add a edge to the graph by adding an entry in both directons.

        if there is already an edge connecting these Vertices,
        the new edge replaces it.
        """
        v, w = e
        self[v][w] = e
        self[w][v] = e


class Vertex(object):
    """A Vertex is a node in a graph."""

    def __init__(self, label = ''):
        self.label = label

    def __repr__(self):
        """Returns a string representation of this object that can be
        evaluated as a Python expression."""
        return 'Vertex (%s)' % repr(self.label)

    __str__ = __repr__


class Edge(tuple):
    """An Edge is a list of two Vertics."""

    def __new__(cls, e1, e2):
        """The Edge constructor takes two Vertics."""
        if len(vs) != 2:
            raise ValueError, 'Edges must connect exactly two vertices.'
        return tuple.__new__(cls, (e1, e2))

    def __repr__(self):
        """Returns a string representation of this object that can be
        evaluated as a Python expression."""
        return 'Edge (%s, %s)' % (repr(self[0]), repr(self[1]))

    __str__ = __repr__


if __name__ == '__main__':
    x = Vertex('x')
    y = Vertex('y')
    xy = Edge(x, y)
    g = Graph([x, y], [xy])
    print x
    print xy
    print g
