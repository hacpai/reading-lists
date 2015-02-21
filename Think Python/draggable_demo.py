from swampy.Gui import *


class Draggable(Item):

    def __init__(self, item):
        self.canvas = item.canvas
        self.tag = item.tag
        self.bind('<Button-3>', self.select)
        self.bind('<B3-Motion>', self.drag)
        self.bind('<Release-3>', self.drop)

    def select(self, event):
        self.dragx = event.x
        self.dragy = event.y

        self.fill = self.cget('fill')
        self.config(fill='yellow')

    def drag(self, event):
        dx = event.x - self.dragx
        dy = event.y - self.dragy

        self.dragx = event.x
        self.dragy = event.y

        self.move(dx, dy)

    def drop(self, event):
        self.config(fill=self.fill)


def make_circle(event):
    pos = ca.canvas_coords([event.x, event.y])
    item = ca.circle(pos, 5, fill='white')
    Draggable(item)

def make_text(event=None):
    text = en.get()
    item = ca.text([0,0], text)
    Draggable(item)


g = Gui()
g.title('Draggable Demo')
ca = g.ca(width=500, height=500, bg='black')
ca.bind('<ButtonPress-3>', make_circle)

g.row([1,0])
en = g.en()
bu = g.bu('Make text item:', make_text)
en.bind('<Return>', make_text)

g.mainloop()
