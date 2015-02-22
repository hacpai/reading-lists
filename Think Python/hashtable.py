class LinearMap(object):

    def __init__(self):
        self.items = []

    def add(self, k, v):
        self.items.append((k, v))

    def get(self, k):
        for key, val in self.items:
            if k == key:
                return val


class BetterMap(object):

    def __init__(self, n=100):
        self.maps = []
        for i in range(n):
            self.maps.append(LinearMap())

    def find(self, k):
        index = hash(k) % len(self.maps)
        return self.maps[index]

    def add(self, k, v):
        self.find(k).add(k, v)

    def get(self, k):
        return self.find(k).get(k)


class HashMap(object):

    def __init__(self):
        self.maps = BetterMap(2)
        self.num = 0

    def get(self, k):
        return self.maps.get(k)

    def add(self, k, v):
        if self.num == len(self.maps.maps):
            self.resize()

        self.maps.add(k, v)
        self.num += 1

    def resize(self):
        new_maps = BetterMap(self.num * 2)
        for key, val in self.maps.maps.items:
            new_maps.add(key, val)

        self.maps = new_maps


hashmap = HashMap()
hashmap.add('a', 97)
print hashmap.get('a')
hashmap.add('b', 98)
print hashmap.get('b')
