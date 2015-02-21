from swampy.Gui import *


def set_color(color):
    mb.config(text=color)
    print color


g = Gui()
g.title('Menubutton Demo')
g.la('Select a color:')
colors = ['red', 'green', 'blue']
mb = g.mb(text='color')

for color in colors:
    g.mi(mb, text=color, command=Callable(set_color, color))

g.mainloop()
